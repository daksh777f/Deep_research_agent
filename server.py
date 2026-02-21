from fastapi import FastAPI, HTTPException, BackgroundTasks, Header, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict, Any, List, Literal
import uuid
import asyncio
import os
import logging
from datetime import datetime

from main import DeepResearchOrchestratorV2, ResearchResultV2
from src.storage import firestore_store as store
from src.core.firebase_client import db as _firestore_db, run_in_firestore_executor

logger = logging.getLogger(__name__)

app = FastAPI(
    title="Deep Research Agent API",
    description="Autonomous research and architecture generation system",
    version="2.0.0",
)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# In-memory state for live sessions (logs, streaming status)
# Completed sessions are persisted to Firestore
# ---------------------------------------------------------------------------
active_sessions: Dict[str, Dict[str, Any]] = {}


# ---------------------------------------------------------------------------
# Firebase Auth middleware (optional — set FIREBASE_AUTH_ENABLED=true to enforce)
# ---------------------------------------------------------------------------

_AUTH_ENABLED = os.getenv("FIREBASE_AUTH_ENABLED", "false").lower() == "true"


async def verify_firebase_token(authorization: Optional[str] = Header(None)) -> Optional[str]:
    """
    Verify Firebase ID token from the Authorization header.
    Returns the user's UID, or None if auth is disabled.

    NOTE: ``auth.verify_id_token`` is a blocking network call.
    It is dispatched to the thread-pool executor so it never blocks
    the async event loop.
    """
    if not _AUTH_ENABLED:
        return None

    if not authorization:
        raise HTTPException(status_code=401, detail="Missing Authorization header")

    token = authorization.replace("Bearer ", "")
    try:
        from firebase_admin import auth  # type: ignore[import-untyped]

        decoded = await run_in_firestore_executor(auth.verify_id_token, token)
        return decoded["uid"]
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Firebase token")


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------

class ResearchRequest(BaseModel):
    query: str
    max_iterations: int = 3
    search_provider: str = "tavily"
    session_id: Optional[str] = None
    mode: Optional[Literal["quick", "deep"]] = None  # legacy field
    # --- Part 2: Output Control Layer ---
    output_mode: Optional[str] = "deep"   # quick | deep | technical
    audience: Optional[str] = "myself"
    expertise_level: Optional[str] = "intermediate"
    # --- Part 4: Comparison Mode ---
    comparison_mode: Optional[bool] = False
    subject_a: Optional[str] = None
    subject_b: Optional[str] = None
    # --- Clarifying questions ---
    skip_clarification: Optional[bool] = False


class ChallengeRequest(BaseModel):
    claim_marker: str
    claim_text: str
    original_domains: List[str] = []
    confidence_before: float = 0.5


class ExportRequest(BaseModel):
    format: str = "markdown"  # pdf | pptx | docx | markdown | checklist


class ResearchResponse(BaseModel):
    session_id: str
    status: str
    message: str
    clarifying_questions: Optional[List[str]] = None


# ---------------------------------------------------------------------------
# Async-safe Firestore helpers — delegates to the centralised executor in
# src.core.firebase_client.  Kept as a local alias for readability.
# ---------------------------------------------------------------------------

_run_in_executor = run_in_firestore_executor


# ---------------------------------------------------------------------------
# Trust metrics & contradiction helpers for transparency layer
# ---------------------------------------------------------------------------

def _compute_trust_metrics(evidence_graph: dict, sources: list) -> dict:
    """Compute trust metrics from evidence graph data.

    NOTE: evidence_graph.to_dict() stores *edges* as a dict
    keyed by edge-id, not a list.  We must iterate `.values()`.
    Edge dicts use 'from_claim_id' / 'to_source_id' / 'relation'.
    There is no pre-computed 'stats' key — compute from edges.
    """
    if not evidence_graph:
        return {
            "sources_analyzed": len(sources),
            "independent_domains": 0,
            "claims_verified": 0,
            "claims_total": 0,
            "contradictions_found": 0,
            "confidence_score": 0.5,
            "methodology_score": 0.5,
            "bias_risk": "medium",
            "source_independence_index": 0.0,
        }

    eg_claims = evidence_graph.get("claims", {})
    eg_sources = evidence_graph.get("sources", {})
    # edges is a dict {edge_id: edge_dict}, iterate values
    eg_edges_raw = evidence_graph.get("edges", {})
    eg_edges = list(eg_edges_raw.values()) if isinstance(eg_edges_raw, dict) else eg_edges_raw

    sources_analyzed = len(eg_sources) or len(sources)
    domains: set = set()
    for s in eg_sources.values():
        d = s.get("domain", "")
        if d:
            domains.add(d)
    if not domains:
        from urllib.parse import urlparse
        for s in sources:
            try:
                d = urlparse(s.get("url", "")).netloc.replace("www.", "")
                if d:
                    domains.add(d)
            except Exception:
                pass
    independent_domains = len(domains)

    claims_total = len(eg_claims)
    supported_claim_ids: set = set()
    mentioned_claim_ids: set = set()
    contradictions_found = 0
    for edge in eg_edges:
        rel = edge.get("relation", "")
        cid = edge.get("from_claim_id", edge.get("claim_id", ""))
        if rel == "supports":
            supported_claim_ids.add(cid)
        elif rel == "mentions":
            mentioned_claim_ids.add(cid)
        elif rel == "contradicts":
            contradictions_found += 1
    # Count both strongly-supported and source-linked claims
    claims_verified = len(supported_claim_ids)
    # If no "supports" edges exist, count mentions as partial verification
    if claims_verified == 0 and mentioned_claim_ids:
        claims_verified = len(mentioned_claim_ids)
    # Ensure claims_verified never exceeds claims_total
    if claims_total > 0:
        claims_verified = min(claims_verified, claims_total)
    elif claims_verified > 0:
        # edges reference claims not in the claims dict — use verified as total
        claims_total = claims_verified

    # ── Weighted confidence based on actual verification status ────
    # Build a claim → edge-relation map (count per relation type)
    claim_edge_map: dict = {}
    for edge in eg_edges:
        cid = edge.get("from_claim_id", edge.get("claim_id", ""))
        rel = edge.get("relation", "")
        st  = edge.get("strength", 0.5)
        claim_edge_map.setdefault(cid, []).append((rel, st))

    weighted_confidences = []
    for cid, claim_obj in eg_claims.items():
        edges_for_claim = claim_edge_map.get(cid, [])
        n_supports = sum(1 for r, _ in edges_for_claim if r == "supports")
        n_contradicts = sum(1 for r, _ in edges_for_claim if r == "contradicts")
        n_mentions = sum(1 for r, _ in edges_for_claim if r == "mentions")

        if n_supports > 0:
            # More independent supports → higher confidence (0.6 base + 0.1 per extra, max 0.95)
            base = min(0.6 + 0.1 * n_supports, 0.95)
            # Penalize if contradictions exist
            penalty = min(n_contradicts * 0.15, 0.4)
            weighted_confidences.append(round(max(base - penalty, 0.15), 3))
        elif n_contradicts > 0:
            # Only contradictions → low confidence
            weighted_confidences.append(round(max(0.15, 0.35 - 0.1 * n_contradicts), 3))
        elif n_mentions > 0:
            # Mentions only — moderate-low
            weighted_confidences.append(round(min(0.4 + 0.05 * n_mentions, 0.55), 3))
        else:
            # No edges at all → unverified
            weighted_confidences.append(0.2)

    confidence_score = round(
        sum(weighted_confidences) / len(weighted_confidences), 2
    ) if weighted_confidences else 0.3

    validation_ratio = claims_verified / claims_total if claims_total else 0.0
    diversity_ratio = independent_domains / sources_analyzed if sources_analyzed else 0.0
    methodology_score = round(validation_ratio * 0.6 + diversity_ratio * 0.4, 2)

    source_independence_index = round(
        independent_domains / sources_analyzed, 2
    ) if sources_analyzed else 0.0
    if source_independence_index >= 0.7:
        bias_risk = "low"
    elif source_independence_index >= 0.4:
        bias_risk = "medium"
    else:
        bias_risk = "high"

    return {
        "sources_analyzed": sources_analyzed,
        "independent_domains": independent_domains,
        "claims_verified": claims_verified,
        "claims_total": claims_total,
        "contradictions_found": contradictions_found,
        "confidence_score": confidence_score,
        "methodology_score": methodology_score,
        "bias_risk": bias_risk,
        "source_independence_index": source_independence_index,
    }


def _extract_claims(evidence_graph: dict, sources: list) -> list:
    """Build a claims array linking citation markers to source reliability & snippets."""
    eg_claims = (evidence_graph or {}).get("claims", {})
    eg_sources = (evidence_graph or {}).get("sources", {})
    eg_edges_raw = (evidence_graph or {}).get("edges", {})
    eg_edges = list(eg_edges_raw.values()) if isinstance(eg_edges_raw, dict) else (eg_edges_raw or [])

    # If evidence graph has claims, use them
    if eg_claims:
        # Build claim → supporting sources mapping
        claim_source_edges: dict = {}
        for edge in eg_edges:
            cid = edge.get("from_claim_id", edge.get("claim_id", ""))
            if edge.get("relation") in ("supports", "mentions"):
                sid = edge.get("to_source_id", edge.get("source_id", ""))
                claim_source_edges.setdefault(cid, []).append((sid, edge.get("strength", 0.5)))

        claims_out = []
        for idx, (cid, claim_obj) in enumerate(eg_claims.items(), start=1):
            marker = f"[{idx}]"
            claim_text = claim_obj.get("text", "")

            claim_sources = []
            for sid, strength in claim_source_edges.get(cid, []):
                src = eg_sources.get(sid, {})
                url = src.get("url", "")
                domain = src.get("domain", "")
                if not domain and url:
                    from urllib.parse import urlparse
                    try:
                        domain = urlparse(url).netloc.replace("www.", "")
                    except Exception:
                        domain = ""
                reliability = src.get("reliability_score") or strength or 0.5
                snippet = (src.get("text_excerpt") or "")[:200]
                claim_sources.append({
                    "url": url,
                    "domain": domain,
                    "reliability": round(reliability or 0.5, 2),
                    "snippet": snippet,
                })

            # Fallback: link to sources list by index if no graph edges
            if not claim_sources and idx <= len(sources):
                s = sources[idx - 1]
                url = s.get("url", "")
                from urllib.parse import urlparse
                try:
                    domain = urlparse(url).netloc.replace("www.", "")
                except Exception:
                    domain = ""
                claim_sources.append({
                    "url": url,
                    "domain": domain,
                    "reliability": round(s.get("reliability") or 0.5, 2),
                    "snippet": (s.get("content") or "")[:200],
                })

            claims_out.append({
                "citation_marker": marker,
                "claim_text": claim_text,
                "sources": claim_sources,
            })

        return claims_out

    # Fallback: no evidence graph claims — generate claims from sources list
    # so citation [N] badges always have something to link to
    if not sources:
        return []

    claims_out = []
    for idx, s in enumerate(sources, start=1):
        url = s.get("url", "")
        from urllib.parse import urlparse
        try:
            domain = urlparse(url).netloc.replace("www.", "")
        except Exception:
            domain = ""
        claims_out.append({
            "citation_marker": f"[{idx}]",
            "claim_text": s.get("title") or s.get("description") or f"Source {idx}",
            "sources": [{
                "url": url,
                "domain": domain,
                "reliability": round(s.get("reliability") or 0.6, 2),
                "snippet": (s.get("content") or s.get("description") or "")[:200],
            }],
        })

    return claims_out


def _generate_research_gaps(evidence_graph: dict, report: str) -> dict:
    """Generate research gaps from evidence graph analysis."""
    gaps: dict = {
        "insufficient_evidence": [],
        "unresolved_contradictions": [],
        "scope_limitations": [],
        "suggested_followups": [],
    }

    if not evidence_graph:
        return gaps

    eg_claims = evidence_graph.get("claims", {})
    eg_edges_raw = evidence_graph.get("edges", {})
    eg_edges = list(eg_edges_raw.values()) if isinstance(eg_edges_raw, dict) else eg_edges_raw

    # Build claim → edges mapping
    claim_edge_map: dict = {}
    for edge in eg_edges:
        cid = edge.get("from_claim_id", edge.get("claim_id", ""))
        claim_edge_map.setdefault(cid, []).append(edge)

    for cid, claim_obj in eg_claims.items():
        edges_for = claim_edge_map.get(cid, [])
        has_support = any(e.get("relation") == "supports" for e in edges_for)
        has_contradiction = any(e.get("relation") == "contradicts" for e in edges_for)
        confidence = claim_obj.get("confidence", 0.5)
        text = claim_obj.get("text", "")[:120]

        if not has_support and text:
            gaps["insufficient_evidence"].append(f"No corroborating sources found for: \"{text}\"")
        elif confidence < 0.4 and text:
            gaps["insufficient_evidence"].append(f"Low confidence ({confidence:.0%}) for: \"{text}\"")

        if has_contradiction and text:
            gaps["unresolved_contradictions"].append(f"Conflicting evidence around: \"{text}\"")

    # Scope limitations heuristics
    eg_sources = evidence_graph.get("sources", {})
    domains: set = set()
    for s in eg_sources.values():
        d = s.get("domain", "")
        if d:
            domains.add(d)
    if len(domains) < 3:
        gaps["scope_limitations"].append("Limited source diversity — fewer than 3 independent domains consulted")
    if len(eg_claims) < 3:
        gaps["scope_limitations"].append("Narrow claim coverage — fewer than 3 distinct claims extracted")

    # Suggested follow-ups based on gaps
    if gaps["insufficient_evidence"]:
        gaps["suggested_followups"].append("Gather additional primary sources to verify unsupported claims")
    if gaps["unresolved_contradictions"]:
        gaps["suggested_followups"].append("Investigate conflicting findings in more depth")
    if len(domains) < 5:
        gaps["suggested_followups"].append("Broaden search to include more diverse source domains")

    return gaps


def _generate_continuations(query: str, report: str, evidence_graph: dict) -> list:
    """Generate smart continuation suggestions."""
    continuations = []

    # Deep-dive suggestion
    continuations.append({
        "label": "Go Deeper",
        "query": f"Provide a more detailed and technical analysis of: {query}",
        "icon": "Search",
        "reason": "Explore the topic with greater depth and technical detail",
    })

    # Contrarian / counter-evidence
    continuations.append({
        "label": "Counter-Evidence",
        "query": f"What are the strongest counter-arguments or criticisms of the findings about: {query}",
        "icon": "Scale",
        "reason": "Examine opposing viewpoints and potential weaknesses",
    })

    # Practical applications
    continuations.append({
        "label": "Practical Applications",
        "query": f"What are the real-world applications and implementation strategies for: {query}",
        "icon": "Lightbulb",
        "reason": "Move from theory to actionable insights",
    })

    # Recent developments
    continuations.append({
        "label": "Latest Developments",
        "query": f"What are the most recent developments and breaking news about: {query}",
        "icon": "TrendingUp",
        "reason": "Stay current with recent changes and updates",
    })

    return continuations


def _extract_contradictions(evidence_graph: dict) -> list:
    """Build PRD-shaped contradiction objects from the evidence graph."""
    if not evidence_graph:
        return []

    claims = evidence_graph.get("claims", {})
    sources = evidence_graph.get("sources", {})
    edges_raw = evidence_graph.get("edges", {})
    edges = list(edges_raw.values()) if isinstance(edges_raw, dict) else edges_raw

    source_support_claims: dict = {}
    for edge in edges:
        if edge.get("relation") == "supports":
            sid = edge.get("to_source_id", edge.get("source_id", ""))
            source_support_claims.setdefault(sid, []).append(
                edge.get("from_claim_id", edge.get("claim_id", ""))
            )

    contradictions = []
    seen_pairs: set = set()

    for edge in edges:
        if edge.get("relation") != "contradicts":
            continue

        claim_a_data = claims.get(edge.get("from_claim_id", edge.get("claim_id", "")), {})
        source_b = sources.get(edge.get("to_source_id", edge.get("source_id", "")), {})

        # Find claim_a's supporting source
        source_a = {}
        c_id = edge.get("from_claim_id", edge.get("claim_id", ""))
        for e2 in edges:
            e2_cid = e2.get("from_claim_id", e2.get("claim_id", ""))
            if e2_cid == c_id and e2.get("relation") == "supports":
                source_a = sources.get(e2.get("to_source_id", e2.get("source_id", "")), {})
                break

        s_id = edge.get("to_source_id", edge.get("source_id", ""))
        supported = source_support_claims.get(s_id, [])
        matched = False
        for supported_claim_id in supported:
            if supported_claim_id == c_id:
                continue
            pair_key = tuple(sorted([c_id, supported_claim_id]))
            if pair_key in seen_pairs:
                continue
            seen_pairs.add(pair_key)
            matched = True

            claim_b_data = claims.get(supported_claim_id, {})
            strength = edge.get("strength", 0.5)
            severity = "high" if strength > 0.7 else "moderate" if strength > 0.4 else "low"

            contradictions.append({
                "id": f"c-{c_id[:8]}-{supported_claim_id[:8]}",
                "claim_a": {
                    "text": claim_a_data.get("text", ""),
                    "source_url": source_a.get("url", ""),
                    "source_domain": source_a.get("domain", ""),
                    "trust_score": claim_a_data.get("confidence", 0.5),
                },
                "claim_b": {
                    "text": claim_b_data.get("text", ""),
                    "source_url": source_b.get("url", ""),
                    "source_domain": source_b.get("domain", ""),
                    "trust_score": claim_b_data.get("confidence", 0.5),
                },
                "resolution_note": "Conflicting evidence detected across sources; further verification recommended.",
                "severity": severity,
            })

        if not matched:
            strength = edge.get("strength", 0.5)
            severity = "high" if strength > 0.7 else "moderate" if strength > 0.4 else "low"
            contradictions.append({
                "id": f"c-{c_id[:8]}-{s_id[:8]}",
                "claim_a": {
                    "text": claim_a_data.get("text", ""),
                    "source_url": source_a.get("url", ""),
                    "source_domain": source_a.get("domain", ""),
                    "trust_score": claim_a_data.get("confidence", 0.5),
                },
                "claim_b": {
                    "text": source_b.get("text_excerpt", "")[:200],
                    "source_url": source_b.get("url", ""),
                    "source_domain": source_b.get("domain", ""),
                    "trust_score": source_b.get("reliability_score", 0.5),
                },
                "resolution_note": "Conflicting evidence detected; further verification recommended.",
                "severity": severity,
            })

    return contradictions


# ---------------------------------------------------------------------------
# Clarifying questions — pre-research ambiguity detection
# ---------------------------------------------------------------------------

async def detect_ambiguity(query: str) -> Optional[List[str]]:
    """Use LLM to determine if the query is ambiguous and suggest clarifying questions.

    Returns a list of 2-4 clarifying questions if the query is ambiguous,
    or ``None`` if the query is clear enough to research directly.
    """
    from src.core.llm_client import LLMClient as _LC

    prompt = (
        "You are a research query analyzer. Determine if the following query is "
        "ambiguous, too vague, or could be interpreted in multiple distinct ways.\n\n"
        f"Query: \"{query}\"\n\n"
        "Rules:\n"
        "- If the query is clear and specific enough to research, respond with ONLY: CLEAR\n"
        "- If the query is ambiguous, respond with a JSON array of 2-4 short clarifying "
        "questions that would help narrow the scope. Example:\n"
        '[\"Did you mean X or Y?\", \"Are you interested in A or B?\"]\n\n'
        "Consider a query ambiguous if:\n"
        "- It uses vague terms without context (e.g. 'best framework')\n"
        "- It could apply to multiple unrelated domains\n"
        "- The time frame or scope is completely undefined for a time-sensitive topic\n"
        "- It's a single word or extremely short without sufficient context\n\n"
        "Do NOT mark as ambiguous if the query is a well-formed research question, "
        "even if broad. Only flag genuinely ambiguous or vague queries.\n"
        "Respond with either CLEAR or a JSON array, nothing else."
    )

    try:
        llm = _LC()
        resp = llm.chat(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
            max_tokens=300,
        )
        text = resp.content.strip()
        if text.upper().startswith("CLEAR"):
            return None
        # Parse JSON array
        import json as _json
        # Strip markdown code fences if present
        if text.startswith("```"):
            text = text.split("```")[1]
            if text.startswith("json"):
                text = text[4:]
        questions = _json.loads(text)
        if isinstance(questions, list) and len(questions) >= 2:
            return questions[:4]
        return None
    except Exception as e:
        logger.warning("Ambiguity detection failed (proceeding with research): %s", e)
        return None


# ---------------------------------------------------------------------------
# Background research task
# ---------------------------------------------------------------------------

async def run_research_task_async(
    session_id: str,
    query: str,
    max_iterations: int,
    search_provider: str,
    mode: str,
    user_id: Optional[str] = None,
    output_mode: str = "deep",
    audience: str = "myself",
    expertise_level: str = "intermediate",
):
    """Run research asynchronously and persist results to Firestore."""
    try:
        # 1. Update in-memory status
        active_sessions[session_id]["status"] = "running"
        print(f"  Running session {session_id} in mode={mode}")

        # 2. Initialize Orchestrator
        orchestrator = DeepResearchOrchestratorV2(
            search_provider=search_provider,
            max_iterations=max_iterations,
            verbose=True,
            use_memory=True,
        )

        # Set session reference for live phase updates
        orchestrator._session_ref = active_sessions.get(session_id)

        # 3. Load previous context from Firestore if session already exists
        previous_context = None
        if _firestore_db is not None:
            try:
                existing_result = await _run_in_executor(store.get_results, session_id)
                existing_session = await _run_in_executor(store.get_session, session_id)
                if existing_result:
                    previous_context = {
                        "messages": (existing_session or {}).get("messages", []),
                        "summary": existing_result.get("report"),
                        "evidence_graph": existing_result.get("evidence_summary", {}).get("evidence_graph"),
                        "task_graph": existing_result.get("task_graph_summary"),
                    }
            except Exception as e:
                print(f"Context load failed for session {session_id}: {e}")

        # 4. Capture logs
        def distinct_log(message: str):
            print(f"[Task {session_id}] {message}")
            if session_id in active_sessions:
                active_sessions[session_id]["logs"].append({
                    "timestamp": datetime.now().isoformat(),
                    "message": message,
                })
        orchestrator.log = distinct_log

        # 5. Run Research
        result = await orchestrator.research_async(
            query=query,
            session_id=session_id,
            previous_context=previous_context,
            preferences={
                "mode": mode,
                "user_id": user_id,
                "output_mode": output_mode,
                "audience": audience,
                "expertise_level": expertise_level,
            },
        )

        # 6. Build persistence payloads
        final_data = {
            "report": result.report,
            "sources": result.sources,
            "metadata": {
                **result.metadata,
                "execution_stats": result.execution_stats,
                "iterations": result.iterations,
                "evidence_graph": result.evidence_graph,
                "task_graph": result.task_graph,
            },
        }

        # 6b. Compute trust metrics and contradictions for transparency layer
        trust_metrics = _compute_trust_metrics(result.evidence_graph, result.sources)
        contradictions = _extract_contradictions(result.evidence_graph)
        final_data["trust_metrics"] = trust_metrics
        final_data["contradictions"] = contradictions

        # 6c. Compute decision-oriented research_metrics for Part 2 MetricsPanel
        exec_stats   = result.execution_stats or {}
        task_graph   = result.task_graph or {}
        metrics_raw  = result.metadata.get("metrics", {}) or {}
        tg_stats     = metrics_raw.get("task_graph", {}) or {}

        rigor_level = "Hierarchical" if mode == "deep" else "Shallow"
        task_nodes   = tg_stats.get("total_nodes", 0)
        graph_depth  = tg_stats.get("max_depth", 0)
        parallel_agents = exec_stats.get("parallel_agents_used", 0)
        total_duration   = exec_stats.get("wall_clock_seconds") or metrics_raw.get("latency") or 0
        reliability_cov  = round((trust_metrics.get("confidence_score") or 0.5) * 100, 1)
        # Engineering rigor: 40% methodology + 30% source independence + 30% validation ratio
        meth_score = trust_metrics.get("methodology_score") or 0.5
        src_indep  = trust_metrics.get("source_independence_index") or 0.5
        claims_v   = trust_metrics.get("claims_verified") or 0
        claims_t   = trust_metrics.get("claims_total") or 1
        val_ratio  = claims_v / claims_t
        eng_rigor  = round(((meth_score or 0) * 0.4 + (src_indep or 0) * 0.3 + (val_ratio or 0) * 0.3) * 100, 1)
        model_routing = {str(k): v for k, v in (metrics_raw.get("models_used") or {}).items()}
        reflexion_iters = exec_stats.get("reflexion_iterations") or 0

        research_metrics = {
            "rigor_level": rigor_level,
            "task_nodes": task_nodes or 0,
            "graph_depth": graph_depth or 0,
            "parallel_agents_used": parallel_agents or 0,
            "total_duration_seconds": round(total_duration or 0, 2),
            "reliability_coverage_pct": reliability_cov,
            "engineering_rigor_score": eng_rigor,
            "model_routing_summary": model_routing,
            "reflexion_iterations": reflexion_iters,
            "output_mode_used": output_mode,
        }

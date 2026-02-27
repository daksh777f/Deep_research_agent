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
        final_data["research_metrics"] = research_metrics

        # 6d. Extract claims array for claim-level expanders
        claims = _extract_claims(result.evidence_graph, result.sources)
        final_data["claims"] = claims

        # 6e. Generate research gaps for honesty section
        research_gaps = _generate_research_gaps(result.evidence_graph, result.report)
        final_data["research_gaps"] = research_gaps

        # 6f. Generate continuation suggestions
        continuations = _generate_continuations(query, result.report, result.evidence_graph)
        final_data["continuations"] = continuations

        # 6g. Part 4: Comparison mode synthesis
        session_state = active_sessions.get(session_id, {})
        is_comparison = session_state.get("comparison_mode", False)
        subject_a = session_state.get("subject_a", "")
        subject_b = session_state.get("subject_b", "")

        if is_comparison and subject_a and subject_b:
            try:
                from src.agents.comparison_synthesizer import ComparisonSynthesizer
                from src.core.llm_client import LLMClient as _LLMClient

                comp_llm = _LLMClient()
                synthesizer = ComparisonSynthesizer(llm_client=comp_llm)

                # The main report covers both subjects; split heuristically
                # or just pass the full report for both sides
                comparison_result = await synthesizer.synthesize(
                    subject_a=subject_a,
                    subject_b=subject_b,
                    report_a=result.report,
                    report_b=result.report,
                    sources_a=result.sources,
                    sources_b=result.sources,
                    evidence_graph_a=result.evidence_graph,
                    evidence_graph_b=result.evidence_graph,
                )
                final_data["comparison"] = comparison_result
                print(f"  ✅ Comparison synthesized: {comparison_result.get('verdict', 'N/A')}")
            except Exception as comp_err:
                print(f"  ⚠️ Comparison synthesis failed: {comp_err}")
                final_data["comparison"] = None
        else:
            final_data["comparison"] = None

        # 6h. Part 4: Store evidence graph for /graph endpoint
        final_data["evidence_graph_raw"] = result.evidence_graph

        # 7. Update in-memory
        if session_id in active_sessions:
            active_sessions[session_id]["status"] = "completed"
            active_sessions[session_id]["result"] = final_data
            active_sessions[session_id]["phases"] = result.metadata.get("phases", [])

        # 8. Persist to Firestore (skip if unavailable)
        if _firestore_db is not None:
            try:
                evidence_summary = {
                    "sources": result.sources,
                    "evidence_graph": result.evidence_graph,
                }
                task_graph_summary = result.task_graph

                await _run_in_executor(
                    store.save_results,
                    session_id,
                    result.report,
                    evidence_summary,
                    task_graph_summary,
                )

                metrics = result.metadata.get("metrics", {})
                metrics_payload = {
                    "latency_ms": int(metrics.get("latency", 0) * 1000),
                    "prompt_tokens": metrics.get("prompt_tokens", 0),
                    "completion_tokens": metrics.get("completion_tokens", 0),
                    "total_cost": metrics.get("cost_estimate", 0.0),
                    "model_used": str(metrics.get("models_used", {})),
                    "mode": mode,
                }
                await _run_in_executor(store.save_metrics, session_id, metrics_payload)

                print(f"✅ Session {session_id} saved to Firestore")
            except Exception as e:
                print(f"⚠️ Firestore persistence failed for {session_id}: {e}")
        else:
            print(f"ℹ️ Session {session_id} completed (in-memory only)")

    except Exception as e:
        print(f"❌ Error in task {session_id}: {e}")
        if session_id in active_sessions:
            active_sessions[session_id]["status"] = "failed"
            active_sessions[session_id]["error"] = str(e)

        if _firestore_db is not None:
            try:
                await _run_in_executor(store.update_session_status, session_id, "failed")
            except Exception:
                pass


def run_research_task_wrapper(
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
    """Sync wrapper for BackgroundTasks."""
    asyncio.run(
        run_research_task_async(
            session_id, query, max_iterations, search_provider, mode, user_id,
            output_mode, audience, expertise_level,
        )
    )


# ---------------------------------------------------------------------------
# API Endpoints
# ---------------------------------------------------------------------------

@app.post("/api/research", response_model=ResearchResponse)
async def start_research(
    request: ResearchRequest,
    background_tasks: BackgroundTasks,
    user_id: Optional[str] = Depends(verify_firebase_token),
):
    """Start a new research task or continue an existing session."""

    # --- Clarifying questions for ambiguous queries ---
    if not request.skip_clarification and not request.session_id:
        questions = await detect_ambiguity(request.query)
        if questions:
            return ResearchResponse(
                session_id="",
                status="clarification_needed",
                message="Your query may be ambiguous. Please clarify before we begin research.",
                clarifying_questions=questions,
            )

    # --- Output mode resolution (backward-compatible) ---
    output_mode = request.output_mode or request.mode or "deep"
    allowed_output = {"quick", "deep", "technical"}
    if output_mode not in allowed_output:
        print(f"⚠️ Invalid output_mode '{output_mode}' received; defaulting to 'deep'")
        output_mode = "deep"
    # Map output_mode → internal pipeline mode (technical uses deep pipeline)
    mode = "quick" if output_mode == "quick" else "deep"
    audience = request.audience or "myself"
    expertise_level = request.expertise_level or "intermediate"
    print(f"Selected output_mode={output_mode}, internal mode={mode}, audience={audience}, expertise={expertise_level}")

    now_ts = datetime.now().isoformat()
    message_entry = {"role": "user", "content": request.query, "timestamp": now_ts}

    # --- Session resolution: reuse existing or create new ---
    session_id: str
    if request.session_id:
        session_id = request.session_id
        if _firestore_db is not None:
            existing = await _run_in_executor(store.get_session, request.session_id)
            if existing:
                await _run_in_executor(
                    store.update_session_field,
                    session_id,
                    status="running",
                )
            else:
                try:
                    await _run_in_executor(
                        store.create_session_with_id, session_id, user_id, request.query, mode,
                    )
                except Exception as e:
                    print(f"Session creation with custom ID failed: {e}")
    else:
        if _firestore_db is not None:
            session_id = await _run_in_executor(store.create_session, user_id, request.query, mode)
        else:
            session_id = str(uuid.uuid4())

    # 1. Create/extend in-memory state
    active_sessions[session_id] = {
        "status": "pending",
        "query": request.query,
        "created_at": now_ts,
        "logs": [],
        "messages": [message_entry],
        "mode": mode,
        "output_mode": output_mode,
        "audience": audience,
        "expertise_level": expertise_level,
        "comparison_mode": request.comparison_mode or False,
        "subject_a": request.subject_a or "",
        "subject_b": request.subject_b or "",
    }

    # 2. Start Background Task
    background_tasks.add_task(
        run_research_task_wrapper,
        session_id,
        request.query,
        request.max_iterations,
        request.search_provider,
        mode,
        user_id,
        output_mode,
        audience,
        expertise_level,
    )

    return ResearchResponse(
        session_id=session_id,
        status="started",
        message="Research task started in background",
    )


@app.get("/api/research/{session_id}")
async def get_research_status(session_id: str):
    """Get status and results (Hybrid: in-memory → Firestore)."""

    # 1. Check active in-memory sessions (live)
    if session_id in active_sessions:
        return active_sessions[session_id]

    # 2. Check Firestore (history)
    try:
        session = await _run_in_executor(store.get_session, session_id)
        if session:
            result_data = await _run_in_executor(store.get_results, session_id)
            return {
                "status": session.get("status", "unknown"),
                "query": session.get("query", ""),
                "created_at": session.get("created_at"),
                "logs": [],
                "result": {
                    "report": result_data.get("report", "") if result_data else None,
                    "sources": (result_data.get("evidence_summary", {}) or {}).get("sources", []) if result_data else [],
                    "metadata": result_data.get("task_graph_summary", {}) if result_data else {},
                } if result_data else None,
            }
    except Exception as e:
        print(f"Firestore Fetch Error: {e}")

    raise HTTPException(status_code=404, detail="Session not found")


@app.get("/api/history")
async def get_history(user_id: Optional[str] = Depends(verify_firebase_token)):
    """List past research sessions from Firestore."""
    try:
        history = await _run_in_executor(store.get_research_history, user_id, 20)
        return history
    except Exception as e:
        print(f"History Fetch Error: {e}")
        return []


@app.get("/health")
async def health_check():
    """
    Health check endpoint for deployment monitoring.

    Probes **both** Firestore and Qdrant in parallel.  Returns a
    structured response so that load-balancers can act on individual
    component health.

    Status values:
        healthy   – all components reachable
        degraded  – at least one component unavailable
    """
    # --- Firestore probe (via centralized executor) ---
    async def _check_firestore() -> bool:
        try:
            from src.core.firebase_client import db as _db
            if _db is None:
                return False
            await run_in_firestore_executor(
                lambda: _db.collection("research_sessions").limit(1).get()
            )
            return True
        except Exception:
            return False

    # --- Qdrant probe (via centralized executor) ---
    async def _check_qdrant() -> bool:
        try:
            from src.memory.qdrant_store import QdrantClient as _QdrantClient
            import os as _os

            if _QdrantClient is None:
                return False
            url = _os.getenv("QDRANT_URL")
            api_key = _os.getenv("QDRANT_API_KEY")
            if url:
                client = _QdrantClient(url=url, api_key=api_key, timeout=5)
            else:
                client = _QdrantClient(host="localhost", port=6333, timeout=5)
            # get_collections is the lightest RPC that proves connectivity
            await run_in_firestore_executor(client.get_collections)
            return True
        except Exception:
            return False

    # Apply 3-second timeout to each probe so health check doesn't hang
    async def _with_timeout(coro, default=False):
        try:
            return await asyncio.wait_for(coro, timeout=3.0)
        except (asyncio.TimeoutError, Exception):
            return default

    firestore_ok, qdrant_ok = await asyncio.gather(
        _with_timeout(_check_firestore()), _with_timeout(_check_qdrant())
    )

    overall = "healthy" if (firestore_ok and qdrant_ok) else "degraded"

    return {
        "status": overall,
        "service": "deep-research-agent",
        "timestamp": datetime.now().isoformat(),
        "components": {
            "firestore": "ok" if firestore_ok else "unreachable",
            "qdrant": "ok" if qdrant_ok else "unreachable",
        },
    }


# ---------------------------------------------------------------------------
# Part 4: Claim Challenge Mode endpoint
# ---------------------------------------------------------------------------

@app.post("/api/research/{session_id}/challenge")
async def challenge_claim(session_id: str, request: ChallengeRequest):
    """
    Challenge a specific claim — runs adversarial verification
    and returns corroborated / refuted / disputed verdict.
    """
    session = active_sessions.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    try:
        from src.agents.claim_challenger import ClaimChallenger
        from src.core.llm_client import LLMClient

        llm = LLMClient()
        challenger = ClaimChallenger(llm_client=llm, search_provider="tavily")
        result = await challenger.challenge_claim(
            claim_text=request.claim_text,
            claim_marker=request.claim_marker,
            original_domains=request.original_domains,
            confidence_before=request.confidence_before,
            timeout_seconds=30.0,
        )
        return result
    except Exception as e:
        logger.error("Challenge failed: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


# ---------------------------------------------------------------------------
# Part 4: Export Pipeline endpoint
# ---------------------------------------------------------------------------

@app.post("/api/research/{session_id}/export")
async def export_research(session_id: str, request: ExportRequest):
    """
    Export a completed research session in the requested format.
    Returns the file as a download.
    """
    session = active_sessions.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    result_data = session.get("result")
    if not result_data:
        raise HTTPException(status_code=400, detail="Research not yet completed")

    try:
        from src.export.exporter import ResearchExporter
        from src.core.llm_client import LLMClient

        llm = LLMClient()
        exporter = ResearchExporter(llm_client=llm)

        buf = await exporter.export(
            fmt=request.format,
            report=result_data.get("report", ""),
            sources=result_data.get("sources", []),
            query=session.get("query", ""),
            trust_metrics=result_data.get("trust_metrics"),
            claims=result_data.get("claims"),
        )

        content_types = {
            "pdf": "application/pdf",
            "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "markdown": "text/markdown",
            "checklist": "text/markdown",
        }
        extensions = {
            "pdf": "pdf",
            "pptx": "pptx",
            "docx": "docx",
            "markdown": "md",
            "checklist": "md",
        }

        ct = content_types.get(request.format, "application/octet-stream")
        ext = extensions.get(request.format, "bin")
        filename = f"research-{session_id[:8]}.{ext}"

        from fastapi.responses import Response
        buf_bytes = buf.read()
        return Response(
            content=buf_bytes,
            media_type=ct,
            headers={"Content-Disposition": f'attachment; filename="{filename}"'},
        )
    except Exception as e:
        logger.error("Export failed: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


# ---------------------------------------------------------------------------
# Part 4: Visual Evidence Graph endpoint
# ---------------------------------------------------------------------------

@app.get("/api/research/{session_id}/graph")
async def get_evidence_graph(session_id: str):
    """
    Return D3-compatible evidence graph data { nodes, edges }
    for the visual evidence graph frontend.
    """
    session = active_sessions.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    result_data = session.get("result")
    if not result_data:
        raise HTTPException(status_code=400, detail="Research not yet completed")

    # evidence_graph_raw is stored at both top-level and inside metadata
    evidence_graph_raw = result_data.get("evidence_graph_raw") or (result_data.get("metadata") or {}).get("evidence_graph", {})
    if not evidence_graph_raw:
        # Fallback: build minimal graph from claims/sources
        return {"nodes": [], "edges": []}

    try:
        from src.evidence.graph import EvidenceGraph
        eg = EvidenceGraph.from_dict(evidence_graph_raw)
        return eg.to_graph_json()
    except Exception as e:
        logger.warning("Graph serialization failed, building from raw: %s", e)
        # Manual fallback from raw dict
        nodes = []
        edges = []
        for cid, claim in evidence_graph_raw.get("claims", {}).items():
            text = claim.get("text", "")
            nodes.append({
                "id": cid,
                "type": "claim",
                "label": text[:80],
                "confidence": claim.get("confidence", 0.5),
            })
        for sid, source in evidence_graph_raw.get("sources", {}).items():
            nodes.append({
                "id": sid,
                "type": "source",
                "label": source.get("title", source.get("domain", ""))[:60],
                "reliability": source.get("reliability_score", 0.5),
                "domain": source.get("domain", ""),
            })
        edges_raw = evidence_graph_raw.get("edges", {})
        edge_list = list(edges_raw.values()) if isinstance(edges_raw, dict) else edges_raw
        for edge in edge_list:
            edges.append({
                "source": edge.get("from_claim_id", edge.get("claim_id", "")),
                "target": edge.get("to_source_id", edge.get("source_id", "")),
                "relation": edge.get("relation", "mentions"),
                "strength": edge.get("strength", 0.5),
            })
        return {"nodes": nodes, "edges": edges}


# ---------------------------------------------------------------------------
# Part 4: Source Genome (citation chain) endpoint
# ---------------------------------------------------------------------------

@app.get("/api/research/{session_id}/source-genome/{source_index}")
async def get_source_genome(session_id: str, source_index: int):
    """
    Return citation chain / genome data for a specific source.
    """
    session = active_sessions.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    result_data = session.get("result")
    if not result_data:
        raise HTTPException(status_code=400, detail="Research not yet completed")

    sources = result_data.get("sources", [])
    if source_index < 0 or source_index >= len(sources):
        raise HTTPException(status_code=404, detail="Source index out of range")

    source = sources[source_index]
    url = source.get("url", "")

    from urllib.parse import urlparse
    domain = ""
    try:
        domain = urlparse(url).netloc.replace("www.", "")
    except Exception:
        pass

    citation_chain = source.get("citation_chain", None)
    if not citation_chain:
        # Build citation chain from evidence graph if available
        citation_chain = []
        evidence_graph = result_data.get("metadata", {}).get("evidence_graph", {})
        edges_raw = evidence_graph.get("edges", {})
        edge_list = list(edges_raw.values()) if isinstance(edges_raw, dict) else (edges_raw if isinstance(edges_raw, list) else [])
        claims_map = evidence_graph.get("claims", {})
        sources_map = evidence_graph.get("sources", {})

        # Find edges that reference this source
        hop = 1
        for edge in edge_list:
            src_id = edge.get("to_source_id", edge.get("source_id", ""))
            claim_id = edge.get("from_claim_id", edge.get("claim_id", ""))
            # Match by domain or url in sources map
            src_obj = sources_map.get(src_id, {})
            src_url = src_obj.get("url", "")
            if src_url == url or src_obj.get("domain", "") == domain:
                claim_obj = claims_map.get(claim_id, {})
                citation_chain.append({
                    "hop": hop,
                    "url": url,
                    "domain": domain,
                    "domain_trust": src_obj.get("reliability_score", source.get("reliability", 0.5)),
                    "claim_text_at_this_hop": claim_obj.get("text", (source.get("content") or "")[:200]),
                    "source_type": source.get("agent", "web_search"),
                    "fetch_method": source.get("search_provider", "tavily"),
                })
                hop += 1

        # Fallback: at least return the source itself as hop 1
        if not citation_chain:
            citation_chain.append({
                "hop": 1,
                "url": url,
                "domain": domain,
                "domain_trust": source.get("reliability", 0.5),
                "claim_text_at_this_hop": (source.get("content") or "")[:200],
                "source_type": source.get("agent", "web_search"),
                "fetch_method": source.get("search_provider", "tavily"),
            })

    return {
        "source_url": url,
        "source_domain": domain,
        "citation_chain": citation_chain,
        "distortion_detected": False,
        "distortion_summary": "",
    }


# ---------------------------------------------------------------------------
# Architecture Generation endpoints
# ---------------------------------------------------------------------------

class ArchitectureRequest(BaseModel):
    system_name: str = "Research System"
    system_description: str = ""
    recommended_solution: str = ""
    constraints: Optional[Dict[str, Any]] = None
    tradeoffs: Optional[List[str]] = None
    confidence_score: float = 0.85


class RunbookRequest(BaseModel):
    architecture: Dict[str, Any]
    target_cloud: str = "AWS"


def _transform_architecture_for_frontend(
    plan: Dict[str, Any], request: "ArchitectureRequest"
) -> Dict[str, Any]:
    """Transform backend architecture plan to match the frontend ArchitecturePlan interface."""
    constraints = request.constraints or {}

    # metadata: {system_name, dau, compliance_requirements, confidence_score}
    raw_meta = plan.get("metadata", {})
    plan["metadata"] = {
        "system_name": raw_meta.get("generated_for", request.system_name),
        "dau": constraints.get("daily_active_users", 0),
        "compliance_requirements": constraints.get("compliance_requirements", []),
        "confidence_score": raw_meta.get("confidence", request.confidence_score),
    }

    # components: [{name, purpose, technology, sla}] from component_breakdown
    if "component_breakdown" in plan and "components" not in plan:
        plan["components"] = [
            {
                "name": c.get("name", ""),
                "purpose": c.get("purpose", ""),
                "technology": c.get("technology", ""),
                "sla": c.get("sla", {"availability": "99.9%", "latency_p99": "<500ms"}),
            }
            for c in plan.pop("component_breakdown")
        ]

    # technology_stack: [{component, technology, reasoning, pros, cons, cost_monthly_usd}]
    raw_stack = plan.get("technology_stack", {})
    if isinstance(raw_stack, dict):
        transformed = []
        for layer, techs in raw_stack.items():
            if isinstance(techs, list):
                for t in techs:
                    if isinstance(t, str):
                        transformed.append({"component": layer, "technology": t, "reasoning": "", "pros": [], "cons": [], "cost_monthly_usd": 0})
                    elif isinstance(t, dict):
                        transformed.append({"component": t.get("component", layer), "technology": t.get("technology", str(t)), "reasoning": t.get("reasoning", ""), "pros": t.get("pros", []), "cons": t.get("cons", []), "cost_monthly_usd": t.get("cost_monthly_usd", 0)})
            elif isinstance(techs, str):
                transformed.append({"component": layer, "technology": techs, "reasoning": "", "pros": [], "cons": [], "cost_monthly_usd": 0})
        plan["technology_stack"] = transformed

    # system_diagram: {format, diagram}
    raw_diagram = plan.get("system_diagram", "")
    if isinstance(raw_diagram, str):
        plan["system_diagram"] = {"format": "mermaid", "diagram": raw_diagram}

    # cost_model: {total_monthly_cost: {total_usd, llm_cost_usd, infrastructure_cost_usd}}
    raw_cost = plan.get("cost_model", {})
    if "total_monthly_cost" not in raw_cost:
        min_cost = raw_cost.get("estimated_monthly_min", 0)
        max_cost = raw_cost.get("estimated_monthly_max", 0)
        total = (min_cost + max_cost) / 2 if (min_cost or max_cost) else 0
        plan["cost_model"] = {
            "total_monthly_cost": {
                "total_usd": total,
                "llm_cost_usd": total * 0.3,
                "infrastructure_cost_usd": total * 0.7,
            }
        }

    # risk_mitigation: [{risk, probability, impact, mitigation: string[], rto}]
    raw_risks = plan.get("risk_mitigation", [])
    if raw_risks and isinstance(raw_risks[0], dict) and "severity" in raw_risks[0]:
        plan["risk_mitigation"] = [
            {
                "risk": r.get("risk", ""),
                "probability": r.get("severity", "medium"),
                "impact": r.get("severity", "medium"),
                "mitigation": [r["mitigation"]] if isinstance(r.get("mitigation"), str) else r.get("mitigation", []),
                "rto": r.get("rto", "< 1 hour"),
            }
            for r in raw_risks
        ]

    return plan


@app.post("/api/generate-architecture")
async def generate_architecture(request: ArchitectureRequest):
    """Generate a production architecture plan from research results."""
    try:
        from src.architecture_generator import ArchitectureGenerator
        from src.core.llm_client import LLMClient

        llm = LLMClient()
        generator = ArchitectureGenerator(llm_client=llm)

        plan = await generator.generate_architecture(
            system_name=request.system_name,
            system_description=request.system_description,
            recommended_solution=request.recommended_solution,
            constraints=request.constraints,
            tradeoffs=request.tradeoffs,
            confidence_score=request.confidence_score,
        )
        return _transform_architecture_for_frontend(plan, request)
    except Exception as e:
        logger.error("Architecture generation failed: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/generate-deployment-runbook")
async def generate_deployment_runbook(request: RunbookRequest):
    """Generate a cloud-specific deployment runbook."""
    from fastapi.responses import PlainTextResponse

    try:
        from src.architecture_generator import ArchitectureGenerator
        from src.core.llm_client import LLMClient

        llm = LLMClient()
        generator = ArchitectureGenerator(llm_client=llm)

        runbook = await generator.generate_runbook(
            architecture=request.architecture,
            target_cloud=request.target_cloud,
        )
        return PlainTextResponse(runbook)
    except Exception as e:
        logger.error("Runbook generation failed: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import os, uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

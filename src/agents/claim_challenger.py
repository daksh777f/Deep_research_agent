"""
Part 4 – Claim Challenge Mode: Adversarial Claim Verification Agent

When a user "challenges" a claim, this agent:
1. Derives 3 targeted counter-search queries
2. Searches for independent evidence (excluding original source domains)
3. Evaluates whether the claim is corroborated, refuted, or disputed
4. Returns a ChallengeResult with new sources, verdict, and confidence delta
"""

import asyncio
import logging
import os
import re
from typing import Any, Dict, List, Optional
from urllib.parse import urlparse

logger = logging.getLogger(__name__)

# Attempt to import search clients
try:
    from tavily import TavilyClient
except ImportError:
    TavilyClient = None

try:
    import httpx
except ImportError:
    httpx = None


class ClaimChallenger:
    """
    Adversarial claim verification agent.

    Given a claim text and its original source domains, produces
    an independent verification with a verdict of corroborated / refuted / disputed.
    """

    def __init__(self, llm_client=None, search_provider: str = "tavily"):
        self.llm = llm_client
        self.search_provider = search_provider
        self._tavily_key = os.getenv("TAVILY_API_KEY", "")

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    async def challenge_claim(
        self,
        claim_text: str,
        claim_marker: str,
        original_domains: List[str],
        confidence_before: float = 0.5,
        timeout_seconds: float = 30.0,
    ) -> Dict[str, Any]:
        """
        Run an adversarial challenge against *claim_text*.

        Returns a ChallengeResult dict:
            claim_marker, claim_text, verdict, confidence_before, confidence_after,
            summary, new_sources, challenge_queries
        """
        try:
            result = await asyncio.wait_for(
                self._run_challenge(
                    claim_text, claim_marker, original_domains, confidence_before
                ),
                timeout=timeout_seconds,
            )
            return result
        except asyncio.TimeoutError:
            logger.warning("Challenge timed out for %s", claim_marker)
            return self._empty_result(claim_marker, claim_text, confidence_before, "timeout")

    # ------------------------------------------------------------------
    # Internal pipeline
    # ------------------------------------------------------------------

    async def _run_challenge(
        self,
        claim_text: str,
        claim_marker: str,
        original_domains: List[str],
        confidence_before: float,
    ) -> Dict[str, Any]:
        # 1. Generate 3 adversarial search queries via LLM
        queries = await self._generate_challenge_queries(claim_text)

        # 2. Execute searches, excluding original domains
        all_sources: List[Dict[str, Any]] = []
        search_tasks = [
            self._search_one(q, original_domains) for q in queries
        ]
        results = await asyncio.gather(*search_tasks, return_exceptions=True)
        for res in results:
            if isinstance(res, list):
                all_sources.extend(res)

        # Deduplicate by URL
        seen_urls: set = set()
        unique_sources: List[Dict[str, Any]] = []
        for s in all_sources:
            url = s.get("url", "")
            if url and url not in seen_urls:
                seen_urls.add(url)
                unique_sources.append(s)

        # 3. Evaluate verdict via LLM
        verdict_data = await self._evaluate_verdict(claim_text, unique_sources, confidence_before)

        # 4. Build result
        new_sources = []
        for s in unique_sources[:8]:
            domain = s.get("domain", "")
            if not domain:
                try:
                    domain = urlparse(s.get("url", "")).netloc.replace("www.", "")
                except Exception:
                    domain = "unknown"
            new_sources.append({
                "url": s.get("url", ""),
                "domain": domain,
                "title": s.get("title", ""),
                "snippet": (s.get("content") or s.get("snippet") or "")[:300],
                "reliability": s.get("reliability", 0.5),
                "agrees_with_original": s.get("agrees", True),
            })

        return {
            "claim_marker": claim_marker,
            "claim_text": claim_text,
            "verdict": verdict_data.get("verdict", "disputed"),
            "confidence_before": confidence_before,
            "confidence_after": verdict_data.get("confidence_after", confidence_before),
            "summary": verdict_data.get("summary", "Unable to determine verdict."),
            "new_sources": new_sources,
            "challenge_queries": queries,
        }

    # ------------------------------------------------------------------
    # Query generation
    # ------------------------------------------------------------------

    async def _generate_challenge_queries(self, claim_text: str) -> List[str]:
        """Use LLM to generate 3 adversarial search queries."""
        if not self.llm:
            return self._fallback_queries(claim_text)

        prompt = (
            "You are an adversarial fact-checker. Given the following claim, "
            "generate exactly 3 search queries designed to find INDEPENDENT evidence "
            "that could either corroborate or refute this claim. "
            "Focus on finding counter-evidence and cross-references from authoritative sources.\n\n"
            f"Claim: \"{claim_text}\"\n\n"
            "Return exactly 3 queries, one per line, no numbering or bullets."
        )
        try:
            resp = await asyncio.to_thread(
                self.llm.generate, prompt, task_type="search_format"
            )
            lines = [l.strip() for l in resp.content.strip().split("\n") if l.strip()]
            if len(lines) >= 3:
                return lines[:3]
            return lines + self._fallback_queries(claim_text)[len(lines):]
        except Exception as e:
            logger.warning("LLM query generation failed: %s", e)
            return self._fallback_queries(claim_text)

    @staticmethod
    def _fallback_queries(claim_text: str) -> List[str]:
        short = claim_text[:80]
        return [
            f"evidence for or against: {short}",
            f"is it true that {short}",
            f"fact check {short}",
        ]

    # ------------------------------------------------------------------
    # Search
    # ------------------------------------------------------------------

    async def _search_one(
        self, query: str, exclude_domains: List[str]
    ) -> List[Dict[str, Any]]:
        """Search via Tavily (or mock), filtering out excluded domains."""
        try:
            if self.search_provider == "tavily" and TavilyClient and self._tavily_key:
                return await self._search_tavily(query, exclude_domains)
            return self._mock_search(query)
        except Exception as e:
            logger.warning("Search failed for query '%s': %s", query, e)
            return []

    async def _search_tavily(
        self, query: str, exclude_domains: List[str]
    ) -> List[Dict[str, Any]]:
        client = TavilyClient(api_key=self._tavily_key)
        result = await asyncio.to_thread(
            client.search,
            query=query,
            max_results=5,
            search_depth="advanced",
            exclude_domains=exclude_domains,
        )
        sources = []
        for item in result.get("results", []):
            domain = ""
            try:
                domain = urlparse(item.get("url", "")).netloc.replace("www.", "")
            except Exception:
                pass
            sources.append({
                "url": item.get("url", ""),
                "title": item.get("title", ""),
                "content": item.get("content", ""),
                "domain": domain,
                "reliability": 0.6,
            })
        return sources

    @staticmethod
    def _mock_search(query: str) -> List[Dict[str, Any]]:
        return [
            {
                "url": f"https://example.com/challenge/{i}",
                "title": f"Challenge source {i} for: {query[:40]}",
                "content": f"Mock challenge evidence for: {query}",
                "domain": "example.com",
                "reliability": 0.5,
            }
            for i in range(3)
        ]

    # ------------------------------------------------------------------
    # Verdict evaluation
    # ------------------------------------------------------------------

    async def _evaluate_verdict(
        self,
        claim_text: str,
        sources: List[Dict[str, Any]],
        confidence_before: float,
    ) -> Dict[str, Any]:
        """Evaluate whether the new sources corroborate, refute, or dispute the claim."""
        if not self.llm or not sources:
            return {
                "verdict": "disputed",
                "confidence_after": confidence_before,
                "summary": "Insufficient independent evidence to conclusively verify or refute.",
            }

        source_summaries = "\n".join(
            f"- [{s.get('domain', 'unknown')}] {s.get('title', '')}: {(s.get('content') or '')[:200]}"
            for s in sources[:6]
        )

        prompt = (
            "You are an impartial fact-checker evaluating a claim against new independent evidence.\n\n"
            f"CLAIM: \"{claim_text}\"\n\n"
            f"NEW INDEPENDENT EVIDENCE:\n{source_summaries}\n\n"
            "Based on the evidence above, respond in EXACTLY this format:\n"
            "VERDICT: <corroborated|refuted|disputed>\n"
            "CONFIDENCE: <float 0.0 to 1.0>\n"
            "SUMMARY: <2-3 sentence explanation>\n\n"
            "Rules:\n"
            "- 'corroborated' = strong independent support found\n"
            "- 'refuted' = strong independent counter-evidence found\n"
            "- 'disputed' = mixed or insufficient evidence\n"
        )

        try:
            resp = await asyncio.to_thread(
                self.llm.generate, prompt, task_type="validate"
            )
            text = resp.content.strip()
            verdict = "disputed"
            confidence_after = confidence_before
            summary = text

            # Parse structured response
            for line in text.split("\n"):
                line_l = line.strip().upper()
                if line_l.startswith("VERDICT:"):
                    raw = line.split(":", 1)[1].strip().lower()
                    if raw in ("corroborated", "refuted", "disputed"):
                        verdict = raw
                elif line_l.startswith("CONFIDENCE:"):
                    try:
                        confidence_after = float(line.split(":", 1)[1].strip())
                        confidence_after = max(0.0, min(1.0, confidence_after))
                    except ValueError:
                        pass
                elif line_l.startswith("SUMMARY:"):
                    summary = line.split(":", 1)[1].strip()

            # Mark source agreement
            for s in sources:
                s["agrees"] = verdict == "corroborated"

            return {
                "verdict": verdict,
                "confidence_after": round(confidence_after, 2),
                "summary": summary,
            }
        except Exception as e:
            logger.warning("Verdict evaluation failed: %s", e)
            return {
                "verdict": "disputed",
                "confidence_after": confidence_before,
                "summary": "Evaluation failed — insufficient data.",
            }

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    @staticmethod
    def _empty_result(
        marker: str, text: str, conf: float, reason: str = "error"
    ) -> Dict[str, Any]:
        return {
            "claim_marker": marker,
            "claim_text": text,
            "verdict": "disputed",
            "confidence_before": conf,
            "confidence_after": conf,
            "summary": f"Challenge could not complete ({reason}).",
            "new_sources": [],
            "challenge_queries": [],
        }

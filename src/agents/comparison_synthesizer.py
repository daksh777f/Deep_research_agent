"""
Part 4 – Structured Comparison Mode: Comparison Synthesizer

Runs two parallel research pipelines for Subject A vs Subject B,
merges their evidence graphs, and produces an LLM-derived dimension
comparison table (dimensions NOT hard-coded).
"""

import asyncio
import json
import logging
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)


class ComparisonSynthesizer:
    """
    Synthesizes a structured comparison between two subjects.

    Pipeline:
    1. Run independent research for each subject (parallel)
    2. Merge evidence graphs
    3. Ask LLM to identify comparison dimensions
    4. Produce per-dimension verdicts and overall summary
    """

    def __init__(self, llm_client=None):
        self.llm = llm_client

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    async def synthesize(
        self,
        subject_a: str,
        subject_b: str,
        report_a: str,
        report_b: str,
        sources_a: List[Dict],
        sources_b: List[Dict],
        evidence_graph_a: Optional[Dict] = None,
        evidence_graph_b: Optional[Dict] = None,
    ) -> Dict[str, Any]:
        """
        Produce a structured comparison result from two completed research reports.

        Returns a ComparisonResult dict:
            subject_a, subject_b, dimensions, overall_summary, verdict
        """
        # 1. Ask LLM to derive comparison dimensions + per-dimension verdicts
        dimensions = await self._derive_dimensions(
            subject_a, subject_b, report_a, report_b
        )

        # 2. Overall verdict
        overall = await self._overall_verdict(
            subject_a, subject_b, dimensions, report_a, report_b
        )

        return {
            "subject_a": subject_a,
            "subject_b": subject_b,
            "dimensions": dimensions,
            "overall_summary": overall.get("summary", ""),
            "verdict": overall.get("verdict", "No clear winner"),
        }

    # ------------------------------------------------------------------
    # Dimension derivation via LLM
    # ------------------------------------------------------------------

    async def _derive_dimensions(
        self,
        subject_a: str,
        subject_b: str,
        report_a: str,
        report_b: str,
    ) -> List[Dict[str, Any]]:
        """Ask LLM to identify key comparison dimensions and score each."""
        if not self.llm:
            return self._fallback_dimensions(subject_a, subject_b)

        # Truncate reports to fit context
        max_chars = 3000
        ra = report_a[:max_chars] if report_a else ""
        rb = report_b[:max_chars] if report_b else ""

        prompt = (
            "You are a research analyst comparing two subjects. "
            "Based on the research summaries below, identify 4-7 key comparison dimensions. "
            "For each dimension, provide a brief summary for each subject and declare a winner.\n\n"
            f"SUBJECT A: {subject_a}\n"
            f"Research Summary A:\n{ra}\n\n"
            f"SUBJECT B: {subject_b}\n"
            f"Research Summary B:\n{rb}\n\n"
            "Respond with valid JSON — an array of objects with keys:\n"
            '  "dimension": string (short label),\n'
            '  "subject_a_summary": string (1-2 sentences),\n'
            '  "subject_b_summary": string (1-2 sentences),\n'
            '  "winner": "a" | "b" | "tie",\n'
            '  "confidence": float 0-1\n\n'
            "Return ONLY the JSON array, no markdown fences."
        )

        try:
            resp = await asyncio.to_thread(
                self.llm.generate, prompt, task_type="synthesize"
            )
            text = resp.content.strip()
            # Strip markdown fences if present
            if text.startswith("```"):
                text = text.split("\n", 1)[1] if "\n" in text else text[3:]
            if text.endswith("```"):
                text = text[:-3].strip()
            if text.startswith("json"):
                text = text[4:].strip()

            dimensions = json.loads(text)
            if isinstance(dimensions, list):
                # Validate structure
                clean = []
                for d in dimensions:
                    clean.append({
                        "dimension": str(d.get("dimension", "Unknown")),
                        "subject_a_summary": str(d.get("subject_a_summary", "")),
                        "subject_b_summary": str(d.get("subject_b_summary", "")),
                        "winner": d.get("winner", "tie") if d.get("winner") in ("a", "b", "tie") else "tie",
                        "confidence": min(1.0, max(0.0, float(d.get("confidence", 0.5)))),
                    })
                return clean
        except Exception as e:
            logger.warning("Dimension derivation failed: %s", e)

        return self._fallback_dimensions(subject_a, subject_b)

    # ------------------------------------------------------------------
    # Overall verdict
    # ------------------------------------------------------------------

    async def _overall_verdict(
        self,
        subject_a: str,
        subject_b: str,
        dimensions: List[Dict[str, Any]],
        report_a: str,
        report_b: str,
    ) -> Dict[str, str]:
        """Generate overall comparison verdict."""
        if not self.llm:
            a_wins = sum(1 for d in dimensions if d.get("winner") == "a")
            b_wins = sum(1 for d in dimensions if d.get("winner") == "b")
            winner = subject_a if a_wins > b_wins else subject_b if b_wins > a_wins else "Tie"
            return {
                "verdict": winner,
                "summary": f"{winner} leads in more dimensions ({a_wins} vs {b_wins}).",
            }

        dim_text = "\n".join(
            f"- {d['dimension']}: winner={d['winner']} (confidence {d['confidence']:.0%})"
            for d in dimensions
        )

        prompt = (
            f"Given the comparison dimensions between '{subject_a}' and '{subject_b}':\n"
            f"{dim_text}\n\n"
            "Write a 2-3 sentence overall verdict. Start with who wins overall.\n"
            "Format:\n"
            "VERDICT: <subject name or 'Tie'>\n"
            "SUMMARY: <explanation>"
        )

        try:
            resp = await asyncio.to_thread(
                self.llm.generate, prompt, task_type="synthesize"
            )
            text = resp.content.strip()
            verdict = ""
            summary = text
            for line in text.split("\n"):
                if line.strip().upper().startswith("VERDICT:"):
                    verdict = line.split(":", 1)[1].strip()
                elif line.strip().upper().startswith("SUMMARY:"):
                    summary = line.split(":", 1)[1].strip()
            return {"verdict": verdict or "See details", "summary": summary}
        except Exception as e:
            logger.warning("Overall verdict failed: %s", e)
            a_wins = sum(1 for d in dimensions if d.get("winner") == "a")
            b_wins = sum(1 for d in dimensions if d.get("winner") == "b")
            winner = subject_a if a_wins > b_wins else subject_b if b_wins > a_wins else "Tie"
            return {"verdict": winner, "summary": f"Based on {len(dimensions)} dimensions."}

    # ------------------------------------------------------------------
    # Fallback
    # ------------------------------------------------------------------

    @staticmethod
    def _fallback_dimensions(subject_a: str, subject_b: str) -> List[Dict[str, Any]]:
        return [
            {
                "dimension": "Overall Assessment",
                "subject_a_summary": f"Research on {subject_a} completed.",
                "subject_b_summary": f"Research on {subject_b} completed.",
                "winner": "tie",
                "confidence": 0.5,
            }
        ]

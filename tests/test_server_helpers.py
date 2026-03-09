"""
Tests for trust metrics, research gaps, contradictions, and continuation helpers.
"""

import pytest
from server import _compute_trust_metrics, _generate_research_gaps, _generate_continuations, _extract_contradictions


class TestComputeTrustMetrics:
    """Verify the trust metrics computation from evidence graphs."""

    def test_empty_graph(self):
        metrics = _compute_trust_metrics({}, [])
        assert metrics["sources_analyzed"] == 0
        assert metrics["confidence_score"] == 0.5

    def test_with_supports_edge(self):
        eg = {
            "claims": {"c1": {"text": "claim1", "confidence": 0.8}},
            "sources": {"s1": {"url": "https://a.com", "domain": "a.com", "reliability_score": 0.9}},
            "edges": {
                "e1": {"from_claim_id": "c1", "to_source_id": "s1", "relation": "supports", "strength": 0.8}
            },
        }
        metrics = _compute_trust_metrics(eg, [])
        assert metrics["claims_verified"] >= 1
        assert metrics["sources_analyzed"] == 1
        assert metrics["independent_domains"] == 1
        assert metrics["confidence_score"] > 0.5

    def test_contradiction_lowers_confidence(self):
        eg = {
            "claims": {"c1": {"text": "claim1", "confidence": 0.8}},
            "sources": {
                "s1": {"url": "https://a.com", "domain": "a.com", "reliability_score": 0.9},
                "s2": {"url": "https://b.com", "domain": "b.com", "reliability_score": 0.7},
            },
            "edges": {
                "e1": {"from_claim_id": "c1", "to_source_id": "s1", "relation": "supports", "strength": 0.8},
                "e2": {"from_claim_id": "c1", "to_source_id": "s2", "relation": "contradicts", "strength": 0.6},
            },
        }
        metrics = _compute_trust_metrics(eg, [])
        assert metrics["contradictions_found"] >= 1
        # Confidence should be penalized
        eg_no_contra = {
            "claims": {"c1": {"text": "claim1", "confidence": 0.8}},
            "sources": {"s1": {"url": "https://a.com", "domain": "a.com", "reliability_score": 0.9}},
            "edges": {
                "e1": {"from_claim_id": "c1", "to_source_id": "s1", "relation": "supports", "strength": 0.8}
            },
        }
        m2 = _compute_trust_metrics(eg_no_contra, [])
        assert metrics["confidence_score"] <= m2["confidence_score"]


class TestResearchGaps:
    """Verify research gap detection."""

    def test_empty_graph(self):
        gaps = _generate_research_gaps({}, "report")
        assert gaps["insufficient_evidence"] == []

    def test_claim_without_support_flagged(self):
        eg = {
            "claims": {"c1": {"text": "unsupported claim", "confidence": 0.3}},
            "sources": {},
            "edges": {},
        }
        gaps = _generate_research_gaps(eg, "")
        assert len(gaps["insufficient_evidence"]) >= 1

    def test_few_domains_flagged(self):
        eg = {
            "claims": {},
            "sources": {"s1": {"domain": "a.com"}},
            "edges": {},
        }
        gaps = _generate_research_gaps(eg, "")
        assert any("diversity" in g.lower() for g in gaps["scope_limitations"])


class TestContinuations:
    """Verify continuation suggestions."""

    def test_generates_four_continuations(self):
        conts = _generate_continuations("AI safety", "report", {})
        assert len(conts) == 4
        labels = [c["label"] for c in conts]
        assert "Go Deeper" in labels


class TestExtractContradictions:
    """Verify contradiction extraction logic."""

    def test_no_contradictions(self):
        eg = {
            "claims": {"c1": {"text": "a", "confidence": 0.8}},
            "sources": {"s1": {"url": "https://a.com", "domain": "a.com", "reliability_score": 0.9}},
            "edges": {
                "e1": {"from_claim_id": "c1", "to_source_id": "s1", "relation": "supports", "strength": 0.8}
            },
        }
        result = _extract_contradictions(eg)
        assert result == []

    def test_with_contradiction(self):
        eg = {
            "claims": {
                "c1": {"text": "Earth is flat", "confidence": 0.3},
                "c2": {"text": "Earth is round", "confidence": 0.9},
            },
            "sources": {
                "s1": {"url": "https://flat.com", "domain": "flat.com", "reliability_score": 0.2, "text_excerpt": "flat text"},
                "s2": {"url": "https://nasa.gov", "domain": "nasa.gov", "reliability_score": 0.95, "text_excerpt": "round text"},
            },
            "edges": {
                "e1": {"from_claim_id": "c1", "to_source_id": "s1", "relation": "supports", "strength": 0.3},
                "e2": {"from_claim_id": "c1", "to_source_id": "s2", "relation": "contradicts", "strength": 0.8},
                "e3": {"from_claim_id": "c2", "to_source_id": "s2", "relation": "supports", "strength": 0.9},
            },
        }
        result = _extract_contradictions(eg)
        assert len(result) >= 1
        assert result[0]["severity"] == "high"

"""
Tests for evidence graph construction and querying.
"""

import pytest
from src.evidence.graph import EvidenceGraph
from src.memory.models import Claim, Source, EvidenceRelation


class TestEvidenceGraphBasics:
    """Add/get claims, sources, and edges."""

    def _make_graph(self) -> EvidenceGraph:
        return EvidenceGraph()

    def test_add_claim(self):
        g = self._make_graph()
        c = Claim(text="Earth is round", confidence=0.95)
        cid = g.add_claim(c)
        assert cid == c.id
        assert g.get_claim(cid) is c

    def test_add_source(self):
        g = self._make_graph()
        s = Source(url="https://example.com", title="Example", reliability_score=0.8)
        sid = g.add_source(s)
        assert sid == s.id
        assert g.get_source(sid) is s

    def test_add_evidence_edge(self):
        g = self._make_graph()
        c = Claim(text="Python is popular", confidence=0.9)
        s = Source(url="https://python.org", title="Python", reliability_score=0.9)
        g.add_claim(c)
        g.add_source(s)
        eid = g.add_evidence(c.id, s.id, EvidenceRelation.SUPPORTS, strength=0.85)
        edges = g.get_edges_for_claim(c.id)
        assert len(edges) == 1
        assert edges[0].relation == EvidenceRelation.SUPPORTS
        assert edges[0].strength == 0.85

    def test_provenance_updated(self):
        g = self._make_graph()
        c = Claim(text="test")
        s = Source(url="https://a.com")
        g.add_claim(c)
        g.add_source(s)
        g.add_evidence(c.id, s.id, EvidenceRelation.MENTIONS)
        assert s.id in c.provenance


class TestEvidenceGraphQueries:
    """Test top_supporting_sources, get_claim_provenance, to_dict."""

    def _populated_graph(self) -> EvidenceGraph:
        g = EvidenceGraph()
        c = Claim(text="AI is transformative", confidence=0.8)
        s1 = Source(url="https://a.com", reliability_score=0.9)
        s2 = Source(url="https://b.com", reliability_score=0.6)
        g.add_claim(c)
        g.add_source(s1)
        g.add_source(s2)
        g.add_evidence(c.id, s1.id, EvidenceRelation.SUPPORTS, 0.9)
        g.add_evidence(c.id, s2.id, EvidenceRelation.MENTIONS, 0.3)
        return g

    def test_top_supporting_sources(self):
        g = self._populated_graph()
        claims = list(g._claims.values())
        result = g.top_supporting_sources(claims[0].id, n=5)
        assert len(result) == 1  # only one SUPPORTS edge
        source, strength = result[0]
        assert strength == 0.9

    def test_to_dict_roundtrip(self):
        g = self._populated_graph()
        d = g.to_dict()
        assert "claims" in d
        assert "sources" in d
        assert "edges" in d
        # Verify we can reconstruct
        g2 = EvidenceGraph.from_dict(d)
        assert len(g2._claims) == len(g._claims)
        assert len(g2._sources) == len(g._sources)


class TestClaimsFromValidation:
    """Test the fallback _claims_from_validation method."""

    def test_extracts_key_claims_from_validation(self):
        from main import DeepResearchOrchestratorV2
        sources = [
            {
                "url": "https://example.com/a",
                "id": "src-1",
                "validation": {
                    "reliability_score": 0.85,
                    "key_claims": ["Claim alpha", "Claim beta"],
                },
            },
        ]
        claims = DeepResearchOrchestratorV2._claims_from_validation(sources)
        assert len(claims) == 2
        assert claims[0]["claim"] == "Claim alpha"
        assert claims[0]["source_url"] == "https://example.com/a"
        assert claims[0]["confidence"] == 0.85


class TestClaimsFromSourceTitles:
    """Test the last-resort fallback _claims_from_source_titles method."""

    def test_creates_claims_from_titles(self):
        from main import DeepResearchOrchestratorV2
        sources = [
            {"url": "https://example.com/a", "id": "src-1", "title": "AI Revolution in Healthcare"},
            {"url": "https://example.com/b", "id": "src-2", "title": "Climate Change Report 2026"},
        ]
        claims = DeepResearchOrchestratorV2._claims_from_source_titles(sources)
        assert len(claims) == 2
        assert claims[0]["claim"] == "AI Revolution in Healthcare"
        assert claims[0]["source_url"] == "https://example.com/a"
        assert claims[0]["source_id"] == "src-1"
        assert claims[0]["confidence"] == 0.4

    def test_falls_back_to_content_first_sentence(self):
        from main import DeepResearchOrchestratorV2
        sources = [
            {"url": "https://x.com", "id": "s1", "title": "", "content": "Neural networks outperform baselines. More text here."},
        ]
        claims = DeepResearchOrchestratorV2._claims_from_source_titles(sources)
        assert len(claims) == 1
        assert "Neural networks outperform baselines" in claims[0]["claim"]

    def test_skips_empty_sources(self):
        from main import DeepResearchOrchestratorV2
        sources = [
            {"url": "https://x.com", "id": "s1", "title": "", "content": ""},
            {"url": "https://y.com", "id": "s2", "title": "Valid Title"},
        ]
        claims = DeepResearchOrchestratorV2._claims_from_source_titles(sources)
        assert len(claims) == 1
        assert claims[0]["claim"] == "Valid Title"


class TestHeuristicValidationKeyClaimsExtraction:
    """Test that the heuristic validator now extracts key_claims."""

    def test_heuristic_extracts_title_as_claim(self):
        from src.agents.source_validator import SourceValidatorAgent
        agent = SourceValidatorAgent(llm_client=None)
        finding = {
            "source": "https://example.com",
            "title": "GPT-4 Achieves Human-Level Performance",
            "content": "",
        }
        result = agent._heuristic_validation(finding)
        assert len(result["key_claims"]) >= 1
        assert "GPT-4 Achieves Human-Level Performance" in result["key_claims"]

    def test_heuristic_extracts_sentences_from_content(self):
        from src.agents.source_validator import SourceValidatorAgent
        agent = SourceValidatorAgent(llm_client=None)
        finding = {
            "source": "https://example.com",
            "title": "",
            "content": "Short. This is a longer sentence that should be extracted as a claim from the content. Another long sentence that passes the threshold of thirty characters.",
        }
        result = agent._heuristic_validation(finding)
        # Should have at least the sentences > 30 chars
        assert len(result["key_claims"]) >= 1
        assert any("longer sentence" in c for c in result["key_claims"])

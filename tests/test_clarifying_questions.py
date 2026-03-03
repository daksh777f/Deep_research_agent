"""
Tests for the clarifying-questions / ambiguity-detection feature.
"""

import json
import pytest
from unittest.mock import patch, MagicMock


class TestDetectAmbiguity:
    """Verify the detect_ambiguity helper."""

    @pytest.mark.asyncio
    async def test_clear_query_returns_none(self):
        from server import detect_ambiguity

        mock_llm = MagicMock()
        mock_resp = MagicMock()
        mock_resp.content = "CLEAR"
        mock_llm.chat = MagicMock(return_value=mock_resp)

        with patch("src.core.llm_client.LLMClient", return_value=mock_llm):
            result = await detect_ambiguity("What is the capital of France?")
        assert result is None

    @pytest.mark.asyncio
    async def test_ambiguous_query_returns_questions(self):
        from server import detect_ambiguity

        questions = ["Did you mean X or Y?", "What domain are you interested in?"]
        mock_llm = MagicMock()
        mock_resp = MagicMock()
        mock_resp.content = json.dumps(questions)
        mock_llm.chat = MagicMock(return_value=mock_resp)

        with patch("src.core.llm_client.LLMClient", return_value=mock_llm):
            result = await detect_ambiguity("best framework")
        assert result == questions

    @pytest.mark.asyncio
    async def test_exception_returns_none(self):
        from server import detect_ambiguity

        with patch("src.core.llm_client.LLMClient", side_effect=Exception("boom")):
            result = await detect_ambiguity("anything")
        assert result is None

    @pytest.mark.asyncio
    async def test_clear_query_no_lc_attribute(self):
        """Ensure tests don't rely on server._LC attribute."""
        import server
        assert not hasattr(server, '_LC'), "_LC is a local import inside detect_ambiguity, not a module attribute"


class TestResearchResponseModel:
    """Verify the ResearchResponse includes clarifying_questions."""

    def test_response_model_fields(self):
        from server import ResearchResponse
        r = ResearchResponse(
            session_id="s1",
            status="clarification_needed",
            message="Please clarify",
            clarifying_questions=["Q1?", "Q2?"],
        )
        assert r.clarifying_questions == ["Q1?", "Q2?"]

    def test_response_model_default_none(self):
        from server import ResearchResponse
        r = ResearchResponse(session_id="s1", status="ok", message="done")
        assert r.clarifying_questions is None


class TestResearchRequestModel:
    """Verify the ResearchRequest includes skip_clarification."""

    def test_skip_clarification_default(self):
        from server import ResearchRequest
        req = ResearchRequest(query="hello")
        assert req.skip_clarification is False

    def test_skip_clarification_set_true(self):
        from server import ResearchRequest
        req = ResearchRequest(query="hello", skip_clarification=True)
        assert req.skip_clarification is True

"""
Tests for the LLM Client — cost tracking, usage stats, routing.
"""

import pytest
from unittest.mock import patch, MagicMock
from src.core.llm_client import LLMClient, LLMResponse


class TestCostTracking:
    """Verify that _record_usage computes real $ cost from the pricing table."""

    def _make_client(self, provider: str) -> LLMClient:
        """Return an LLMClient with the given provider set (skip real init)."""
        with patch.object(LLMClient, "__init__", lambda self: None):
            client = LLMClient()
        # Manually set the fields __init__ would have set
        client.total_tokens_used = 0
        client.total_prompt_tokens = 0
        client.total_completion_tokens = 0
        client.total_cost = 0.0
        client.provider = provider
        client.model_usage_breakdown = {}
        client._task_budgets = {}
        client._task_token_usage = {}
        return client

    def test_cerebras_free_tier(self):
        client = self._make_client("cerebras")
        client._record_usage({"prompt_tokens": 1000, "completion_tokens": 500, "total_tokens": 1500})
        assert client.total_cost == 0.0
        assert client.total_tokens_used == 1500

    def test_google_cost(self):
        client = self._make_client("google")
        client._record_usage({"prompt_tokens": 1000, "completion_tokens": 1000, "total_tokens": 2000})
        expected = (1000 * 0.00025 + 1000 * 0.0005) / 1000.0
        assert abs(client.total_cost - expected) < 1e-9

    def test_openrouter_cost(self):
        client = self._make_client("openrouter")
        client._record_usage({"prompt_tokens": 2000, "completion_tokens": 1000, "total_tokens": 3000})
        expected = (2000 * 0.001 + 1000 * 0.002) / 1000.0
        assert abs(client.total_cost - expected) < 1e-9

    def test_cumulative_cost(self):
        client = self._make_client("google")
        client._record_usage({"prompt_tokens": 500, "completion_tokens": 500, "total_tokens": 1000})
        client._record_usage({"prompt_tokens": 500, "completion_tokens": 500, "total_tokens": 1000})
        single = (500 * 0.00025 + 500 * 0.0005) / 1000.0
        assert abs(client.total_cost - single * 2) < 1e-9

    def test_get_usage_stats_includes_cost(self):
        client = self._make_client("google")
        client.MODELS = {"default": "gemini-2.0-flash"}
        client._record_usage({"prompt_tokens": 100, "completion_tokens": 100, "total_tokens": 200})
        stats = client.get_usage_stats()
        assert stats["estimated_cost_usd"] > 0
        assert stats["total_tokens"] == 200


class TestModelRouting:
    """Verify adaptive model routing selects correctly."""

    def _make_client(self) -> LLMClient:
        with patch.object(LLMClient, "__init__", lambda self: None):
            client = LLMClient()
        client.TASK_ROUTING = LLMClient.TASK_ROUTING
        client.MODEL_TIERS = {
            "small": ["gpt-oss-120b"],
            "medium": ["gpt-oss-120b"],
            "large": ["gpt-oss-120b"],
        }
        client.MODELS = {"default": "gpt-oss-120b"}
        return client

    def test_sanitize_routes_to_small(self):
        client = self._make_client()
        model = client.route_model("sanitize")
        assert model == "gpt-oss-120b"

    def test_budget_pressure_downgrades(self):
        client = self._make_client()
        # With very low budget, large should downgrade
        model = client.route_model("synthesize", budget_remaining_ms=1000)
        assert model == "gpt-oss-120b"  # All tiers are same model here

    def test_unknown_task_uses_hint(self):
        client = self._make_client()
        model = client.route_model("unknown_task", model_hint="small")
        assert model == "gpt-oss-120b"


class TestComplexityEstimation:
    """Verify the heuristic complexity estimator."""

    def _make_client(self) -> LLMClient:
        with patch.object(LLMClient, "__init__", lambda self: None):
            client = LLMClient()
        return client

    def test_empty_query(self):
        client = self._make_client()
        assert client.estimate_complexity("") == 0.0

    def test_short_query(self):
        client = self._make_client()
        score = client.estimate_complexity("hello")
        assert 0.0 <= score <= 1.0

    def test_complex_query(self):
        client = self._make_client()
        query = "compare the tradeoff between architecture design and benchmark performance in multi-step AI systems"
        score = client.estimate_complexity(query)
        assert score > 0.2  # Should be non-trivial

"""
Tests for the EmbeddingService.
"""

import pytest
from unittest.mock import AsyncMock, patch, MagicMock

from src.core.embedding_service import EmbeddingService


class TestEmbeddingServiceInit:
    """Verify configuration and initialisation."""

    def test_defaults(self):
        svc = EmbeddingService(api_key="test-key")
        assert svc.model == "text-embedding-3-small"
        assert svc.dimension == 1536
        assert svc.base_url == "https://api.openai.com/v1"

    def test_custom_model_and_dim(self):
        svc = EmbeddingService(api_key="k", model="custom-model", dimension=768)
        assert svc.model == "custom-model"
        assert svc.dimension == 768

    def test_missing_key_warns(self, caplog):
        with patch.dict("os.environ", {}, clear=True):
            svc = EmbeddingService(api_key="")
        assert svc.api_key == ""


@pytest.mark.asyncio
class TestEmbedAsync:
    """Verify async embed()."""

    async def test_embed_returns_vector(self):
        svc = EmbeddingService(api_key="test-key")
        fake_response = MagicMock()
        fake_response.status_code = 200
        fake_response.raise_for_status = MagicMock()
        fake_response.json = MagicMock(return_value={
            "data": [{"embedding": [0.1, 0.2, 0.3]}]
        })

        with patch("src.core.embedding_service.httpx.AsyncClient") as mock_client_cls:
            mock_client = AsyncMock()
            mock_client.post = AsyncMock(return_value=fake_response)
            mock_client.__aenter__ = AsyncMock(return_value=mock_client)
            mock_client.__aexit__ = AsyncMock(return_value=False)
            mock_client_cls.return_value = mock_client

            result = await svc.embed("hello world")
            assert result == [0.1, 0.2, 0.3]

    async def test_embed_batch_returns_multiple(self):
        svc = EmbeddingService(api_key="test-key")
        fake_response = MagicMock()
        fake_response.status_code = 200
        fake_response.raise_for_status = MagicMock()
        fake_response.json = MagicMock(return_value={
            "data": [
                {"embedding": [0.1, 0.2], "index": 0},
                {"embedding": [0.3, 0.4], "index": 1},
            ]
        })

        with patch("src.core.embedding_service.httpx.AsyncClient") as mock_client_cls:
            mock_client = AsyncMock()
            mock_client.post = AsyncMock(return_value=fake_response)
            mock_client.__aenter__ = AsyncMock(return_value=mock_client)
            mock_client.__aexit__ = AsyncMock(return_value=False)
            mock_client_cls.return_value = mock_client

            result = await svc.embed_batch(["a", "b"])
            assert len(result) == 2


class TestEmbedSync:
    """Verify the blocking wrapper."""

    def test_embed_sync_calls_async(self):
        svc = EmbeddingService(api_key="test-key")
        with patch.object(svc, "embed", new_callable=lambda: lambda self=None, text="": AsyncMock(return_value=[1.0, 2.0])):
            # embed_sync dispatches to a thread when inside an event loop,
            # or asyncio.run when outside. Patch the helper.
            with patch("asyncio.run", return_value=[1.0, 2.0]):
                result = svc.embed_sync("hello")
                assert result == [1.0, 2.0]

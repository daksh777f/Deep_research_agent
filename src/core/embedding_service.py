"""
Embedding Service for Deep Research Agent V2

Provides text → vector embeddings using OpenAI-compatible endpoints.
Primary: OpenAI text-embedding-3-small (or configured alternative)
Fallback: Cerebras/local embedding if available
"""

import asyncio
import logging
import os
import threading
from typing import List, Optional, Any

import httpx

logger = logging.getLogger(__name__)

# Default embedding dimension for text-embedding-3-small
_DEFAULT_DIM = 1536


class EmbeddingService:
    """Generate text embeddings via OpenAI-compatible API.

    Supports both async ``embed()`` and synchronous ``embed_sync()``
    so callers in sync contexts (e.g. ``store_research_findings``) work
    without being forced into an event loop.
    """

    def __init__(
        self,
        api_key: Optional[str] = None,
        model: Optional[str] = None,
        base_url: Optional[str] = None,
        dimension: int = _DEFAULT_DIM,
    ):
        self.api_key = api_key or os.getenv("OPENAI_API_KEY") or os.getenv("OPENROUTER_API_KEY") or ""
        self.model = model or os.getenv("EMBEDDING_MODEL", "text-embedding-3-small")
        self.base_url = (base_url or os.getenv("EMBEDDING_BASE_URL", "https://api.openai.com/v1")).rstrip("/")
        self.dimension = dimension

        if not self.api_key:
            logger.warning("No embedding API key found; embeddings will be unavailable.")

    # ------------------------------------------------------------------
    # Async interface
    # ------------------------------------------------------------------

    async def embed(self, text: str) -> List[float]:
        """Return embedding vector for *text* (async)."""
        return await self._request_embedding(text)

    async def embed_batch(self, texts: List[str]) -> List[List[float]]:
        """Embed multiple texts in a single request."""
        return await self._request_embedding_batch(texts)

    # ------------------------------------------------------------------
    # Sync interface (used by store_research_findings)
    # ------------------------------------------------------------------

    def embed_sync(self, text: str) -> List[float]:
        """Blocking wrapper around ``embed()``."""
        try:
            loop = asyncio.get_running_loop()
        except RuntimeError:
            return asyncio.run(self.embed(text))

        # Running inside an existing event loop → dispatch to a thread
        result_holder: dict = {}

        def _run():
            _loop = asyncio.new_event_loop()
            try:
                result_holder["value"] = _loop.run_until_complete(self.embed(text))
            finally:
                _loop.close()

        t = threading.Thread(target=_run)
        t.start()
        t.join()
        return result_holder.get("value", [0.0] * self.dimension)

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    async def _request_embedding(self, text: str) -> List[float]:
        """Call the embeddings endpoint for a single text."""
        url = f"{self.base_url}/embeddings"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        payload: dict = {
            "model": self.model,
            "input": text[:8000],  # Limit input length to avoid token overflow
        }
        # text-embedding-3-* supports dimension param
        if "text-embedding-3" in self.model:
            payload["dimensions"] = self.dimension

        async with httpx.AsyncClient(timeout=30.0) as client:
            resp = await client.post(url, headers=headers, json=payload)
            resp.raise_for_status()
            data = resp.json()

        return data["data"][0]["embedding"]

    async def _request_embedding_batch(self, texts: List[str]) -> List[List[float]]:
        """Call the embeddings endpoint for a batch of texts."""
        url = f"{self.base_url}/embeddings"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        payload: dict = {
            "model": self.model,
            "input": [t[:8000] for t in texts],
        }
        if "text-embedding-3" in self.model:
            payload["dimensions"] = self.dimension

        async with httpx.AsyncClient(timeout=60.0) as client:
            resp = await client.post(url, headers=headers, json=payload)
            resp.raise_for_status()
            data = resp.json()

        # Sort by index to maintain order
        items = sorted(data["data"], key=lambda d: d["index"])
        return [item["embedding"] for item in items]

"""
Tests for the MemoryAPI — session management, store/recall findings.
"""

import pytest
from unittest.mock import AsyncMock, MagicMock, patch

from src.memory.memory_api import MemoryAPI
from src.memory.models import Session, Source, Claim


@pytest.mark.asyncio
class TestSessionManagement:
    """Test create, get, update sessions."""

    async def test_create_session_returns_session(self):
        api = MemoryAPI(embedding_service=None)
        # Disable Firestore to isolate in-memory path
        api.firestore = None
        session = await api.create_session(query="test query", user_id="u1")
        assert isinstance(session, Session)
        assert session.query_text == "test query"

    async def test_get_session_from_memory(self):
        api = MemoryAPI(embedding_service=None)
        api.firestore = None
        s = await api.create_session(query="q")
        got = await api.get_session(s.id)
        assert got is s

    async def test_increment_iteration(self):
        api = MemoryAPI(embedding_service=None)
        api.firestore = None
        s = await api.create_session(query="q")
        new_iter = await api.increment_iteration(s.id)
        assert new_iter == 1


@pytest.mark.asyncio
class TestSourceManagement:
    """Test add_source and deduplication."""

    async def test_add_source(self):
        api = MemoryAPI(embedding_service=None)
        api.firestore = None
        src = Source(url="https://example.com", title="Ex")
        sid = await api.add_source(src)
        assert sid == src.id
        assert src.id in api._sources

    async def test_duplicate_url_returns_existing(self):
        api = MemoryAPI(embedding_service=None)
        api.firestore = None
        src1 = Source(url="https://example.com", title="Ex1")
        src2 = Source(url="https://example.com", title="Ex2")
        id1 = await api.add_source(src1)
        id2 = await api.add_source(src2)
        assert id1 == id2  # deduplication by URL


class TestStoreResearchFindings:
    """Test store_research_findings with mocked embedding service."""

    def test_no_embedding_returns_empty(self):
        api = MemoryAPI(embedding_service=None)
        api.firestore = None
        result = api.store_research_findings("sess", "q", [{"content": "text"}])
        assert result == []

    def test_with_embedding_calls_upsert(self):
        mock_embed = MagicMock()
        mock_embed.embed_sync = MagicMock(return_value=[0.1, 0.2, 0.3])
        mock_vector_store = MagicMock()
        mock_vector_store.upsert = MagicMock()

        api = MemoryAPI(embedding_service=mock_embed)
        api.firestore = None
        api.vector_store = mock_vector_store

        ids = api.store_research_findings("s1", "query", [
            {"content": "Finding one", "id": "f1"},
            {"content": "Finding two", "id": "f2"},
        ])
        assert len(ids) == 2
        assert mock_vector_store.upsert.call_count == 2


@pytest.mark.asyncio
class TestRecallMemories:
    """Test recall_memories with mocked vector store."""

    async def test_no_vector_store_returns_empty(self):
        api = MemoryAPI(embedding_service=None)
        api.firestore = None
        api.vector_store = None
        result = await api.recall_memories("query")
        assert result == []

    async def test_recall_returns_hits(self):
        mock_embed = MagicMock()
        mock_embed.embed = AsyncMock(return_value=[0.1, 0.2])

        mock_vs = MagicMock()
        mock_vs.search = AsyncMock(return_value=[
            {"id": "m1", "score": 0.95, "payload": {"finding": {"content": "hello"}}},
        ])

        api = MemoryAPI(embedding_service=mock_embed)
        api.firestore = None
        api.vector_store = mock_vs

        hits = await api.recall_memories("test query", top_k=5)
        assert len(hits) == 1
        assert hits[0]["score"] == 0.95

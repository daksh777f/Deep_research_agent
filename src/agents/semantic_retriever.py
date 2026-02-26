"""
Deep Research Agent V2 - Semantic Retriever Agent

Memory-augmented retrieval using semantic search over claims and sources.
Combines vector similarity with evidence graph relationships.
"""

import json
from typing import Dict, Any, List, Optional, Tuple
from dataclasses import dataclass

from .base import BaseAgent, AgentResult

# V2 imports
try:
    from ..memory.models import Claim, Source
    from ..memory.memory_api import MemoryAPI
    from ..evidence.graph import EvidenceGraph
    HAS_V2 = True
except ImportError:
    HAS_V2 = False
    Claim = None
    Source = None
    MemoryAPI = None
    EvidenceGraph = None


@dataclass
class RetrievalResult:
    """Result of semantic retrieval."""
    item_type: str  # "claim" or "source"
    item_id: str
    text: str
    score: float
    metadata: Dict[str, Any]
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "item_type": self.item_type,
            "item_id": self.item_id,
            "text": self.text,
            "score": self.score,
            "metadata": self.metadata,
        }


class SemanticRetrieverAgent(BaseAgent):
    """
    Semantic Retriever Agent - Memory-augmented retrieval.
    
    Uses semantic similarity to find:
    1. Related claims from memory
    2. Relevant sources from past research
    3. Cross-session knowledge connections
    """
    
    def __init__(
        self,
        llm_client,
        context_manager=None,
        memory_api: Optional["MemoryAPI"] = None,
        evidence_graph: Optional["EvidenceGraph"] = None,
        embedding_service=None,
    ):
        """
        Initialize the Semantic Retriever.
        
        Args:
            llm_client: LLM client for query enhancement
            context_manager: Optional context manager
            memory_api: V2 memory API for retrieval
            evidence_graph: V2 evidence graph for relationships
            embedding_service: Service for generating embeddings
        """
        super().__init__(llm_client)
        self.context_manager = context_manager
        self.memory_api = memory_api
        self.evidence_graph = evidence_graph
        self.embedding_service = embedding_service
    
    def expand_query(self, query: str) -> List[str]:
        """
        Expand query with related terms for better retrieval.
        
        Args:
            query: Original query
            
        Returns:
            List of expanded queries
        """
        prompt = f"""Expand this research query into 3-5 related search queries that would help find relevant information.

QUERY: {query}

Generate variations that:
- Use synonyms
- Focus on different aspects
- Include related concepts

Return as JSON array: ["query1", "query2", ...]"""

        try:
            response = self.llm.chat(
                messages=[
                    {"role": "system", "content": "Generate query expansions for semantic search."},
                    {"role": "user", "content": prompt}
                ],
                model="fast",
                temperature=0.5,
                max_tokens=500,
            )
            
            content = response.content.strip()
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0].strip()
            elif "```" in content:
                content = content.split("```")[1].split("```")[0].strip()
            
            expansions = json.loads(content)
            return [query] + expansions[:4]  # Original + 4 expansions
            
        except Exception as e:
            self.log(f"Query expansion failed: {e}")
            return [query]
    
    async def retrieve_claims(
        self,
        query: str,
        k: int = 10,
        min_confidence: float = 0.3,
    ) -> List[RetrievalResult]:
        """
        Retrieve relevant claims via semantic search.
        
        Args:
            query: Search query
            k: Number of results
            min_confidence: Minimum claim confidence
            
        Returns:
            List of RetrievalResult objects
        """
        if not self.memory_api or not HAS_V2:
            return []
        
        try:
            # Get embedding for query
            embedding = None
            if self.embedding_service:
                embedding = await self.embedding_service.embed(query)
            
            # Query claims from memory
            claims = await self.memory_api.query_claims(
                embedding=embedding,
                k=k,
                min_confidence=min_confidence,
            )
            
            results = []
            for claim, score in claims:
                results.append(RetrievalResult(
                    item_type="claim",
                    item_id=claim.id,
                    text=claim.text,
                    score=score,
                    metadata={
                        "confidence": claim.confidence,
                        "provenance": claim.provenance,
                        "normalized_text": claim.normalized_text,
                    },
                ))
            
            return results
            
        except Exception as e:
            self.log(f"Claim retrieval failed: {e}")
            return []
    
    async def retrieve_sources(
        self,
        query: str,
        k: int = 10,
        min_reliability: float = 0.3,
    ) -> List[RetrievalResult]:
        """
        Retrieve relevant sources via semantic search.
        
        Args:
            query: Search query
            k: Number of results
            min_reliability: Minimum source reliability
            
        Returns:
            List of RetrievalResult objects
        """
        if not self.memory_api or not HAS_V2:
            return []
        
        try:
            # Get embedding for query
            embedding = None
            if self.embedding_service:
                embedding = await self.embedding_service.embed(query)
            
            # Query sources from memory
            sources = await self.memory_api.search_similar_sources(
                embedding=embedding,
                k=k,
            )
            
            results = []
            for source, score in sources:
                if source.reliability_score >= min_reliability:
                    results.append(RetrievalResult(
                        item_type="source",
                        item_id=source.id,
                        text=source.text_excerpt,
                        score=score,
                        metadata={

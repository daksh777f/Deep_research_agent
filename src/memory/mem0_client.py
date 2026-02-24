"""
Deep Research Agent V2 - Mem0 Memory Client

Integrates with Mem0 for intelligent memory management:
- Automatic memory extraction from conversations
- Semantic search over memories
- Memory lifecycle management
"""

import os
import json
import requests
from typing import List, Dict, Any, Optional
from datetime import datetime
from dataclasses import dataclass


@dataclass
class Memory:
    """A memory item from Mem0."""
    id: str
    memory: str
    user_id: Optional[str] = None
    agent_id: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None
    categories: Optional[List[str]] = None
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Memory":
        return cls(
            id=data.get("id", ""),
            memory=data.get("memory", ""),
            user_id=data.get("user_id"),
            agent_id=data.get("agent_id"),
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at"),
            metadata=data.get("metadata"),
            categories=data.get("categories"),
        )


class Mem0Client:
    """
    Client for Mem0 memory management API.
    
    Provides memory operations for the Deep Research Agent:
    - Store research findings as memories
    - Search relevant memories for new queries
    - Track claim-level knowledge across sessions
    """
    
    BASE_URL = "https://api.mem0.ai"
    
    def __init__(
        self,
        api_key: Optional[str] = None,
        org_id: Optional[str] = None,
        project_id: Optional[str] = None,
    ):
        """
        Initialize Mem0 client.
        
        Args:
            api_key: Mem0 API key (or MEM0_API_KEY env var)
            org_id: Organization ID (optional)
            project_id: Project ID (optional)
        """
        self.api_key = api_key or os.getenv("MEM0_API_KEY")
        self.org_id = org_id or os.getenv("MEM0_ORG_ID")
        self.project_id = project_id or os.getenv("MEM0_PROJECT_ID")
        
        if not self.api_key:
            raise ValueError("MEM0_API_KEY must be set")
        
        self.headers = {
            "Authorization": f"Token {self.api_key}",
            "Content-Type": "application/json",
        }
    
    def add_memory(
        self,
        messages: List[Dict[str, str]],
        user_id: Optional[str] = None,
        agent_id: Optional[str] = None,
        run_id: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
        categories: Optional[Dict[str, str]] = None,
        infer: bool = True,
    ) -> List[Dict[str, Any]]:
        """
        Add memories from conversation messages.
        
        Args:
            messages: List of {"role": "user|assistant", "content": "..."} messages
            user_id: User identifier for memory association
            agent_id: Agent identifier (e.g., "research-agent")
            run_id: Run/session identifier
            metadata: Additional metadata (source_ids, claim_ids, etc.)
            categories: Custom categories with descriptions
            infer: Whether to extract memories or store raw
            
        Returns:
            List of created memory events with ids
        """
        payload = {
            "messages": messages,
            "infer": infer,
            "output_format": "v1.1",
            "version": "v2",
        }
        
        if user_id:
            payload["user_id"] = user_id
        if agent_id:
            payload["agent_id"] = agent_id
        if run_id:
            payload["run_id"] = run_id
        if metadata:
            payload["metadata"] = metadata
        if categories:
            payload["custom_categories"] = categories
        if self.org_id:
            payload["org_id"] = self.org_id
        if self.project_id:
            payload["project_id"] = self.project_id
        
        response = requests.post(
            f"{self.BASE_URL}/v1/memories/",
            headers=self.headers,
            json=payload,
            timeout=30,
        )
        response.raise_for_status()
        
        result = response.json()
        return result.get("results", result)
    
    def search_memories(
        self,
        query: str,
        user_id: Optional[str] = None,
        agent_id: Optional[str] = None,
        filters: Optional[Dict[str, Any]] = None,
        top_k: int = 10,
        threshold: float = 0.7,
        rerank: bool = True,
    ) -> List[Memory]:
        """
        Search for relevant memories.
        
        Args:
            query: Search query
            user_id: Filter by user
            agent_id: Filter by agent
            filters: Advanced filter conditions
            top_k: Number of results
            threshold: Minimum similarity threshold
            rerank: Whether to rerank results
            
        Returns:
            List of matching Memory objects
        """
        payload = {
            "query": query,
            "version": "v2",
            "top_k": top_k,
            "threshold": threshold,
            "rerank": rerank,
        }
        
        # Build filters
        filter_conditions = filters or {}
        if user_id:
            filter_conditions["user_id"] = user_id
        if agent_id:
            filter_conditions["agent_id"] = agent_id
        
        if filter_conditions:
            payload["filters"] = filter_conditions
        
        if self.org_id:
            payload["org_id"] = self.org_id
        if self.project_id:
            payload["project_id"] = self.project_id
        
        response = requests.post(
            f"{self.BASE_URL}/v1/memories/search/",
            headers=self.headers,
            json=payload,
            timeout=30,
        )
        response.raise_for_status()
        
        result = response.json()
        memories_data = result.get("results", result)
        
        return [Memory.from_dict(m) for m in memories_data]
    
    def get_memories(
        self,
        user_id: Optional[str] = None,
        agent_id: Optional[str] = None,
        run_id: Optional[str] = None,
        limit: int = 100,
    ) -> List[Memory]:
        """
        Get all memories with optional filters.
        
        Args:
            user_id: Filter by user
            agent_id: Filter by agent
            run_id: Filter by run/session
            limit: Maximum number of memories
            
        Returns:
            List of Memory objects
        """
        params = {"limit": limit}
        
        if user_id:
            params["user_id"] = user_id
        if agent_id:
            params["agent_id"] = agent_id
        if run_id:
            params["run_id"] = run_id
        if self.org_id:
            params["org_id"] = self.org_id
        if self.project_id:
            params["project_id"] = self.project_id
        
        response = requests.get(
            f"{self.BASE_URL}/v1/memories/",
            headers=self.headers,
            params=params,
            timeout=30,
        )
        response.raise_for_status()
        
        result = response.json()
        memories_data = result.get("results", result)
        
        return [Memory.from_dict(m) for m in memories_data]
    
    def get_memory(self, memory_id: str) -> Optional[Memory]:
        """Get a specific memory by ID."""
        response = requests.get(
            f"{self.BASE_URL}/v1/memories/{memory_id}/",
            headers=self.headers,
            timeout=30,

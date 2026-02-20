"""
Deep Research Agent V2 - Memory Data Models

Core data structures for the memory layer including:
- Claim: Factual statements extracted from sources
- Source: Information sources with metadata
- Session: Research session state
- SummarySnapshot: Compressed session snapshots
- EvidenceEdge: Relationships between claims and sources
"""

import uuid
from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional, Dict, Any
from enum import Enum


class EvidenceRelation(Enum):
    """Types of evidence relationships between claims and sources."""
    SUPPORTS = "supports"
    CONTRADICTS = "contradicts"
    MENTIONS = "mentions"


@dataclass
class Claim:
    """
    A factual claim extracted from source content.
    
    Claims are the atomic units of knowledge in the evidence graph.
    They are linked to sources via EvidenceEdges.
    """
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    text: str = ""                              # Canonical claim text
    normalized_text: str = ""                   # Deduplicated/canonicalized form
    embedding: Optional[List[float]] = None     # Vector embedding for similarity search
    provenance: List[str] = field(default_factory=list)  # source_ids that mention this
    confidence: float = 0.0                     # Aggregated confidence score
    supporting_text: str = ""                   # Original text that supports this claim
    created_at: datetime = field(default_factory=datetime.now)
    updated_at: datetime = field(default_factory=datetime.now)
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "text": self.text,
            "normalized_text": self.normalized_text,
            "embedding": self.embedding,
            "provenance": self.provenance,
            "confidence": self.confidence,
            "supporting_text": self.supporting_text,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Claim":
        return cls(
            id=data.get("id", str(uuid.uuid4())),
            text=data.get("text", ""),
            normalized_text=data.get("normalized_text", ""),
            embedding=data.get("embedding"),
            provenance=data.get("provenance", []),
            confidence=data.get("confidence", 0.0),
            supporting_text=data.get("supporting_text", ""),
            created_at=datetime.fromisoformat(data["created_at"]) if "created_at" in data else datetime.now(),
            updated_at=datetime.fromisoformat(data["updated_at"]) if "updated_at" in data else datetime.now(),
        )


@dataclass
class Source:
    """
    An information source (article, paper, webpage, etc.)
    
    Sources are validated and scored for reliability.
    They link to claims via the evidence graph.
    """
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    url: str = ""
    domain: str = ""
    title: str = ""
    author: Optional[str] = None
    published_date: Optional[datetime] = None
    content_blob: str = ""                      # Path to stored raw content
    text_excerpt: str = ""                      # Cached first 2000 chars
    embedding: Optional[List[float]] = None     # Vector embedding
    reliability_score: float = 0.5              # 0-1 score from validation
    source_type: str = "web"                    # web, academic, technical
    metadata: Dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=datetime.now)
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "url": self.url,
            "domain": self.domain,
            "title": self.title,
            "author": self.author,
            "published_date": self.published_date.isoformat() if self.published_date else None,
            "content_blob": self.content_blob,
            "text_excerpt": self.text_excerpt,
            "embedding": self.embedding,
            "reliability_score": self.reliability_score,
            "source_type": self.source_type,
            "metadata": self.metadata,
            "created_at": self.created_at.isoformat(),
        }
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Source":
        return cls(
            id=data.get("id", str(uuid.uuid4())),
            url=data.get("url", ""),
            domain=data.get("domain", ""),
            title=data.get("title", ""),
            author=data.get("author"),
            published_date=datetime.fromisoformat(data["published_date"]) if data.get("published_date") else None,
            content_blob=data.get("content_blob", ""),
            text_excerpt=data.get("text_excerpt", ""),
            embedding=data.get("embedding"),
            reliability_score=data.get("reliability_score", 0.5),
            source_type=data.get("source_type", "web"),
            metadata=data.get("metadata", {}),
            created_at=datetime.fromisoformat(data["created_at"]) if "created_at" in data else datetime.now(),
        )



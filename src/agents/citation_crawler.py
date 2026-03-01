"""
Deep Research Agent V2 - Citation Crawler Agent

Implements recursive citation following for multi-hop research.
Follows citation chains to find primary sources and deeper evidence.
"""

import re
import json
from typing import Dict, Any, List, Optional, Set
from dataclasses import dataclass, field
from datetime import datetime

from .base import BaseAgent, AgentResult

# V2 imports
try:
    from ..memory.models import Source
    from ..evidence.graph import EvidenceGraph
    HAS_V2 = True
except ImportError:
    HAS_V2 = False
    Source = None
    EvidenceGraph = None


@dataclass
class Citation:
    """Represents a citation extracted from a source."""
    title: str
    authors: List[str] = field(default_factory=list)
    year: Optional[int] = None
    doi: Optional[str] = None
    url: Optional[str] = None
    source_type: str = "unknown"  # paper, website, book, etc.
    relevance_score: float = 0.5
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "title": self.title,
            "authors": self.authors,
            "year": self.year,
            "doi": self.doi,
            "url": self.url,
            "source_type": self.source_type,
            "relevance_score": self.relevance_score,
        }


class CitationCrawlerAgent(BaseAgent):
    """
    Citation Crawler Agent - Recursive citation following.
    
    Capabilities:
    1. Extract citations from source content
    2. Prioritize citations by relevance
    3. Recursively follow citation chains
    4. Track citation depth and prevent cycles
    """
    
    # Limits to prevent runaway crawling
    MAX_DEPTH = 3
    MAX_CITATIONS_PER_SOURCE = 10
    MAX_TOTAL_CITATIONS = 50
    
    def __init__(
        self,
        llm_client,
        context_manager=None,
        search_agent=None,
        memory_api=None,
        evidence_graph: Optional["EvidenceGraph"] = None,
    ):
        """
        Initialize the Citation Crawler.
        
        Args:
            llm_client: LLM client for extraction
            context_manager: Optional context manager
            search_agent: WebSearchAgent for fetching cited sources
            memory_api: V2 memory API for storage
            evidence_graph: V2 evidence graph for linking
        """
        super().__init__(llm_client)
        self.context_manager = context_manager
        self.search_agent = search_agent
        self.memory_api = memory_api
        self.evidence_graph = evidence_graph
        
        # Track visited URLs to prevent cycles
        self._visited_urls: Set[str] = set()
        self._citation_count = 0
    
    def extract_citations(
        self,
        content: str,
        source_url: Optional[str] = None,
    ) -> List[Citation]:
        """
        Extract citations from source content using LLM.
        
        Args:
            content: Text content to extract from
            source_url: Source URL for context
            
        Returns:
            List of Citation objects
        """
        # Truncate content if too long
        max_content = 6000
        if len(content) > max_content:
            content = content[:max_content] + "..."
        
        prompt = f"""Extract citations and references from this content.

CONTENT:
{content}

For each citation, extract:
- title: Full title of the cited work
- authors: List of author names
- year: Publication year (if available)
- doi: DOI if present
- url: Direct URL if present
- source_type: paper | website | book | report | other
- relevance_score: 0-1 (how central to the argument)

Return JSON array, max {self.MAX_CITATIONS_PER_SOURCE} most relevant citations:
[{{"title": "...", "authors": [...], "year": 2024, ...}}]

JSON citations:"""

        try:
            response = self.llm.chat(
                messages=[
                    {"role": "system", "content": "You extract academic citations from text. Return valid JSON only."},
                    {"role": "user", "content": prompt}
                ],
                model="fast",
                temperature=0.1,
                max_tokens=2000,
            )
            
            content = response.content.strip()
            
            # Extract JSON
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0].strip()
            elif "```" in content:
                content = content.split("```")[1].split("```")[0].strip()
            
            citations_data = json.loads(content)
            
            # Convert to Citation objects
            citations = []
            for c in citations_data[:self.MAX_CITATIONS_PER_SOURCE]:
                if isinstance(c, dict) and c.get("title"):
                    citations.append(Citation(
                        title=c.get("title", ""),
                        authors=c.get("authors", []),
                        year=c.get("year"),
                        doi=c.get("doi"),
                        url=c.get("url"),
                        source_type=c.get("source_type", "unknown"),
                        relevance_score=min(1.0, max(0.0, float(c.get("relevance_score", 0.5)))),
                    ))
            
            return citations
            
        except Exception as e:
            self.log(f"Citation extraction failed: {e}")
            return []
    
    def extract_citations_heuristic(self, content: str) -> List[Citation]:
        """
        Fallback heuristic citation extraction using patterns.
        
        Args:
            content: Text to extract from
            
        Returns:
            List of Citation objects
        """
        citations = []
        
        # Pattern for DOI
        doi_pattern = r'10\.\d{4,}/[^\s]+'
        dois = re.findall(doi_pattern, content)
        for doi in dois[:5]:
            citations.append(Citation(
                title=f"DOI: {doi}",
                doi=doi,
                url=f"https://doi.org/{doi}",
                source_type="paper",
                relevance_score=0.7,
            ))
        
        # Pattern for arXiv
        arxiv_pattern = r'arXiv:(\d{4}\.\d{4,})'
        arxiv_ids = re.findall(arxiv_pattern, content)
        for arxiv_id in arxiv_ids[:5]:
            citations.append(Citation(
                title=f"arXiv: {arxiv_id}",
                url=f"https://arxiv.org/abs/{arxiv_id}",
                source_type="paper",
                relevance_score=0.8,
            ))
        
        # Pattern for URLs in references section
        url_pattern = r'https?://[^\s<>"\']+(?:\.pdf|/abstract|/paper)'
        urls = re.findall(url_pattern, content)
        for url in urls[:5]:
            if url not in [c.url for c in citations]:
                citations.append(Citation(
                    title=url.split("/")[-1][:50],
                    url=url,
                    source_type="paper" if ".pdf" in url else "website",
                    relevance_score=0.5,
                ))
        
        return citations[:self.MAX_CITATIONS_PER_SOURCE]
    

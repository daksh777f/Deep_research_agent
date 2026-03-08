"""
Deep Research Agent V2 - Evidence Graph

Manages the claim-source evidence graph for transparent reasoning.
Provides graph operations for tracing claim provenance and calculating confidence.
"""

from typing import List, Dict, Any, Optional, Tuple
from dataclasses import dataclass
from collections import defaultdict

from ..memory.models import Claim, Source, EvidenceEdge, EvidenceRelation


@dataclass
class ClaimEvidence:
    """Aggregated evidence for a claim."""
    claim: Claim
    supporting_sources: List[Tuple[Source, float]]  # (source, strength)
    contradicting_sources: List[Tuple[Source, float]]
    mentioning_sources: List[Tuple[Source, float]]
    aggregated_confidence: float
    support_count: int
    contradict_count: int


class EvidenceGraph:
    """
    Evidence Graph for claim-source relationships.
    
    Provides:
    - Claim provenance tracking
    - Contradiction detection
    - Confidence aggregation
    - Support scoring
    """
    
    def __init__(self, storage=None):
        """
        Initialize evidence graph.
        
        Args:
            storage: Optional storage backend for persistence
        """
        self.storage = storage
        
        # In-memory graph for fast operations
        self._claims: Dict[str, Claim] = {}
        self._sources: Dict[str, Source] = {}
        self._edges: Dict[str, EvidenceEdge] = {}
        
        # Adjacency lists for efficient traversal
        self._claim_to_edges: Dict[str, List[str]] = defaultdict(list)
        self._source_to_edges: Dict[str, List[str]] = defaultdict(list)
    
    def add_claim(self, claim: Claim) -> str:
        """Add a claim to the graph."""
        self._claims[claim.id] = claim
        return claim.id
    
    def add_source(self, source: Source) -> str:
        """Add a source to the graph."""
        self._sources[source.id] = source
        return source.id
    
    def add_evidence(
        self,
        claim_id: str,
        source_id: str,
        relation: EvidenceRelation,
        strength: float = 0.5,
        validation_notes: str = "",
    ) -> str:
        """
        Add an evidence edge between a claim and source.
        
        Args:
            claim_id: ID of the claim
            source_id: ID of the source
            relation: Type of relationship
            strength: Strength of the relationship (0-1)
            validation_notes: Notes from validation
            
        Returns:
            Edge ID
        """
        edge = EvidenceEdge(
            from_claim_id=claim_id,
            to_source_id=source_id,
            relation=relation,
            strength=strength,
            validation_notes=validation_notes,
        )
        
        self._edges[edge.id] = edge
        self._claim_to_edges[claim_id].append(edge.id)
        self._source_to_edges[source_id].append(edge.id)
        
        # Update claim's provenance
        if claim_id in self._claims:
            if source_id not in self._claims[claim_id].provenance:
                self._claims[claim_id].provenance.append(source_id)
        
        return edge.id
    
    def get_claim(self, claim_id: str) -> Optional[Claim]:
        """Get a claim by ID."""
        return self._claims.get(claim_id)
    
    def get_source(self, source_id: str) -> Optional[Source]:
        """Get a source by ID."""
        return self._sources.get(source_id)
    
    def get_edges_for_claim(self, claim_id: str) -> List[EvidenceEdge]:
        """Get all edges for a claim."""
        edge_ids = self._claim_to_edges.get(claim_id, [])
        return [self._edges[eid] for eid in edge_ids if eid in self._edges]
    
    def get_edges_for_source(self, source_id: str) -> List[EvidenceEdge]:
        """Get all edges pointing to a source."""
        edge_ids = self._source_to_edges.get(source_id, [])
        return [self._edges[eid] for eid in edge_ids if eid in self._edges]
    
    def top_supporting_sources(
        self,
        claim_id: str,
        n: int = 5,
    ) -> List[Tuple[Source, float]]:
        """
        Get top sources that support a claim.
        
        Args:
            claim_id: Claim to get support for
            n: Maximum sources to return
            
        Returns:
            List of (Source, strength) tuples, sorted by strength
        """
        edges = self.get_edges_for_claim(claim_id)
        supporting = [
            (self._sources.get(e.to_source_id), e.strength)
            for e in edges
            if e.relation == EvidenceRelation.SUPPORTS and e.to_source_id in self._sources
        ]
        
        # Sort by strength * source reliability
        supporting.sort(
            key=lambda x: x[1] * (x[0].reliability_score if x[0] else 0),
            reverse=True
        )
        
        return [(s, strength) for s, strength in supporting[:n] if s]
    
    def contradictory_claims(
        self,
        claim_id: str,
    ) -> List[Tuple[Claim, Source, float]]:
        """
        Find claims that contradict the given claim.
        
        Looks for sources that:
        1. Support this claim but contradict another
        2. Contradict this claim
        
        Returns:
            List of (contradicting_claim, source, strength) tuples
        """
        # Get sources that contradict this claim
        contradicting_sources = []
        for edge in self.get_edges_for_claim(claim_id):
            if edge.relation == EvidenceRelation.CONTRADICTS:
                source = self._sources.get(edge.to_source_id)
                if source:
                    contradicting_sources.append((source, edge.strength))
        
        # Find other claims supported by contradicting sources
        contradictions = []
        for source, strength in contradicting_sources:
            for edge in self.get_edges_for_source(source.id):
                if edge.from_claim_id != claim_id and edge.relation == EvidenceRelation.SUPPORTS:
                    other_claim = self._claims.get(edge.from_claim_id)
                    if other_claim:
                        contradictions.append((other_claim, source, strength))
        
        return contradictions
    
    def claim_support_score(self, claim_id: str) -> float:
        """
        Calculate aggregated support score for a claim.
        
        Based on:
        - Number and strength of supporting edges
        - Reliability scores of supporting sources
        - Penalty for contradicting edges
        
        Returns:
            Score between 0 and 1
        """
        edges = self.get_edges_for_claim(claim_id)
        
        if not edges:
            return 0.0
        
        support_score = 0.0
        contradict_score = 0.0
        
        for edge in edges:
            source = self._sources.get(edge.to_source_id)
            reliability = source.reliability_score if source else 0.5
            weighted_strength = edge.strength * reliability
            
            if edge.relation == EvidenceRelation.SUPPORTS:
                support_score += weighted_strength
            elif edge.relation == EvidenceRelation.CONTRADICTS:
                contradict_score += weighted_strength
            # MENTIONS edges don't affect score
        
        # Normalize
        total = support_score + contradict_score
        if total == 0:
            return 0.5  # Neutral if only mentions
        
        confidence = support_score / total
        
        # Update claim's confidence
        if claim_id in self._claims:
            self._claims[claim_id].confidence = confidence
        
        return confidence
    
    def get_claim_evidence(self, claim_id: str) -> Optional[ClaimEvidence]:
        """
        Get comprehensive evidence summary for a claim.
        
        Args:
            claim_id: Claim ID
            
        Returns:
            ClaimEvidence object with all evidence details
        """
        claim = self._claims.get(claim_id)
        if not claim:
            return None
        
        edges = self.get_edges_for_claim(claim_id)

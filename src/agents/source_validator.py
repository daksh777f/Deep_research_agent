"""
Source Validation Agent (SVA) for Deep Research Agent

The proprietary component that validates source reliability and claim truthfulness.
Uses LLM-as-a-Judge framework with specialized prompting for veracity assessment.
"""

import os
import json
from typing import Dict, Any, List, Optional
from .base import BaseAgent, AgentResult

# V2 imports for evidence graph integration
try:
    from ..memory.models import EvidenceRelation
    from ..evidence.graph import EvidenceGraph
    HAS_V2 = True
except ImportError:
    HAS_V2 = False
    EvidenceGraph = None
    EvidenceRelation = None


def load_prompt(prompt_name: str) -> str:
    """Load a system prompt from the prompts directory."""
    prompts_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'prompts')
    prompt_path = os.path.join(prompts_dir, f'{prompt_name}.txt')
    try:
        with open(prompt_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"System prompt not found: {prompt_path}"


class SourceValidatorAgent(BaseAgent):
    """
    Source Validation Agent - Fact-checking and source reliability scoring.
    
    Evaluates findings for:
    1. Source credibility (domain authority, publication type)
    2. Content veracity (claim accuracy, citation support)
    3. Recency and relevance
    4. Cross-source consistency
    
    V2 Enhancement: Integrates with evidence graph for claim-source linking.
    """
    
    def __init__(
        self,
        llm_client,
        context_manager=None,
        evidence_graph: Optional["EvidenceGraph"] = None,
        memory_api=None,
    ):
        """
        Initialize the Source Validator Agent.
        
        Args:
            llm_client: LLM client for validation
            context_manager: Optional context manager
            evidence_graph: V2 evidence graph for claim-source linking
            memory_api: V2 memory API for claim storage
        """
        super().__init__(llm_client, context_manager)
        self._system_prompt = None
        self.evidence_graph = evidence_graph
        self.memory_api = memory_api
    
    @property
    def system_prompt(self) -> str:
        """Lazy load system prompt from file."""
        if self._system_prompt is None:
            self._system_prompt = load_prompt('source_validator_prompt')
        return self._system_prompt

    def get_system_prompt(self) -> str:
        return self.system_prompt
    
    def validate_finding(self, finding: Dict[str, Any]) -> Dict[str, Any]:
        """
        Validate a single finding for reliability.
        
        Args:
            finding: Finding dict with 'content', 'source', etc.
            
        Returns:
            Validation result with reliability score and notes
        """
        validation_prompt = f"""Validate the following research finding for reliability and truthfulness.

SOURCE: {finding.get('source', 'Unknown')}
TITLE: {finding.get('title', 'No title')}
CONTENT:
{finding.get('content', 'No content')[:3000]}

Evaluate and respond with JSON:
{{
    "reliability_score": 0.0-1.0,
    "source_credibility": "high|medium|low",
    "content_veracity": "verified|likely|uncertain|questionable",
    "key_claims": ["claim 1", "claim 2"],
    "supported_claims": ["claims with evidence"],
    "unsupported_claims": ["claims without evidence"],
    "potential_issues": ["bias", "outdated", "etc."],
    "validation_notes": "Brief justification for the score",
    "recommendation": "accept|verify|reject"
}}
"""
        
        response = self.llm.chat(
            messages=[{"role": "user", "content": validation_prompt}],
            model="fast",
            system_prompt=self.system_prompt,
            temperature=0.2,  # Low temperature for consistent scoring
        )
        
        try:
            content = response.content
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0]
            elif "```" in content:
                content = content.split("```")[1].split("```")[0]
            
            result = json.loads(content.strip())
            
            # V2: Add evidence edges to graph if available
            if self.evidence_graph and HAS_V2:
                self._add_evidence_edges(finding, result)
            
            return result
            
        except json.JSONDecodeError:
            # Fallback scoring based on source heuristics
            return self._heuristic_validation(finding)
    
    def _add_evidence_edges(
        self,
        finding: Dict[str, Any],
        validation: Dict[str, Any],
    ) -> None:
        """
        V2: Store validated claims in the finding dict.

        Edge creation is deferred to ``_build_evidence_graph`` in main.py
        because graph-level source IDs are not assigned until after the
        executor finishes.  We only record key_claims / unsupported_claims
        inside the finding so the downstream builder can create proper
        Claim nodes with UUID identifiers and link them via URL matching.
        """
        # Nothing to do — the validation dict (which already contains
        # key_claims and unsupported_claims) is merged into the finding
        # by validate_batch.  _build_evidence_graph reads it from there.
        pass
    
    def _heuristic_validation(self, finding: Dict[str, Any]) -> Dict[str, Any]:
        """Fallback heuristic-based validation when LLM parsing fails."""
        source = finding.get("source", "").lower()
        
        # Simple heuristics based on domain
        score = 0.5  # Default medium score
        
        if any(d in source for d in [".gov", ".edu", "arxiv.org"]):
            score = 0.85
            credibility = "high"
        elif any(d in source for d in ["wikipedia", "reuters", "bbc", "nature.com"]):
            score = 0.75
            credibility = "high"
        elif any(d in source for d in ["medium.com", "blog", "reddit"]):
            score = 0.55
            credibility = "medium"
        elif "mock" in source or "example.com" in source:
            score = 0.3
            credibility = "low"
        else:
            credibility = "medium"

        # Extract basic key_claims from title and content so the evidence
        # graph always has claim-source edges even when LLM parsing fails.

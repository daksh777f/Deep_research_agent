"""
Reflexion Agent for Deep Research Agent

Implements the self-correction loop based on the Reflexion methodology.
Critiques intermediate outputs and generates improved queries when gaps are detected.
"""

import os
import json
from typing import Dict, Any, List, Optional
from .base import BaseAgent, AgentResult

# V2 imports for planner integration
try:
    from ..planning.task_graph import TaskGraph
    HAS_V2 = True
except ImportError:
    HAS_V2 = False
    TaskGraph = None


def load_prompt(prompt_name: str) -> str:
    """Load a system prompt from the prompts directory."""
    prompts_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'prompts')
    prompt_path = os.path.join(prompts_dir, f'{prompt_name}.txt')
    try:
        with open(prompt_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"System prompt not found: {prompt_path}"


class ReflexionAgent(BaseAgent):
    """
    Reflexion Agent - Self-correction and iterative improvement.
    
    Implements the generate → critique → refine loop:
    1. Evaluate intermediate research outputs
    2. Identify knowledge gaps and quality issues
    3. Generate refined queries for follow-up research
    4. Determine when research is complete
    
    V2 Enhancement: Triggers replanning in hierarchical planner when significant gaps detected.
    """
    
    MAX_ITERATIONS = 3  # Maximum reflexion loops to prevent infinite loops
    
    # Thresholds for replanning decision — raised to prevent aggressive loops
    REPLAN_GAP_THRESHOLD = 4      # Number of gaps that trigger replan
    REPLAN_QUALITY_THRESHOLD = 0.3  # Quality below this triggers replan
    
    def __init__(
        self,
        llm_client,
        context_manager=None,
        planner=None,
    ):
        """
        Initialize the Reflexion Agent.
        
        Args:
            llm_client: LLM client for critique
            context_manager: Optional context manager
            planner: V2 HierarchicalPlannerAgent for dynamic replanning
        """
        super().__init__(llm_client, context_manager)
        self._system_prompt = None
        self.planner = planner
    
    @property
    def system_prompt(self) -> str:
        """Lazy load system prompt from file."""
        if self._system_prompt is None:
            self._system_prompt = load_prompt('reflexion_prompt')
        return self._system_prompt

    def get_system_prompt(self) -> str:
        return self.system_prompt
    
    def critique(
        self,
        query: str,
        findings: List[Dict[str, Any]],
        current_iteration: int = 0,
    ) -> Dict[str, Any]:
        """
        Critique the current research findings.
        
        Args:
            query: Original research query
            findings: Current validated findings
            current_iteration: Current iteration number
            
        Returns:
            Critique result with recommendations
        """
        # Prepare findings summary
        findings_summary = ""
        for i, f in enumerate(findings[:10], 1):
            score = f.get("reliability_score", "N/A")
            score_str = f"{score:.2f}" if isinstance(score, float) else str(score)
            findings_summary += f"""
{i}. Source: {f.get('source', 'Unknown')}
   Reliability: {score_str}
   Content: {str(f.get('content', ''))[:300]}...
"""
        
        critique_prompt = f"""Critically evaluate the following research findings for the query.

ORIGINAL QUERY: {query}

CURRENT ITERATION: {current_iteration} of {self.MAX_ITERATIONS}

FINDINGS:
{findings_summary}

Evaluate and respond with JSON:
{{
    "overall_quality": 0.0-1.0,
    "query_coverage": "complete|partial|minimal|none",
    "source_diversity": "high|medium|low",
    "key_strengths": ["strength 1", "strength 2"],
    "knowledge_gaps": ["gap 1", "gap 2"],
    "quality_issues": ["issue 1", "issue 2"],
    "continue_research": true/false,
    "stop_reason": "reason if stopping",
    "refined_queries": ["new query if continuing"],
    "priority_focus": "what to focus on next",
    "confidence_in_answer": 0.0-1.0
}}

Be practical: if we're at iteration {current_iteration}, consider whether additional research would significantly improve the answer.
"""
        
        response = self.llm.chat(
            messages=[{"role": "user", "content": critique_prompt}],
            system_prompt=self.SYSTEM_PROMPT,
            temperature=0.3,
        )
        
        try:
            content = response.content
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0]
            elif "```" in content:
                content = content.split("```")[1].split("```")[0]
            
            result = json.loads(content.strip())
            
            # Force stop if max iterations reached
            if current_iteration >= self.MAX_ITERATIONS:
                result["continue_research"] = False
                result["stop_reason"] = "Maximum iterations reached"
            
            # V2: Check if replanning is needed
            result["replan_required"] = self._should_replan(result, current_iteration)
            
            return result
            
        except json.JSONDecodeError:
            # Fallback: assume adequate if we have validated findings
            validated_count = len([f for f in findings if f.get("reliability_score", 0) >= 0.7])
            return {
                "overall_quality": 0.6 if validated_count > 2 else 0.3,
                "query_coverage": "partial",
                "continue_research": validated_count < 3 and current_iteration < self.MAX_ITERATIONS,
                "replan_required": validated_count < 2,  # V2: Replan if very few validated
                "knowledge_gaps": ["Unable to parse critique"],
                "refined_queries": [query],  # Retry original
            }
    
    def _should_replan(
        self,
        critique: Dict[str, Any],
        current_iteration: int,
    ) -> bool:
        """
        V2: Determine if the task graph needs restructuring.
        
        Triggers replanning when:
        - Multiple significant knowledge gaps exist
        - Quality is below threshold
        - Both gaps AND quality issues present
        
        Args:
            critique: The critique result
            current_iteration: Current iteration number
            
        Returns:
            True if replanning is recommended
        """
        # Don't replan on final iteration
        if current_iteration >= self.MAX_ITERATIONS - 1:
            return False
        
        # Don't replan on first iteration to avoid cascading cycles
        if current_iteration == 0:
            return False

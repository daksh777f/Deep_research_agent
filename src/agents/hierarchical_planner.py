"""
Deep Research Agent V2 - Hierarchical Planner Agent

Replaces flat query decomposition with dynamic task graph planning.
Generates a DAG of research tasks with dependencies, budgets, and model hints.
"""

import json
import os
from typing import Dict, Any, List, Optional

from .base import BaseAgent, AgentResult
from ..planning.task_graph import (
    TaskGraph, TaskNode, TaskType, TaskStatus, ModelTier, GoalCriteria
)


def load_prompt(prompt_name: str) -> str:
    """Load a system prompt from the prompts directory."""
    prompts_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "prompts")
    prompt_path = os.path.join(prompts_dir, prompt_name)
    if os.path.exists(prompt_path):
        with open(prompt_path, "r", encoding="utf-8") as f:
            return f.read()
    return ""


class HierarchicalPlannerAgent(BaseAgent):
    """
    Hierarchical Planner Agent - V2 Planning System
    
    Generates task graphs for research workflows:
    1. Decomposes query into high-level goals
    2. Expands goals into concrete task nodes
    3. Assigns dependencies, budgets, and model hints
    4. Supports dynamic replanning based on reflexion feedback
    """
    
    def __init__(self, llm_client, context_manager=None, memory_api=None):
        """
        Initialize the Hierarchical Planner.
        
        Args:
            llm_client: LLM client for planning
            context_manager: Optional context manager
            memory_api: Optional memory API for claim retrieval
        """
        super().__init__(llm_client)
        self.context_manager = context_manager
        self.memory_api = memory_api
        self._system_prompt = None
    
    @property
    def system_prompt(self) -> str:
        """Lazy load system prompt from file."""
        if self._system_prompt is None:
            self._system_prompt = load_prompt("hierarchical_planner_prompt.md")
        return self._system_prompt
    
    def get_system_prompt(self) -> str:
        return self.system_prompt
    
    def hierarchical_plan(
        self,
        query: str,
        preferences: Optional[Dict[str, Any]] = None,
        session_id: Optional[str] = None,
        previous_summary: Optional[str] = None,
        previous_messages: Optional[List[Dict[str, Any]]] = None,
    ) -> TaskGraph:
        """
        Generate a complete task graph for a research query.
        
        Args:
            query: Research query to plan
            preferences: Optional user preferences (depth, time_budget, etc.)
            session_id: Optional session ID for linking
            
        Returns:
            TaskGraph with all nodes and dependencies
        """
        prefs = preferences or {}
        
        # Create task graph
        graph = TaskGraph(session_id=session_id)
        
        mode = prefs.get("mode", "deep")
        quick_mode = mode == "quick"
        # Set goal criteria from preferences
        graph.set_goal_criteria(
            coverage=prefs.get("coverage", 0.95 if quick_mode else 0.97),
            confidence=prefs.get("confidence", 0.7 if quick_mode else 0.85),
            max_iterations=prefs.get("max_iterations", 1 if quick_mode else 3),
            min_sources=prefs.get("min_sources", 3 if quick_mode else 6),
            max_time_ms=prefs.get("max_time_ms", 60000 if quick_mode else 300000),
        )
        
        # Track task IDs for dependency linking
        search_task_ids = []
        extract_task_ids = []
        goals = self._decompose_into_goals(query, prefs, previous_summary, previous_messages)
        if quick_mode:
            goals = goals[:1]  # single layer focus
        else:
            goals = goals[:3]  # cap at 3 goals to prevent task explosion
        
        # For continuation queries (have prior context), reduce to 2 goals
        if previous_summary or previous_messages:
            goals = goals[:2]
        
        # Expand each goal into tasks
        top_k = prefs.get("top_k", 5)
        for goal in goals:
            tasks = self._expand_goal(goal, query, top_k=top_k)
            
            for task in tasks:
                graph.add_node(task)
                
                if task.is_search_task():
                    search_task_ids.append(task.id)
        
        # Safety cap: if too many search tasks were generated, prune
        MAX_SEARCH_TASKS = 6 if not quick_mode else 2
        if len(search_task_ids) > MAX_SEARCH_TASKS:
            # Remove excess search nodes from graph
            excess = search_task_ids[MAX_SEARCH_TASKS:]
            for eid in excess:
                graph.remove_node(eid)
            search_task_ids = search_task_ids[:MAX_SEARCH_TASKS]
        
        # Add claim extraction tasks (depend on searches)
        extract_task = TaskNode(
            type=TaskType.EXTRACT_CLAIMS,
            input={"query": query},
            dependencies=search_task_ids,
            budget_ms=5000,
            model_hint=ModelTier.SMALL,
            preferred_agent="ClaimExtractorAgent",
        )
        graph.add_node(extract_task)
        extract_task_ids.append(extract_task.id)
        
        # Add validation task (depends on extraction) unless in quick mode
        merge_dependencies = [extract_task.id]
        if not quick_mode:
            validate_task = TaskNode(
                type=TaskType.VALIDATE_CLAIMS,
                input={"query": query},
                dependencies=extract_task_ids,
                budget_ms=8000,
                model_hint=ModelTier.MEDIUM,
                preferred_agent="SourceValidatorAgent",
            )
            graph.add_node(validate_task)
            merge_dependencies = [validate_task.id]
        
        # Add evidence merge task
        merge_task = TaskNode(
            type=TaskType.MERGE_EVIDENCE,
            input={},
            dependencies=merge_dependencies,
            budget_ms=3000,
            model_hint=ModelTier.SMALL,
        ) 
        graph.add_node(merge_task)
        
        # Add reflexion task unless in quick mode
        synth_dependencies = [merge_task.id]
        if not quick_mode:
            reflexion_task = TaskNode(
                type=TaskType.REFLEXION,
                input={"query": query},
                dependencies=[merge_task.id],
                budget_ms=5000,
                model_hint=ModelTier.MEDIUM,
                preferred_agent="ReflexionAgent",
            )
            graph.add_node(reflexion_task)
            synth_dependencies = [reflexion_task.id]
        
        # Add synthesis task
        synth_task = TaskNode(
            type=TaskType.SYNTHESIZE_REPORT,
            input={"query": query},
            dependencies=synth_dependencies,
            budget_ms=12000 if quick_mode else 15000,
            model_hint=ModelTier.MEDIUM if quick_mode else ModelTier.LARGE,
            preferred_agent="MasterPlannerAgent",
        )
        graph.add_node(synth_task)
        
        return graph
    
    def _decompose_into_goals(
        self,
        query: str,
        preferences: Dict[str, Any],
        previous_summary: Optional[str] = None,
        previous_messages: Optional[List[Dict[str, Any]]] = None,
    ) -> List[Dict[str, Any]]:
        """
        Decompose query into high-level research goals.
        
        Uses LLM to identify distinct aspects of the query
        that need investigation.
        
        Returns:
            List of goal dictionaries with focus areas
        """
        output_mode = preferences.get("output_mode", preferences.get("mode", "deep"))
        context_snippets = []
        if previous_summary:
                context_snippets.append(f"Previous summary:\n{previous_summary}")
        if previous_messages:
                last_msgs = previous_messages[-5:]
                msgs_text = "\n".join(
                        f"- {m.get('role','user')}: {m.get('content','')}" for m in last_msgs
                )
                context_snippets.append(f"Recent conversation:\n{msgs_text}")
        prior_context = "\n\n".join(context_snippets) if context_snippets else "None"

        mode_instruction = ""
        if output_mode == "technical":
            mode_instruction = (
                "\nIMPORTANT: The user wants a TECHNICAL breakdown. "
                "Prioritize 'technical' and 'academic' search types. "
                "Focus on implementation details, architectures, code, APIs, benchmarks, and specifications. "
                "Every goal should include 'technical' in its search_types."
            )

        prompt = f"""Analyze this research query and identify 2-3 distinct research goals.

Query: {query}

Prior context (use to refine and avoid restarting work):
{prior_context}
{mode_instruction}

For each goal, specify:
1. focus: The specific aspect to investigate
2. search_types: Which search types are most relevant (web, academic, technical)
3. priority: 1 (critical) to 3 (supplementary)
4. depth: shallow (quick overview) or deep (thorough investigation)

Return as JSON array. Example:
[
    {{"focus": "Current state of technology", "search_types": ["web", "technical"], "priority": 1, "depth": "deep"}},
    {{"focus": "Academic research and papers", "search_types": ["academic"], "priority": 1, "depth": "deep"}},
    {{"focus": "Industry adoption patterns", "search_types": ["web"], "priority": 2, "depth": "shallow"}}
]

JSON goals:"""

        try:
            response = self.llm.chat(
                messages=[{"role": "user", "content": prompt}],
                model="fast",
                temperature=0.3,
                max_tokens=1000,
            )
            
            # Parse response
            content = response.content.strip()
            
            # Extract JSON from response
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0].strip()
            elif "```" in content:
                content = content.split("```")[1].split("```")[0].strip()
            
            goals = json.loads(content)
            return goals
            
        except Exception as e:
            self.log(f"Goal decomposition failed: {e}, using defaults")
            
            # Default goals — vary by output mode
            if output_mode == "technical":
                return [
                    {
                        "focus": "Technical implementation and architecture",
                        "search_types": ["technical", "web"],
                        "priority": 1,
                        "depth": "deep"
                    },
                    {
                        "focus": "Specifications, APIs, and benchmarks",
                        "search_types": ["technical", "academic"],
                        "priority": 1,
                        "depth": "deep"
                    },
                ]
            return [
                {
                    "focus": "Current information and developments",
                    "search_types": ["web"],
                    "priority": 1,
                    "depth": "deep"
                },
                {
                    "focus": "Academic and research perspective",
                    "search_types": ["academic"],
                    "priority": 1,
                    "depth": "deep"
                },
                {
                    "focus": "Technical implementations",
                    "search_types": ["technical"],
                    "priority": 2,
                    "depth": "shallow"
                }
            ]
    
    def _expand_goal(
        self,

"""
Deep Research Agent V2 - Task Executor

Parallel execution engine for task graphs.
Routes tasks to appropriate agents and manages execution flow.
"""

import asyncio
import time
from datetime import datetime
from typing import Dict, Any, List, Optional, Type
from concurrent.futures import ThreadPoolExecutor

from .task_graph import TaskGraph, TaskNode, TaskType, TaskStatus, ModelTier


# ── Phase tracking for transparency layer ─────────────────────────────────────

TASK_TYPE_TO_PHASE = {
    TaskType.SEARCH_WEB: "evidence_collection",
    TaskType.SEARCH_ACADEMIC: "evidence_collection",
    TaskType.SEARCH_TECHNICAL: "evidence_collection",
    TaskType.SEARCH_CITATION: "evidence_collection",
    TaskType.EXTRACT_CLAIMS: "claim_extraction",
    TaskType.VALIDATE_CLAIMS: "validation",
    TaskType.SYNTHESIZE_REPORT: "synthesis",
    TaskType.REFLEXION: "reflexion",
    TaskType.MERGE_EVIDENCE: "validation",
    TaskType.DEDUPLICATE_CLAIMS: "claim_extraction",
}

PHASE_DEFINITIONS = [
    ("planning", "Planning"),
    ("evidence_collection", "Evidence Collection"),
    ("claim_extraction", "Claim Extraction"),
    ("validation", "Validation"),
    ("synthesis", "Synthesis"),
    ("reflexion", "Reflexion"),
]


def init_phases():
    """Create the initial phases list with pending status."""
    return [
        {
            "id": pid,
            "label": label,
            "status": "pending",
            "started_at": None,
            "completed_at": None,
            "elapsed_seconds": None,
            "log_entries": [],
        }
        for pid, label in PHASE_DEFINITIONS
    ]


def _sync_phases_from_graph(phases, task_graph):
    """Update phase statuses based on task graph node states.

    Uses actual node-level timestamps from TaskGraph.mark_running /
    mark_complete so elapsed time is accurate even when an entire phase
    completes within a single execution batch.
    """
    phase_nodes: dict = {}
    for node in task_graph.nodes.values():
        pid = TASK_TYPE_TO_PHASE.get(node.type)
        if pid:
            phase_nodes.setdefault(pid, []).append(node)

    for phase in phases:
        pid = phase["id"]
        if pid in ("planning", "synthesis"):
            continue  # Managed by the orchestrator
        nodes = phase_nodes.get(pid, [])
        if not nodes:
            continue

        any_running = any(n.status == TaskStatus.RUNNING for n in nodes)
        all_done = all(
            n.status in (TaskStatus.COMPLETE, TaskStatus.FAILED) for n in nodes
        )
        any_started = any(
            n.status in (TaskStatus.RUNNING, TaskStatus.COMPLETE, TaskStatus.FAILED)
            for n in nodes
        )

        if phase["status"] == "pending" and (any_running or any_started):
            phase["status"] = "active"
            # Use the earliest node start time for accurate timing
            node_starts = [
                n.started_at.timestamp()
                for n in nodes
                if n.started_at is not None
            ]
            phase["started_at"] = min(node_starts) if node_starts else time.time()

        if phase["status"] == "active" and all_done:
            phase["status"] = "complete"
            # Use the latest node completion time
            node_ends = [
                n.completed_at.timestamp()
                for n in nodes
                if n.completed_at is not None
            ]
            phase["completed_at"] = max(node_ends) if node_ends else time.time()
            if phase["started_at"]:
                phase["elapsed_seconds"] = round(
                    phase["completed_at"] - phase["started_at"], 1
                )
            completed = sum(1 for n in nodes if n.status == TaskStatus.COMPLETE)
            failed = sum(1 for n in nodes if n.status == TaskStatus.FAILED)
            # Build descriptive log entries
            task_types = set(n.type.value for n in nodes)
            phase["log_entries"].append(
                f"Ran {len(nodes)} tasks: {', '.join(sorted(task_types))}"
            )
            phase["log_entries"].append(
                f"Completed {completed}, failed {failed} "
                f"in {phase['elapsed_seconds']}s"
            )


class TaskExecutor:
    """
    Parallel Task Executor for research workflows.
    
    Responsibilities:
    - Execute ready tasks in parallel
    - Route tasks to appropriate agents
    - Track execution status and results
    - Handle failures and retries
    """
    
    def __init__(
        self,
        agents: Dict[str, Any],
        memory_api: Optional[Any] = None,
        max_workers: int = 5,
    ):
        """
        Initialize the task executor.
        
        Args:
            agents: Dictionary of agent_name -> agent_instance
            memory_api: Optional MemoryAPI for result storage
            max_workers: Maximum parallel tasks
        """
        self.agents = agents
        self.memory_api = memory_api
        self.max_workers = max_workers
        self.executor = ThreadPoolExecutor(max_workers=max_workers)
        
        # Task type to agent mapping
        self.type_to_agent = {
            TaskType.SEARCH_WEB: "WebSearchAgent",
            TaskType.SEARCH_ACADEMIC: "AcademicSearchAgent",
            TaskType.SEARCH_TECHNICAL: "TechnicalSearchAgent",
            TaskType.SEARCH_CITATION: "CitationCrawlerAgent",
            TaskType.EXTRACT_CLAIMS: "ClaimExtractorAgent",
            TaskType.VALIDATE_CLAIMS: "SourceValidatorAgent",
            TaskType.REFLEXION: "ReflexionAgent",
            TaskType.SYNTHESIZE_REPORT: "MasterPlannerAgent",
            TaskType.MERGE_EVIDENCE: None,  # Internal operation
            TaskType.DEDUPLICATE_CLAIMS: None,
        }
    
    def route_to_agent(self, node: TaskNode) -> Optional[Any]:
        """
        Select appropriate agent for a task.
        
        Args:
            node: Task node to execute
            
        Returns:
            Agent instance or None
        """
        # Use preferred agent if specified and available
        if node.preferred_agent and node.preferred_agent in self.agents:
            return self.agents[node.preferred_agent]
        
        # Fall back to type-based routing
        agent_name = self.type_to_agent.get(node.type)
        if agent_name and agent_name in self.agents:
            return self.agents[agent_name]
        
        return None
    
    def _execute_node_sync(
        self,
        node: TaskNode,
        context: Dict[str, Any],
    ) -> Any:
        """
        Execute a single node synchronously.
        
        Args:
            node: Task node to execute
            context: Execution context with accumulated results
            
        Returns:
            Task result
        """
        agent = self.route_to_agent(node)
        
        if not agent:
            # Handle internal operations without agents
            if node.type == TaskType.MERGE_EVIDENCE:
                return self._merge_evidence(node, context)
            elif node.type == TaskType.DEDUPLICATE_CLAIMS:
                return self._deduplicate_claims(node, context)
            else:
                raise ValueError(f"No agent available for task type: {node.type}")
        
        # Prepare input data from node input and dependency results
        input_data = dict(node.input)
        
        # Add results from dependencies
        for dep_id in node.dependencies:
            dep_result = context.get("results", {}).get(dep_id)
            if dep_result:
                input_data[f"dep_{dep_id}"] = dep_result
        
        # Add accumulated findings for validation/synthesis
        if node.type in [TaskType.VALIDATE_CLAIMS, TaskType.EXTRACT_CLAIMS]:
            input_data["sources"] = context.get("sources", [])
            input_data["findings"] = context.get("findings", [])
        
        if node.type in [TaskType.REFLEXION, TaskType.SYNTHESIZE_REPORT]:
            input_data["findings"] = (
                context.get("validated_findings", [])
                or context.get("findings", [])
            )
            input_data["claims"] = context.get("claims", [])

        if "mode" in context:
            input_data["mode"] = context.get("mode")
        
        # Execute agent
        result = agent.execute(input_data)
        
        return result
    
    # Per-task timeout in seconds, keyed by TaskType
    TASK_TIMEOUTS = {
        TaskType.SEARCH_WEB: 45,
        TaskType.SEARCH_ACADEMIC: 45,
        TaskType.SEARCH_TECHNICAL: 45,
        TaskType.SEARCH_CITATION: 45,
        TaskType.EXTRACT_CLAIMS: 120,  # Deep mode processes up to 20 sources
        TaskType.VALIDATE_CLAIMS: 90,
        TaskType.MERGE_EVIDENCE: 10,
        TaskType.DEDUPLICATE_CLAIMS: 10,
        TaskType.REFLEXION: 45,
        TaskType.SYNTHESIZE_REPORT: 90,
        TaskType.SYNTHESIZE_SECTION: 60,
        TaskType.REPLAN: 30,
    }

    async def execute_node(
        self,
        node: TaskNode,
        task_graph: TaskGraph,
        context: Dict[str, Any],
    ) -> Any:
        """
        Execute a node asynchronously with per-task timeout.

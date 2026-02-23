"""
Deep Research Agent V2 - Main Orchestrator

The V2 orchestrator integrates:
- Hierarchical planning with task graphs
- Memory persistence via Firebase Firestore + Qdrant
- Evidence graph for claim traceability
- Parallel task execution

This replaces the original DeepResearchOrchestrator with enhanced capabilities.
"""

import asyncio
import json
import time
from datetime import datetime
from dataclasses import dataclass, field
from typing import Dict, Any, List, Optional
from dotenv import load_dotenv

# Core imports
from src.core.llm_client import LLMClient
from src.core.context_manager import ContextManager

# Agent imports
from src.agents.master_planner import MasterPlannerAgent
from src.agents.web_search import WebSearchAgent
from src.agents.source_validator import SourceValidatorAgent
from src.agents.reflexion import ReflexionAgent

# V2 imports
from src.agents.hierarchical_planner import HierarchicalPlannerAgent
from src.agents.claim_extractor import ClaimExtractorAgent
from src.planning.task_graph import TaskGraph, TaskType, TaskStatus
from src.planning.executor import TaskExecutor
from src.memory.models import Claim, Source, Session, EvidenceRelation
from src.memory.memory_api import MemoryAPI
from src.evidence.graph import EvidenceGraph
from src.planning.task_graph import TaskGraph

load_dotenv()


@dataclass
class ResearchResultV2:
    """Enhanced research result with claim provenance."""
    query: str
    report: str
    sources: List[Dict[str, Any]]
    claims: List[Dict[str, Any]]
    evidence_graph: Dict[str, Any]
    metadata: Dict[str, Any]
    iterations: int
    task_graph: Dict[str, Any]
    execution_stats: Dict[str, Any]
    created_at: str = field(default_factory=lambda: datetime.now().isoformat())


class DeepResearchOrchestratorV2:
    """
    V2 Orchestrator for the Deep Research Agent.
    
    Key improvements over V1:
    - Hierarchical task planning with dynamic replanning
    - Memory persistence via Firebase Firestore + Qdrant  
    - Evidence graph for claim-source relationships
    - Parallel task execution with budget management
    """
    
    def __init__(
        self,
        search_provider: str = "exa",
        max_iterations: int = 3,
        verbose: bool = True,
        use_memory: bool = True,
    ):
        """
        Initialize the V2 orchestrator.
        
        Args:
            search_provider: Search API to use (exa, tavily)
            max_iterations: Maximum reflexion iterations
            verbose: Enable verbose logging
            use_memory: Enable memory persistence
        """
        self.search_provider = search_provider
        self.max_iterations = max_iterations
        self.verbose = verbose
        
        # Initialize LLM client
        self.llm_client = LLMClient()
        
        # Initialize context manager
        self.context_manager = ContextManager()
        
        # Initialize memory API if enabled
        self.memory_api = None
        if use_memory:
            try:
                # Create embedding service for semantic memory (Qdrant)
                from src.core.embedding_service import EmbeddingService
                embedding_service = None
                try:
                    embedding_service = EmbeddingService()
                    if embedding_service.api_key:
                        if self.verbose:
                            print("✅ Embedding service initialized")
                    else:
                        embedding_service = None
                        if self.verbose:
                            print("⚠️ No embedding API key; semantic memory disabled")
                except Exception as emb_err:
                    if self.verbose:
                        print(f"⚠️ Embedding service init failed: {emb_err}")

                self.memory_api = MemoryAPI(embedding_service=embedding_service)
                if self.verbose:
                    print("✅ Memory API initialized successfully")
            except Exception as e:
                print(f"⚠️ Warning: Could not initialize Memory API: {e}")
                print("Continuing without memory persistence...")
                self.memory_api = None
        
        # Initialize evidence graph
        self.evidence_graph = EvidenceGraph()
        
        # Initialize agents
        self._init_agents()
        
        # Initialize task executor
        self.executor = TaskExecutor(
            agents=self.agents,
            memory_api=self.memory_api,
            max_workers=5,
        )
        
        # Session reference for live phase updates
        self._session_ref = None
    
    def _init_agents(self):
        """Initialize all agents."""
        # V1 agents (still used)
        self.master_planner = MasterPlannerAgent(
            self.llm_client, 
            context_manager=self.context_manager
        )
        self.web_search = WebSearchAgent(
            self.llm_client,
            context_manager=self.context_manager,
            search_provider=self.search_provider,
        )
        self.source_validator = SourceValidatorAgent(
            self.llm_client,
            context_manager=self.context_manager,
            evidence_graph=self.evidence_graph,  # V2: Pass evidence graph
            memory_api=self.memory_api,
        )
        
        # V2 agents
        self.hierarchical_planner = HierarchicalPlannerAgent(
            self.llm_client,
            context_manager=self.context_manager,
            memory_api=self.memory_api,
        )
        
        self.reflexion = ReflexionAgent(
            self.llm_client,
            context_manager=self.context_manager,
            planner=self.hierarchical_planner,  # V2: Pass planner for replanning
        )
        self.claim_extractor = ClaimExtractorAgent(
            self.llm_client,
            context_manager=self.context_manager,
            memory_api=self.memory_api,
        )
        
        # Agent registry for executor
        self.agents = {
            "MasterPlannerAgent": self.master_planner,
            "WebSearchAgent": self.web_search,
            "AcademicSearchAgent": self.web_search,  # Fallback to web search
            "TechnicalSearchAgent": self.web_search,  # Fallback to web search
            "SourceValidatorAgent": self.source_validator,
            "ReflexionAgent": self.reflexion,
            "HierarchicalPlannerAgent": self.hierarchical_planner,
            "ClaimExtractorAgent": self.claim_extractor,
        }
    
    def log(self, message: str):
        """Log message if verbose mode is enabled."""
        if self.verbose:
            print(f"[V2 Orchestrator] {message}")

    def _propagate_phases(self, phases):
        """Push phase data to the live session reference."""
        if self._session_ref is not None:
            self._session_ref["phases"] = [dict(p) for p in phases]

    def _compute_task_graph_stats(self, task_graph: TaskGraph) -> Dict[str, int]:
        """Compute total nodes and max dependency depth for a task graph."""
        total_nodes = len(task_graph.nodes)
        depth_cache: Dict[str, int] = {}

        def depth(node_id: str, visiting: Optional[set] = None) -> int:
            if node_id in depth_cache:
                return depth_cache[node_id]
            if visiting is None:
                visiting = set()
            if node_id in visiting:
                # Break cycles defensively
                return 1
            visiting.add(node_id)

            node = task_graph.nodes.get(node_id)
            if not node or not node.dependencies:
                depth_cache[node_id] = 1
                return 1

            dep_depths = [depth(dep_id, visiting) for dep_id in node.dependencies]
            max_depth = 1 + (max(dep_depths) if dep_depths else 0)
            depth_cache[node_id] = max_depth
            return max_depth

        max_depth = 0
        for node_id in task_graph.nodes:
            max_depth = max(max_depth, depth(node_id))

        return {"total_nodes": total_nodes, "max_depth": max_depth}
    
    async def research_async(
        self, 
        query: str, 
        preferences: Optional[Dict[str, Any]] = None,
        session_id: Optional[str] = None,
        previous_context: Optional[Dict[str, Any]] = None,
    ) -> ResearchResultV2:
        """
        Execute a full V2 research workflow asynchronously.
        
        Args:
            query: Research query
            preferences: Optional preferences (depth, time_budget, etc.)
            session_id: Optional session ID to allow external management
            
        Returns:
            ResearchResultV2 with complete results
        """
        prefs = preferences or {}
        mode = prefs.get("mode", "deep")
        quick_mode = mode == "quick"
        self.log(f"Starting V2 research: mode={mode} query={query}")

        start_time = time.time()
        usage_before = self.llm_client.get_usage_stats()

        # ── Global timeout per mode (seconds) ───────────────────────
        GLOBAL_TIMEOUTS = {"quick": 30, "deep": 180, "technical": 300}
        output_mode = prefs.get("output_mode", mode)
        global_timeout = GLOBAL_TIMEOUTS.get(output_mode, GLOBAL_TIMEOUTS.get(mode, 300))
        # For continuation queries (have prior context), halve the timeout
        if previous_context:
            global_timeout = min(global_timeout, 180)
        self.log(f"Global timeout: {global_timeout}s (output_mode={output_mode})")

        _orig_tiers = None
        # Configure time and retrieval defaults per mode
        if quick_mode:
            prefs.setdefault("max_time_ms", 25000)
            prefs.setdefault("max_iterations", 1)
            prefs.setdefault("min_sources", 3)
            prefs.setdefault("top_k", 3)
            prefs.setdefault("skip_validation", True)
            # Temporarily bias model tiers toward fast model
            fast_model = (
                self.llm_client.MODELS.get("fast")
                or self.llm_client.MODELS.get("default")
                or "gpt-oss-120b"
            )
            _orig_tiers = {k: list(v) for k, v in self.llm_client.MODEL_TIERS.items()}
            self.llm_client.MODEL_TIERS = {
                "small": [fast_model],
                "medium": [fast_model],
                "large": [fast_model],
            }
        else:
            prefs.setdefault("max_time_ms", 160000)   # 2:40 wall-clock (within 3min timeout)
            prefs.setdefault("max_iterations", 1)
            prefs.setdefault("min_sources", 5)
            prefs.setdefault("top_k", 5)
        
        try:
            # Wrap the entire pipeline in a global timeout
            result = await asyncio.wait_for(
                self._run_research_pipeline(
                    query=query,
                    prefs=prefs,
                    mode=mode,
                    quick_mode=quick_mode,
                    session_id=session_id,
                    previous_context=previous_context,
                    start_time=start_time,
                    usage_before=usage_before,
                ),
                timeout=global_timeout,
            )
            return result

        except asyncio.TimeoutError:
            elapsed = time.time() - start_time
            self.log(f"⚠️ Research timed out after {elapsed:.0f}s (limit: {global_timeout}s)")
            return self._error_result(
                query,
                f"Research timed out after {elapsed:.0f}s. Try 'quick' mode for faster results.",
            )
        except Exception as e:
            self.log(f"Research failed: {e}")
            return self._error_result(query, str(e))
        finally:
            if quick_mode and _orig_tiers is not None:
                # Restore original model tiers if we overrode them for quick mode
                self.llm_client.MODEL_TIERS = _orig_tiers

    async def _run_research_pipeline(
        self,
        query: str,
        prefs: Dict[str, Any],
        mode: str,
        quick_mode: bool,
        session_id: Optional[str],
        previous_context: Optional[Dict[str, Any]],
        start_time: float,
        usage_before: Dict[str, Any],
    ) -> ResearchResultV2:
        """Inner pipeline extracted for global timeout wrapping."""

        try:
            # Create session
            session = None
            if self.memory_api:
                session = await self.memory_api.create_session(
                    query=query,
                    user_id=prefs.get("user_id"),
                    session_id=session_id
                )
                self.log(f"Created session: {session.id}")

            # ── Recall past memories for context enrichment ─────────
            memory_context = ""
            if self.memory_api:
                try:
                    past_memories = await self.memory_api.recall_memories(
                        query=query,
                        user_id=prefs.get("user_id"),
                        top_k=5,
                    )
                    if past_memories:
                        snippets = []
                        for mem in past_memories:
                            payload = mem.get("payload", {})
                            finding = payload.get("finding", {})
                            text = finding.get("content") or finding.get("text") or finding.get("snippet") or ""
                            if text:
                                snippets.append(text[:300])
                        if snippets:
                            memory_context = (
                                "Relevant findings from previous research sessions:\n"
                                + "\n".join(f"- {s}" for s in snippets[:5])
                            )
                            self.log(f"Recalled {len(snippets)} relevant memories")
                except Exception as mem_err:
                    self.log(f"Memory recall failed (non-fatal): {mem_err}")

            # ── Load user preferences ───────────────────────────────
            user_prefs_context = ""
            user_id = prefs.get("user_id")
            if user_id:
                try:
                    from src.storage import firestore_store as _store
                    from src.core.firebase_client import run_in_firestore_executor as _fs
                    user_preferences = await _fs(_store.get_user_preferences, user_id)
                    if user_preferences:
                        pref_lines = []
                        for k, v in user_preferences.items():
                            pref_lines.append(f"- {k}: {v}")
                        user_prefs_context = "User preferences:\n" + "\n".join(pref_lines)
                        self.log(f"Loaded user preferences: {list(user_preferences.keys())}")
                except Exception as pref_err:
                    self.log(f"User preferences load failed (non-fatal): {pref_err}")
            
            # Load prior context if provided
            prior_messages = []
            prior_graph = None
            prior_task_graph = None
            prior_summary = None

            if previous_context:
                prior_messages = previous_context.get("messages", [])
                prior_summary = previous_context.get("summary")
                evidence_graph_data = previous_context.get("evidence_graph")
                if isinstance(evidence_graph_data, dict):
                    try:
                        prior_graph = EvidenceGraph.from_dict(evidence_graph_data)
                        self.evidence_graph = prior_graph
                    except Exception as e:
                        self.log(f"Failed to load prior evidence graph: {e}")
                task_graph_data = previous_context.get("task_graph")
                if isinstance(task_graph_data, dict):
                    try:
                        prior_task_graph = TaskGraph.from_dict(task_graph_data)
                    except Exception as e:
                        self.log(f"Failed to load prior task graph: {e}")

            # Initialize phases for transparency layer
            from src.planning.executor import init_phases
            phases = init_phases()

            # Planning phase
            phases[0]["status"] = "active"
            phases[0]["started_at"] = time.time()
            self._propagate_phases(phases)

            # Generate task graph using hierarchical planner, optionally conditioned on prior context
            self.log("Generating task graph...")
            # Build enriched query with memory + user prefs for planning
            planning_query = query
            if memory_context or user_prefs_context:
                planning_query = query + "\n\n" + "\n".join(
                    part for part in [memory_context, user_prefs_context] if part
                )
            task_graph = prior_task_graph or self.hierarchical_planner.hierarchical_plan(
                query=planning_query,
                preferences=prefs,
                session_id=session.id if session else None,
                previous_summary=prior_summary,
                previous_messages=prior_messages,
            )
            self.log(f"Task graph created with {len(task_graph.nodes)} nodes")

            # Complete planning phase
            phases[0]["status"] = "complete"
            phases[0]["completed_at"] = time.time()
            phases[0]["elapsed_seconds"] = round(phases[0]["completed_at"] - phases[0]["started_at"], 1)
            phases[0]["log_entries"].append(f"Created task graph with {len(task_graph.nodes)} nodes")
            self._propagate_phases(phases)
            
            # Execute task graph with prior context injected so follow-ups refine
            self.log("Executing task graph...")
            context = await self.executor.execute_graph(
                task_graph=task_graph,
                initial_context={
                    "query": query,
                    "session_id": session.id if session else None,
                    "mode": mode,
                    "previous_summary": prior_summary,
                    "previous_messages": prior_messages,
                    "previous_evidence_graph": previous_context.get("evidence_graph") if previous_context else None,
                    "phases": phases,
                },
                on_progress=lambda ctx: self._propagate_phases(ctx.get("phases", [])),

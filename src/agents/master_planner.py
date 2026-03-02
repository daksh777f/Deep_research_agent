"""
Master Planning Agent (MPA) for Deep Research Agent

The central nervous system of the DRA. Responsible for:
- Adaptive query decomposition
- Strategic delegation to Specialized Search Agents
- Synthesis of findings into coherent reports
- Context steering for long-horizon tasks
"""

import json
import os
from typing import Dict, Any, List, Optional, Tuple
from datetime import datetime
from .base import BaseAgent, AgentResult

# V2 imports for evidence graph integration
try:
    from ..evidence.graph import EvidenceGraph
    from ..memory.models import Claim
    HAS_V2 = True
except ImportError:
    HAS_V2 = False
    EvidenceGraph = None
    Claim = None


def load_prompt(prompt_name: str) -> str:
    """Load a system prompt from the prompts directory."""
    prompts_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'prompts')
    prompt_path = os.path.join(prompts_dir, f'{prompt_name}.txt')
    try:
        with open(prompt_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"System prompt not found: {prompt_path}"


# ---------------------------------------------------------------------------
# Output Control Layer — Synthesis Prompt Modifiers (Part 2)
# ---------------------------------------------------------------------------

_MODE_PROMPTS = {
    "quick": (
        "OUTPUT MODE: Quick Answer\n"
        "- Produce a concise 2–4 paragraph executive summary.\n"
        "- Lead with a one-sentence bottom-line answer.\n"
        "- Use bullet points for supporting evidence.\n"
        "- Skip deep methodology/limitations unless critical.\n"
        "- Aim for ≤800 words."
    ),
    "deep": (
        "OUTPUT MODE: Deep Research\n"
        "- Produce a thorough, multi-section report with H2/H3 headings.\n"
        "- Include detailed analysis, methodology, and data.\n"
        "- Discuss limitations, alternative viewpoints, and open questions.\n"
        "- Cite every claim with its source and reliability score.\n"
        "- No word limit — completeness over brevity."
    ),
    "technical": (
        "OUTPUT MODE: Technical Breakdown\n"
        "- Structure the report with numbered sections and subsections.\n"
        "- Include code snippets, architecture diagrams (Mermaid), or formulas where relevant.\n"
        "- Use precise technical terminology; avoid over-simplification.\n"
        "- Provide implementation notes, trade-off tables, and benchmarks if available.\n"
        "- Include a 'TL;DR' section at the top and a 'Next Steps' section at the bottom."
    ),
}

_AUDIENCE_HINTS = {
    "myself": "The reader is the researcher themselves — no need for extra background.",
    "team": "The reader is a technical team — use shared jargon but explain external concepts.",
    "executive": "The reader is a non-technical executive — lead with business impact; minimize jargon.",
    "client": "The reader is an external client — professional tone, clear structure, actionable takeaways.",
    "academic": "The reader is academic — use formal language, cite rigorously, and discuss methodology.",
}

_EXPERTISE_HINTS = {
    "beginner": "Assume the reader has little prior knowledge. Define specialised terms on first use.",
    "intermediate": "Assume the reader has reasonable domain familiarity. Brief inline definitions are sufficient.",
    "expert": "Assume deep domain expertise. Skip introductory explanations; focus on novel insights and nuance.",
}


def _get_synthesis_prompt_modifier(
    output_mode: str = "deep",
    audience: str = "myself",
    expertise_level: str = "intermediate",
) -> str:
    """Build the prompt modifier injected into the synthesis prompt."""
    parts = []
    parts.append(_MODE_PROMPTS.get(output_mode, _MODE_PROMPTS["deep"]))
    aud = _AUDIENCE_HINTS.get(audience, _AUDIENCE_HINTS["myself"])
    parts.append(f"AUDIENCE: {audience.capitalize()} — {aud}")
    exp = _EXPERTISE_HINTS.get(expertise_level, _EXPERTISE_HINTS["intermediate"])
    parts.append(f"EXPERTISE LEVEL: {expertise_level.capitalize()} — {exp}")
    return "\n\n".join(parts)


class MasterPlannerAgent(BaseAgent):
    """
    Master Planning Agent - Orchestrates the entire research process.
    
    Takes a user query and:
    1. Decomposes it into sub-queries for parallel execution
    2. Delegates to specialized search agents
    3. Synthesizes results into a final report
    4. Steers context based on reflexion feedback
    
    V2 Enhancement: Claim-based synthesis with evidence graph support.
    """
    
    def __init__(
        self,
        llm_client,
        context_manager=None,
        evidence_graph: Optional["EvidenceGraph"] = None,
    ):
        """
        Initialize the Master Planner Agent.
        
        Args:
            llm_client: LLM client for inference
            context_manager: Optional context manager
            evidence_graph: V2 evidence graph for claim provenance
        """
        super().__init__(llm_client, context_manager)
        self._system_prompt = None
        self.evidence_graph = evidence_graph
    
    @property
    def system_prompt(self) -> str:
        """Lazy load system prompt from file."""
        if self._system_prompt is None:
            self._system_prompt = load_prompt('master_planner_prompt')
        return self._system_prompt

    def get_system_prompt(self) -> str:
        return self.system_prompt
    
    def decompose_query(self, query: str) -> Dict[str, Any]:
        """
        Decompose a complex query into sub-queries for parallel search.
        
        Args:
            query: The main research query
            
        Returns:
            Dictionary with sub-queries and agent assignments
        """
        decomposition_prompt = f"""Decompose the following research query into sub-queries for parallel search.

QUERY: {query}

Respond with a JSON object in this exact format:
{{
    "main_query": "the original query",
    "research_type": "general|academic|technical|mixed",
    "sub_queries": [
        {{
            "query": "specific sub-query 1",
            "agent": "web_search|academic|technical",
            "priority": 1,
            "rationale": "why this sub-query is needed"
        }},
        ...
    ],
    "synthesis_strategy": "how to combine the results",
    "expected_output_format": "what the final answer should look like"
}}

Generate 3-5 sub-queries that together comprehensively answer the main query.
"""
        
        response = self.llm.chat(
            messages=[{"role": "user", "content": decomposition_prompt}],
            model="fast",
            system_prompt=self.system_prompt,
            temperature=0.3,  # Lower temperature for structured output
        )
        
        try:
            # Extract JSON from response
            content = response.content
            # Try to find JSON in the response
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0]
            elif "```" in content:
                content = content.split("```")[1].split("```")[0]
            
            result = json.loads(content.strip())
            
            # Store sub-queries in context if available
            if self.context and self.context.current_session_id:
                session = self.context.get_session()
                session.sub_queries = [sq["query"] for sq in result.get("sub_queries", [])]
            
            return result
            
        except json.JSONDecodeError as e:
            self.log(f"Failed to parse decomposition JSON: {e}")
            # Return a simple fallback structure
            return {
                "main_query": query,
                "research_type": "general",
                "sub_queries": [
                    {"query": query, "agent": "web_search", "priority": 1, "rationale": "Direct search"}
                ],
                "synthesis_strategy": "direct",
                "raw_response": response.content,
            }
    
    def synthesize_findings(
        self,
        query: str,
        findings: List[Dict[str, Any]],
        format_type: str = "markdown",
        output_mode: str = "deep",
        audience: str = "myself",
        expertise_level: str = "intermediate",
    ) -> str:
        """
        Synthesize findings from multiple agents into a coherent report.
        
        Args:
            query: The original research query
            findings: List of findings from search agents
            format_type: Output format (markdown, json, plain)
            output_mode: quick | deep | technical — controls report structure
            audience: Who the report is for
            expertise_level: beginner | intermediate | expert
            
        Returns:
            Synthesized report string
        """
        findings_text = ""
        total_length = 0
        MAX_CONTEXT = 30000 # Safe limit for context windowing (~8k tokens)

        for i, finding in enumerate(findings, 1):
            if total_length > MAX_CONTEXT:
                findings_text += f"\n... [{len(findings) - i + 1} more findings truncated due to length limit] ..."
                break
                
            score = finding.get("reliability_score", "N/A")
            score_str = f"{score:.2f}" if isinstance(score, float) else str(score)
            
            # Truncate individual content to balance coverage
            content = finding.get('content', 'No content')
            if len(content) > 2000:
                content = content[:2000] + "... [truncated]"
                
            entry = f"""
### Source {i}
- **Agent**: {finding.get('agent', 'Unknown')}
- **Source**: {finding.get('source', 'Unknown')}
- **Reliability**: {score_str}
- **Content**: {content}
"""
            findings_text += entry
            total_length += len(entry)
        
        synthesis_prompt = f"""Based on the following research findings, create a comprehensive synthesis that answers the original query.

ORIGINAL QUERY: {query}

FINDINGS:
{findings_text}

{_get_synthesis_prompt_modifier(output_mode, audience, expertise_level)}

CITATION RULES (MANDATORY):
- Use inline numeric citations like [1], [2], [3] etc. throughout the report.
- Each number corresponds to the Source number above (Source 1 → [1], Source 2 → [2], etc.).
- Every factual claim MUST have at least one citation.
- Group multiple citations when appropriate: [1][3] or [1, 3].
- At the end of the report, include a ## References section listing each source by number.

Create a well-structured {format_type} report that:
1. Directly answers the main query
2. Synthesizes information from multiple sources
3. Uses [N] inline citations for EVERY claim (N = Source number)
4. Highlights any gaps or limitations in the research
5. Provides a confidence assessment

Format the output as clean {format_type}.
STRICT OUTPUT RULES:
- Start DIRECTLY with the report title (e.g., # Title).
- Do NOT output "Here is the report" or "Alright, let's...".
- Do NOT output the research plan, JSON blocks, or sub-queries.
- Do NOT output the "Thought Process".
- Output ONLY the final report content.
- Ensure the report is COMPLETE and not truncated. Prioritize finishing the report over extreme detail if needed.
"""
        
        response = self.llm.chat(
            messages=[{"role": "user", "content": synthesis_prompt}],
            system_prompt=self.system_prompt,
            temperature=0.5,
            max_tokens=8192,
        )
        
        return self._normalize_citations(response.content)
    
    @staticmethod
    def _normalize_citations(text: str) -> str:
        """Normalize full-width bracket citations to ASCII brackets.

        LLMs (especially Cerebras) sometimes emit \u3010N\u3011 instead of [N].
        This converts ALL full-width bracket variants so the frontend regex
        can always match them.
        """
        import re
        # \u3010 = \u3010  \u3011 = \u3011  (full-width white brackets)
        # \uff3b = \uff3b  \uff3d = \uff3d  (full-width square brackets)
        text = re.sub(r'[\u3010\uff3b]\s*(\d+(?:\s*,\s*\d+)*)\s*[\u3011\uff3d]',
                      lambda m: '[' + m.group(1) + ']', text)
        return text

    # V2: Enhanced synthesis methods

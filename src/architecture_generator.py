"""
Architecture Generator – produces a 12-section production architecture
plan from research results using the LLM.

Endpoint contract (matches frontend expectations):
- POST /api/generate-architecture   → JSON architecture plan
- POST /api/generate-deployment-runbook → markdown runbook text
"""

import asyncio
import json
import logging
import re
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# ── Prompt templates ────────────────────────────────────────────────

_ARCHITECTURE_PROMPT = """\
You are a senior cloud architect. Given the research report and constraints below,
produce a **production-grade architecture plan** as a valid JSON object with exactly
these 12 top-level keys (no markdown fences, just raw JSON):

1. "executive_summary" — string, 3-5 sentence overview  
2. "system_diagram" — string, a Mermaid flowchart (```mermaid ... ```)  
3. "component_breakdown" — list of objects: {{"name","purpose","technology","scaling_notes"}}  
4. "technology_stack" — object mapping layer (frontend / backend / data / infra) to list of technologies  
5. "deployment_architecture" — object: {{"strategy","environments","ci_cd_pipeline","containerization"}}  
6. "scalability_strategy" — object: {{"horizontal","vertical","caching","cdn","database_sharding"}}  
7. "observability_plan" — object: {{"logging","metrics","tracing","alerting"}}  
8. "security_compliance" — object: {{"auth","encryption","network","compliance_frameworks"}}  
9. "cost_model" — object: {{"estimated_monthly_min","estimated_monthly_max","breakdown"}} (USD)  
10. "risk_mitigation" — list of objects: {{"risk","severity","mitigation","owner"}}  
11. "future_evolution" — list of strings describing the roadmap  
12. "metadata" — object: {{"generated_for","confidence","constraints_hash"}}  

### System
Name: {system_name}
Description: {system_description}

### Research findings (excerpt)
{recommended_solution}

### Constraints
{constraints_json}

### Tradeoffs
{tradeoffs}

Respond ONLY with the JSON object (no markdown code fences).
"""

_RUNBOOK_PROMPT = """\
You are a DevOps engineer. Given the architecture plan below, generate a
**deployment runbook** in Markdown for deploying to **{target_cloud}**.

Include:
- Prerequisites & tooling
- Step-by-step deployment instructions (numbered)
- Environment variable configuration
- Health-check validation
- Rollback procedure
- Monitoring setup

Architecture plan (JSON):
{architecture_json}

Respond ONLY with the Markdown document.
"""


class ArchitectureGenerator:
    """
    Generates architecture plans and deployment runbooks via LLM.
    """

    def __init__(self, llm_client=None):
        self.llm = llm_client

    async def generate_architecture(
        self,
        system_name: str,
        system_description: str,
        recommended_solution: str,
        constraints: Optional[Dict[str, Any]] = None,
        tradeoffs: Optional[List[str]] = None,
        confidence_score: float = 0.85,
    ) -> Dict[str, Any]:
        """Generate a 12-section architecture plan."""
        constraints = constraints or {}
        tradeoffs = tradeoffs or []

        prompt = _ARCHITECTURE_PROMPT.format(
            system_name=system_name,
            system_description=system_description,
            recommended_solution=(recommended_solution or "")[:4000],
            constraints_json=json.dumps(constraints, indent=2),
            tradeoffs="\n".join(f"- {t}" for t in tradeoffs) or "None specified",
        )

        try:
            resp = await asyncio.to_thread(
                self.llm.generate, prompt, task_type="synthesize"
            )
            raw = resp.content.strip()
            # Strip markdown code fences if present
            raw = re.sub(r"^```(?:json)?\s*", "", raw)
            raw = re.sub(r"\s*```$", "", raw)

            plan = json.loads(raw)
            # Ensure metadata
            plan.setdefault("metadata", {})
            plan["metadata"]["generated_for"] = system_name
            plan["metadata"]["confidence"] = confidence_score
            return plan
        except json.JSONDecodeError:
            logger.warning("Architecture LLM output was not valid JSON, wrapping as text")
            return self._fallback_architecture(
                system_name, system_description, constraints, raw if 'raw' in dir() else ""
            )
        except Exception as e:
            logger.error("Architecture generation failed: %s", e)
            return self._fallback_architecture(
                system_name, system_description, constraints, str(e)
            )

    async def generate_runbook(
        self,
        architecture: Dict[str, Any],
        target_cloud: str = "AWS",
    ) -> str:
        """Generate a deployment runbook in Markdown."""
        prompt = _RUNBOOK_PROMPT.format(
            target_cloud=target_cloud,
            architecture_json=json.dumps(architecture, indent=2)[:6000],
        )

        try:
            resp = await asyncio.to_thread(
                self.llm.generate, prompt, task_type="synthesize"
            )
            return resp.content.strip()
        except Exception as e:
            logger.error("Runbook generation failed: %s", e)
            return f"# Deployment Runbook ({target_cloud})\n\nGeneration failed: {e}"

    # ── Fallback ────────────────────────────────────────────────────

    @staticmethod
    def _fallback_architecture(
        system_name: str,
        description: str,
        constraints: Dict,
        raw_text: str = "",
    ) -> Dict[str, Any]:
        """Return a minimal valid architecture dict when LLM fails."""
        return {
            "executive_summary": f"Architecture plan for {system_name}: {description[:200]}",
            "system_diagram": "```mermaid\nflowchart TD\n  Client-->API-->Database\n```",
            "component_breakdown": [
                {"name": "API Server", "purpose": "Handle requests", "technology": "FastAPI", "scaling_notes": "Horizontal"},
                {"name": "Database", "purpose": "Persist data", "technology": "PostgreSQL", "scaling_notes": "Read replicas"},
            ],
            "technology_stack": {
                "frontend": ["Next.js", "React"],
                "backend": ["Python", "FastAPI"],
                "data": ["PostgreSQL", "Redis"],
                "infra": ["Docker", "Kubernetes"],
            },
            "deployment_architecture": {
                "strategy": "Blue-green deployment",
                "environments": ["dev", "staging", "production"],
                "ci_cd_pipeline": "GitHub Actions",
                "containerization": "Docker + Kubernetes",
            },
            "scalability_strategy": {
                "horizontal": "Auto-scaling groups",
                "vertical": "Instance right-sizing",
                "caching": "Redis / CDN",
                "cdn": "CloudFront / Cloudflare",
                "database_sharding": "Read replicas first, shard if needed",
            },
            "observability_plan": {
                "logging": "Structured JSON logs",
                "metrics": "Prometheus + Grafana",
                "tracing": "OpenTelemetry",
                "alerting": "PagerDuty / Slack",
            },
            "security_compliance": {
                "auth": "OAuth2 / JWT",
                "encryption": "TLS 1.3, AES-256 at rest",
                "network": "VPC, security groups, WAF",
                "compliance_frameworks": constraints.get("compliance_requirements", ["SOC2"]),
            },
            "cost_model": {
                "estimated_monthly_min": constraints.get("budget_monthly_min", 500),
                "estimated_monthly_max": constraints.get("budget_monthly_max", 5000),
                "breakdown": {"compute": "40%", "storage": "20%", "networking": "15%", "monitoring": "10%", "other": "15%"},
            },
            "risk_mitigation": [
                {"risk": "Single point of failure", "severity": "high", "mitigation": "Multi-AZ deployment", "owner": "Infra"},
                {"risk": "Data loss", "severity": "high", "mitigation": "Automated backups + replication", "owner": "Data"},
            ],
            "future_evolution": [
                "Microservices migration if monolith grows",
                "Multi-region for global latency",
                "ML pipeline for intelligent caching",
            ],
            "metadata": {
                "generated_for": system_name,
                "confidence": 0.7,
                "note": "Fallback architecture — LLM generation incomplete",
                "raw_llm_output": raw_text[:500] if raw_text else "",
            },
        }

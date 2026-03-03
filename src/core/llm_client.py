"""
Cerebras-First LLM Client for Deep Research Agent

Provides a unified interface for LLM inference.
Primary provider: Cerebras (gpt-oss-120b).
Fallback providers: Google Gemini, OpenRouter, Together AI.
Supports multiple models with automatic fallback and token tracking.
"""

import asyncio
import importlib
import os
import threading
import time
import requests
from typing import Optional, List, Dict, Any, Generator, Tuple, cast
from dataclasses import dataclass, field
from dotenv import load_dotenv
import httpx

try:
    Together = importlib.import_module("together").Together
except Exception:
    Together = None



try:
    from openai import OpenAI
except ImportError:
    OpenAI = None

load_dotenv()


@dataclass
class LLMResponse:
    """Structured response from LLM"""
    content: str
    model: str
    usage: Dict[str, int]
    finish_reason: str = "stop"
    metadata: Dict[str, Any] = field(default_factory=dict)


class LLMClient:
    """
    Unified LLM Client (OpenRouter, Gemini, Together)
    
    Handles all LLM inference for the Deep Research Agent system.
    Supports streaming, token tracking, and model selection.
    
    V2 Enhancement: Adaptive model routing based on task type and budget.
    """
    
    # Available models — Cerebras gpt-oss-120b everywhere
    MODELS = {
        "default": "gpt-oss-120b",
        "fast": "gpt-oss-120b",
        "reasoning": "gpt-oss-120b",
    }
    
    # V2: Model tiers for adaptive routing (all gpt-oss-120b)
    MODEL_TIERS = {
        "small": ["gpt-oss-120b"],
        "medium": ["gpt-oss-120b"],
        "large": ["gpt-oss-120b"],
    }
    
    # V2: Task type to model tier mapping
    TASK_ROUTING = {
        "sanitize": "small",
        "search_format": "small",
        "citation_parse": "small",
        "validate": "medium",
        "decomposition": "medium",
        "claim_extract": "large",
        "reflexion": "large",
        "synthesize": "large",
        "final_report": "large",
    }

    # Cost per 1K tokens by provider (prompt, completion)
    COST_PER_1K = {
        "cerebras": {"prompt": 0.0, "completion": 0.0},          # free tier
        "google": {"prompt": 0.00025, "completion": 0.0005},     # Gemini Flash
        "openrouter": {"prompt": 0.001, "completion": 0.002},    # varies by model
        "together": {"prompt": 0.0008, "completion": 0.0008},    # Llama 70B
    }
    
    
    def __init__(self):
        """Initialize LLM client with auto-discovery of keys."""
        
        self.total_tokens_used = 0
        self.total_prompt_tokens = 0
        self.total_completion_tokens = 0
        self.total_cost = 0.0
        self.provider = None
        self.client = None
        self.model_usage_breakdown: Dict[str, int] = {}
        
        # V2: Budget tracking per task
        self._task_budgets: Dict[str, int] = {}  # task_id -> remaining_budget_ms
        self._task_token_usage: Dict[str, int] = {}  # task_id -> tokens used
        
        # Checking for model overrides from env vars
        default_model = os.getenv("DEFAULT_MODEL", "gpt-oss-120b")
        fast_model = os.getenv("FAST_MODEL", "gpt-oss-120b")
        
        self.MODELS["default"] = default_model
        self.MODELS["fast"] = fast_model
        self.MODELS["reasoning"] = default_model

        # 0. Try Cerebras FIRST (Primary provider)
        self.cerebras_key = os.getenv("CEREBRAS_API_KEY")
        if self.cerebras_key:
            self.provider = "cerebras"
            self.MODELS = {
                "default": "gpt-oss-120b",
                "fast": "gpt-oss-120b",
                "reasoning": "gpt-oss-120b",
            }
            self.MODEL_TIERS = {
                "small": ["gpt-oss-120b"],
                "medium": ["gpt-oss-120b"],
                "large": ["gpt-oss-120b"],
            }
            # Store fallback Gemini key for automatic failover on 429
            self.google_key = os.getenv("GEMINI_API_KEY") or ""
            print("Using Cerebras provider (gpt-oss-120b)")
            return

        # 1. Fallback: Try Google Gemini
        self.google_key = os.getenv("GEMINI_API_KEY")
        if self.google_key:
            self.provider = "google"
            self.MODELS["default"] = "gemini-2.0-flash"
            self.MODELS["fast"] = "gemini-2.0-flash"
            print(f"Using Google Gemini provider (fallback)")
            return

        # 1. Try OpenRouter (Secondary)
        self.openrouter_key = os.getenv("OPENROUTER_API_KEY")
        if self.openrouter_key:
            if OpenAI is None:
                raise ImportError("openai package required for OpenRouter. pip install openai")
            
            self.client = OpenAI(
                base_url="https://openrouter.ai/api/v1",
                api_key=self.openrouter_key,
                default_headers={
                    "HTTP-Referer": "https://github.com/daksh777f/Deep_Research_Agent",
                    "X-Title": "Deep Research Agent"
                }
            )
            self.provider = "openrouter"
            print(f"Using OpenRouter provider with default model: {default_model}")
            return
            
        # 2. Try Together
        self.together_key = os.getenv("TOGETHER_API_KEY")
        if self.together_key and Together:
            self.client = Together(api_key=self.together_key)
            self.provider = "together"
            # Update models for Together if not overridden by env vars with specific OpenRouter names
            if not os.getenv("DEFAULT_MODEL"):
                self.MODELS = {
                    "default": "meta-llama/Llama-3.1-70B-Instruct-Turbo",
                    "fast": "meta-llama/Llama-3.1-8B-Instruct-Turbo",
                    "reasoning": "meta-llama/Llama-3.1-70B-Instruct-Turbo",
                }
            print("Using Together provider")
            return
            
        raise ValueError("No valid API key found. Set GEMINI_API_KEY, OPENROUTER_API_KEY or TOGETHER_API_KEY.")
            
    def chat(
        self,
        messages: List[Dict[str, str]],
        model: str = "default",
        temperature: float = 0.7,
        max_tokens: int = 8192,
        system_prompt: Optional[str] = None,
    ) -> LLMResponse:
        """
        Send a chat completion request.
        """
        start_time = time.time()
        model_name = self.MODELS.get(model, model)
        complexity = self._complexity_from_messages(messages)
        
        if self.provider == "openrouter":
            resp = self._chat_openrouter(messages, model_name, temperature, max_tokens, system_prompt)
        elif self.provider == "together":
            resp = self._chat_together(messages, model_name, temperature, max_tokens, system_prompt)
        elif self.provider == "google":
            resp = self._chat_google(messages, model_name, temperature, max_tokens, system_prompt)
        elif self.provider == "cerebras":
            try:
                resp = self._chat_cerebras(messages, model_name, temperature, max_tokens, system_prompt)
            except Exception as e:
                error_msg = str(e)
                # Auto-fallback to Gemini on persistent 429 (rate limit)
                if "429" in error_msg and getattr(self, "google_key", "") and self.google_key not in ("", "..."):
                    print(f"[LLM] Cerebras rate-limited, falling back to Google Gemini")
                    resp = self._chat_google(messages, "gemini-2.0-flash", temperature, max_tokens, system_prompt)
                else:
                    raise
        else:
            raise ValueError(f"Unknown provider: {self.provider}")

        latency_ms = int((time.time() - start_time) * 1000)
        resp.metadata.update({
            "provider": self.provider,
            "model": model_name,
            "task_type": None,
            "complexity": complexity,
            "latency_ms": latency_ms,
        })
        print(f"[LLM] {resp.metadata}")
        return resp
    
    def _chat_openrouter(self, messages, model_name, temperature, max_tokens, system_prompt) -> LLMResponse:
        """Execute chat via OpenRouter."""
        if self.client is None:
            raise RuntimeError("OpenRouter client not initialized")
        if system_prompt:
            if messages and messages[0]["role"] != "system":
                messages = [{"role": "system", "content": system_prompt}] + messages
        
        try:
            response = self.client.chat.completions.create(
                model=model_name,
                messages=cast(Any, messages),
                temperature=temperature,
                max_tokens=max_tokens,
            )
            response = cast(Any, response)

            content = response.choices[0].message.content or ""
            usage_obj = getattr(response, "usage", None)
            usage = {
                "prompt_tokens": getattr(usage_obj, "prompt_tokens", 0),
                "completion_tokens": getattr(usage_obj, "completion_tokens", 0),
                "total_tokens": getattr(usage_obj, "total_tokens", 0),
            }
            self._record_usage(usage)
            
            return LLMResponse(
                content=content,
                model=model_name,
                usage=usage,
                finish_reason=response.choices[0].finish_reason
            )
        except Exception as e:
            raise Exception(f"OpenRouter API Error: {str(e)}")
    
    def _chat_together(self, messages, model_name, temperature, max_tokens, system_prompt) -> LLMResponse:
        """Execute chat via Together AI."""
        if self.client is None:
            raise RuntimeError("Together client not initialized")
        if system_prompt:
            if messages and messages[0]["role"] != "system":
                messages = [{"role": "system", "content": system_prompt}] + messages

        response = self.client.chat.completions.create(
            model=model_name,
            messages=cast(Any, messages),
            temperature=temperature,
            max_tokens=max_tokens,
        )
        response = cast(Any, response)

        usage_obj = getattr(response, "usage", None)
        usage = {
            "prompt_tokens": getattr(usage_obj, "prompt_tokens", 0),
            "completion_tokens": getattr(usage_obj, "completion_tokens", 0),
            "total_tokens": getattr(usage_obj, "total_tokens", 0),
        }
        self._record_usage(usage)
        
        return LLMResponse(
            content=response.choices[0].message.content or "",
            model=model_name,
            usage=usage,
            finish_reason=response.choices[0].finish_reason,
        )
    
    def _estimate_tokens(self, messages, system_prompt) -> int:
        """Rough token estimate: ~4 chars per token."""
        total_chars = len(system_prompt or "")
        for msg in messages:
            total_chars += len(msg.get("content", ""))
        return max(total_chars // 4, 100)
    
    def _chat_google(self, messages, model_name, temperature, max_tokens, system_prompt) -> LLMResponse:
        """Execute chat via Google Gemini REST API (fallback provider)."""
        # Resolve model aliases
        if model_name in ("default", "reasoning", "fast", "gpt-oss-120b"):
            model_name = "gemini-2.0-flash"

        # Ensure no double prefix
        msg_model = model_name.replace("models/", "")
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{msg_model}:generateContent?key={self.google_key}"
        
        # Prepare contents
        contents = []
        system_instruction_supported = "gemini" in model_name and "flash" in model_name
        
        effective_system_prompt = system_prompt if system_instruction_supported else None
        prepend_system_prompt = system_prompt if not system_instruction_supported else None

        for i, msg in enumerate(messages):
            role = "user" if msg["role"] == "user" else "model"
            if msg["role"] == "system":
                continue
                
            text = msg["content"]
            
            if prepend_system_prompt and role == "user":
                text = f"{prepend_system_prompt}\n\n{text}"
                prepend_system_prompt = None
                
            contents.append({
                "role": role,
                "parts": [{"text": text}]
            })
            
        if prepend_system_prompt:
             contents.insert(0, {
                 "role": "user",
                 "parts": [{"text": prepend_system_prompt}]
             })
            
        payload = {
            "contents": contents,
            "generationConfig": {
                "temperature": temperature,
                "maxOutputTokens": max_tokens,
            }
        }
        
        if effective_system_prompt:
             payload["systemInstruction"] = {
                 "parts": [{"text": effective_system_prompt}]
             }
        
        max_retries = 3
        for attempt in range(max_retries):
            try:
                response = requests.post(url, json=payload, headers={"Content-Type": "application/json"})
                
                # Handle rate limiting with automatic retry
                if response.status_code == 429:
                    if attempt < max_retries - 1:
                        # Parse retry delay from response or use exponential backoff
                        wait_time = (attempt + 1) * 15  # 15s, 30s, 45s
                        try:
                            err_data = response.json()
                            details = err_data.get("error", {}).get("details", [])
                            for d in details:
                                if d.get("@type", "").endswith("RetryInfo"):
                                    delay_str = d.get("retryDelay", "")
                                    if delay_str:
                                        wait_time = int(float(delay_str.replace("s", ""))) + 1
                        except Exception:
                            pass
                        print(f"[LLM] Rate limited (429). Retrying in {wait_time}s (attempt {attempt+1}/{max_retries})...")
                        time.sleep(wait_time)
                        continue
                
                response.raise_for_status()
                data = response.json()
                
                # Parse response
                try:
                    content = data["candidates"][0]["content"]["parts"][0]["text"]
                    finish_reason = data["candidates"][0].get("finishReason", "stop")
                    
                    usage_meta = data.get("usageMetadata", {})
                    usage = {
                        "prompt_tokens": usage_meta.get("promptTokenCount", 0),
                        "completion_tokens": usage_meta.get("candidatesTokenCount", 0),
                        "total_tokens": usage_meta.get("totalTokenCount", 0),
                    }
                    self._record_usage(usage)
                    
                    return LLMResponse(
                        content=content,
                        model=model_name,
                        usage=usage,
                        finish_reason=finish_reason,
                    )
                except (KeyError, IndexError) as e:
                    # Handle cases where safety blocks content
                    if "candidates" in data and not data["candidates"][0].get("content"):
                        finish_reason = data["candidates"][0].get("finishReason", "unknown")
                        raise Exception(f"Gemini blocked content. Reason: {finish_reason}")
                    raise Exception(f"Failed to parse Gemini response: {data}")
                    
            except Exception as e:
                error_msg = str(e)
                response_obj = getattr(e, "response", None)
                if response_obj is not None:
                    try:
                        error_msg += f". Details: {response_obj.text}"
                    except Exception:
                        pass
                if attempt < max_retries - 1 and "429" in error_msg:
                    time.sleep((attempt + 1) * 15)
                    continue
                raise Exception(f"Gemini API Error: {error_msg}")
        
        raise Exception("Gemini API Error: Max retries exceeded due to rate limiting")

    def _run_coroutine_sync(self, coro):
        """Run an async coroutine from sync code, even if an event loop is already running."""
        try:
            loop = asyncio.get_running_loop()
        except RuntimeError:
            return asyncio.run(coro)
        result: Dict[str, Any] = {}
        exception_holder: Dict[str, Any] = {}

        def runner():
            try:
                new_loop = asyncio.new_event_loop()
                asyncio.set_event_loop(new_loop)
                result["value"] = new_loop.run_until_complete(coro)
                new_loop.close()
            except Exception as e:
                exception_holder["exception"] = e

        thread = threading.Thread(target=runner)
        thread.start()
        thread.join()
        
        if "exception" in exception_holder:
            raise exception_holder["exception"]
        
        return result.get("value")

    def _chat_cerebras(self, messages, model_name, temperature, max_tokens, system_prompt) -> LLMResponse:
        """Execute chat via Cerebras using async HTTPX client with OpenAI-compatible schema.
        Includes retry with exponential backoff for 429/5xx errors."""
        if system_prompt and messages and messages[0].get("role") != "system":
            messages = [{"role": "system", "content": system_prompt}] + messages

        max_retries = 6
        last_error = None
        for attempt in range(max_retries):
            try:
                result = self._run_coroutine_sync(
                    self._cerebras_call(messages=messages, model=model_name, temperature=temperature, max_tokens=max_tokens)
                )
                if not result:
                    raise Exception("Empty response from Cerebras call")
                content, usage, finish_reason = result
                self._record_usage(usage)
                return LLMResponse(
                    content=content,
                    model=model_name,
                    usage=usage,
                    finish_reason=finish_reason,
                )
            except Exception as e:
                last_error = e
                error_msg = str(e)
                # Retry on rate limit (429) or server errors (5xx)
                if attempt < max_retries - 1 and ("429" in error_msg or "HTTP 5" in error_msg or "Request failed" in error_msg):
                    wait_time = min((attempt + 1) * 3, 15)  # 3s, 6s, 9s, 12s, 15s
                    print(f"[LLM] Cerebras error: {error_msg[:100]}. Retrying in {wait_time}s (attempt {attempt+1}/{max_retries})...")
                    time.sleep(wait_time)
                    continue
                raise Exception(f"Cerebras API Error: {e}")
        
        raise Exception(f"Cerebras API Error: Max retries exceeded. Last error: {last_error}")

    def _record_usage(self, usage: Dict[str, int]) -> None:
        """Track usage totals, per-provider breakdown, and cost."""
        prompt_tokens = usage.get("prompt_tokens", 0)
        completion_tokens = usage.get("completion_tokens", 0)
        total_tokens = usage.get("total_tokens", 0)

        self.total_tokens_used += total_tokens
        self.total_prompt_tokens += prompt_tokens
        self.total_completion_tokens += completion_tokens

        provider = self.provider or "unknown"
        self.model_usage_breakdown[provider] = self.model_usage_breakdown.get(provider, 0) + total_tokens

        # Compute cost from pricing table
        rates = self.COST_PER_1K.get(provider, {"prompt": 0.0, "completion": 0.0})
        cost = (prompt_tokens * rates["prompt"] + completion_tokens * rates["completion"]) / 1000.0
        self.total_cost += cost

    async def _cerebras_call(self, messages: List[Dict[str, Any]], model: str, temperature: float = 0.7, max_tokens: int = 8192) -> Tuple[str, Dict[str, int], str]:
        """Async Cerebras call using httpx; returns content, usage, finish_reason."""
        url = "https://api.cerebras.ai/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {self.cerebras_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
        }

        try:
            async with httpx.AsyncClient(timeout=120.0) as client:
                response = await client.post(url, headers=headers, json=payload)
                response.raise_for_status()
        except httpx.HTTPStatusError as e:
            status = e.response.status_code if e.response else "unknown"
            detail = e.response.text if e.response is not None else str(e)
            raise Exception(f"HTTP {status}: {detail}")
        except httpx.RequestError as e:
            raise Exception(f"Request failed: {e}")

        try:
            data = response.json()
        except ValueError:
            raise Exception("Invalid JSON response from Cerebras")

        try:
            choice = data.get("choices", [])[0]
            message = choice.get("message", {})
            content = message.get("content", "")
            finish_reason = choice.get("finish_reason", "stop")
        except Exception:
            raise Exception(f"Malformed Cerebras response: {data}")

        if not content:
            raise Exception("Cerebras response missing content")

        usage_meta = data.get("usage", {}) or {}
        usage = {
            "prompt_tokens": usage_meta.get("prompt_tokens", 0),
            "completion_tokens": usage_meta.get("completion_tokens", 0),
            "total_tokens": usage_meta.get(
                "total_tokens",
                usage_meta.get("prompt_tokens", 0) + usage_meta.get("completion_tokens", 0),
            ),
        }

        return content, usage, finish_reason
    
    # V2: Adaptive Model Routing
    def route_model(
        self,
        task_type: str,
        model_hint: str = "medium",
        budget_remaining_ms: Optional[int] = None,
    ) -> str:
        """
        V2: Select model based on task type, hint, and budget.
        
        Args:
            task_type: Type of task (sanitize, validate, synthesize, etc.)
            model_hint: Hint from task graph (small, medium, large)
            budget_remaining_ms: Optional time budget remaining
            
        Returns:
            Model name to use
        """
        # Determine tier from task type or hint
        tier = self.TASK_ROUTING.get(task_type, model_hint)
        
        # Downgrade if budget is tight
        if budget_remaining_ms is not None and budget_remaining_ms < 2000:
            if tier == "large":
                tier = "medium"
            elif tier == "medium":
                tier = "small"
        
        # Get available models for tier
        models = self.MODEL_TIERS.get(tier, self.MODEL_TIERS["medium"])
        
        # Return first available model in tier
        # Could be enhanced with load balancing, cost optimization
        return models[0] if models else self.MODELS["default"]

    def estimate_complexity(self, query: str) -> float:
        """Heuristic complexity estimate (0–1) for routing/analytics."""
        if not query:
            return 0.0

        length_score = min(len(query) / 600.0, 1.0)
        keywords = [
            "compare",
            "tradeoff",
            "architecture",
            "design",
            "benchmark",
            "multi-step",
        ]
        keyword_hits = sum(1 for k in keywords if k.lower() in query.lower())
        keyword_score = min(keyword_hits * 0.15, 0.6)

        score = min(max(length_score * 0.5 + keyword_score, 0.0), 1.0)
        return score
    
    def chat_with_routing(
        self,
        messages: List[Dict[str, str]],
        task_type: str = "default",
        model_hint: str = "medium",
        task_id: Optional[str] = None,
        budget_ms: Optional[int] = None,
        temperature: float = 0.7,
        max_tokens: int = 8192,
        system_prompt: Optional[str] = None,
    ) -> LLMResponse:
        """
        V2: Chat with automatic model routing.
        
        Args:
            messages: Chat messages
            task_type: Type of task for routing
            model_hint: Model tier hint
            task_id: Optional task ID for budget tracking
            budget_ms: Optional time budget
            temperature: LLM temperature
            max_tokens: Max tokens
            system_prompt: Optional system prompt
            
        Returns:
            LLMResponse
        """
        # Get remaining budget for task
        remaining = self._task_budgets.get(task_id, budget_ms) if task_id else budget_ms
        
        # Route to appropriate model
        model = self.route_model(task_type, model_hint, remaining)
        complexity = self._complexity_from_messages(messages)
        
        # Execute chat
        start_time = time.time()
        response = self.chat(
            messages=messages,
            model=model,
            temperature=temperature,
            max_tokens=max_tokens,
            system_prompt=system_prompt,
        )
        elapsed_ms = int((time.time() - start_time) * 1000)
        
        # Update budget tracking
        if task_id:
            current = self._task_budgets.get(task_id, budget_ms or 60000)
            self._task_budgets[task_id] = max(0, current - elapsed_ms)
            self._task_token_usage[task_id] = (
                self._task_token_usage.get(task_id, 0) + response.usage.get("total_tokens", 0)
            )

        response.metadata.update({
            "provider": self.provider,
            "model": model,
            "task_type": task_type,
            "complexity": complexity,
            "latency_ms": elapsed_ms,
        })
        print(f"[LLM] {response.metadata}")
        
        return response
    
    def set_task_budget(self, task_id: str, budget_ms: int) -> None:
        """V2: Set budget for a task."""
        self._task_budgets[task_id] = budget_ms
    
    def get_task_usage(self, task_id: str) -> Dict[str, Any]:
        """V2: Get usage stats for a task."""
        return {
            "budget_remaining_ms": self._task_budgets.get(task_id, 0),
            "tokens_used": self._task_token_usage.get(task_id, 0),
        }
    
    def chat_stream(
        self,
        messages: List[Dict[str, str]],
        model: str = "default",
        temperature: float = 0.7,
        max_tokens: int = 8192,
        system_prompt: Optional[str] = None,
    ) -> Generator[str, None, None]:
        """Stream a chat completion response."""
        model_name = self.MODELS.get(model, model)
        
        # Common OpenAI/OpenRouter/Together streaming logic
        if self.provider in ["openrouter", "together"]:
            if system_prompt:
                messages = [{"role": "system", "content": system_prompt}] + messages

            if self.client is None:
                raise RuntimeError("Chat client not initialized")
            response = self.client.chat.completions.create(
                model=model_name,
                messages=cast(Any, messages),
                temperature=temperature,
                max_tokens=max_tokens,
                stream=True,
            )
            response = cast(Any, response)

            for chunk in response:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content

        elif self.provider == "google":
            # Simple non-streaming fallback for now
            response = self._chat_google(messages, model_name, temperature, max_tokens, system_prompt)
            yield response.content

    def _complexity_from_messages(self, messages: List[Dict[str, Any]]) -> float:
        """Extract a user-visible text and estimate complexity."""
        if not messages:
            return 0.0
        # Prefer first user message; fallback to joined content
        user_msgs = [m.get("content", "") for m in messages if m.get("role") == "user"]
        text = user_msgs[0] if user_msgs else " ".join([m.get("content", "") for m in messages])
        return self.estimate_complexity(text)

    def generate(
        self,
        prompt: str,
        task_type: str = "default",
        temperature: float = 0.7,
        max_tokens: int = 8192,
        system_prompt: Optional[str] = None,
    ) -> LLMResponse:
        """Generate a response from a single prompt string.

        Convenience wrapper used by ClaimChallenger, ArchitectureGenerator,
        ComparisonSynthesizer, and ResearchExporter.
        """
        messages = [{"role": "user", "content": prompt}]
        return self.chat_with_routing(
            messages=messages,
            task_type=task_type,
            temperature=temperature,
            max_tokens=max_tokens,
            system_prompt=system_prompt,
        )

    def simple_query(
        self,
        query: str,
        model: str = "default",
        system_prompt: Optional[str] = None,
    ) -> str:
        """Simple single-turn query."""
        messages = [{"role": "user", "content": query}]
        response = self.chat(messages, model=model, system_prompt=system_prompt)
        return response.content
    
    def get_usage_stats(self) -> Dict[str, Any]:
        """Get current usage statistics."""
        return {
            "total_tokens": self.total_tokens_used,
            "prompt_tokens": self.total_prompt_tokens,
            "completion_tokens": self.total_completion_tokens,
            "estimated_cost_usd": self.total_cost,
            "model_usage_breakdown": dict(self.model_usage_breakdown),
        }


# Convenience function for quick queries
def query_llm(
    query: str,
    model: str = "default",
    system_prompt: Optional[str] = None,
) -> str:
    """Quick utility function for single LLM queries."""
    client = LLMClient()
    return client.simple_query(query, model=model, system_prompt=system_prompt)

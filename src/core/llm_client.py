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

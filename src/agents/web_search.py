"""
Web Search Agent (SSA) for Deep Research Agent

Specialized Search Agent for general web content using AI-native search APIs.
Supports Exa and Tavily for optimized agentic search workflows.
"""

import os
import json
import requests
from typing import Dict, Any, List, Optional
from .base import BaseAgent, AgentResult


def load_prompt(prompt_name: str) -> str:
    """Load a system prompt from the prompts directory."""
    prompts_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'prompts')
    prompt_path = os.path.join(prompts_dir, f'{prompt_name}.txt')
    try:
        with open(prompt_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"System prompt not found: {prompt_path}"


class WebSearchAgent(BaseAgent):
    """
    Web Search Specialized Search Agent.
    
    Retrieves up-to-date web information using AI-native search APIs.
    Prioritizes Exa or Tavily for high-quality, agentic-optimized results.
    """
    
    def __init__(self, llm_client, context_manager=None, search_provider: str = "exa"):
        """
        Initialize the Web Search Agent.
        
        Args:
            llm_client: LLMClient instance
            context_manager: Optional ContextManager
            search_provider: "exa" or "tavily"
        """
        super().__init__(llm_client, context_manager)
        self.search_provider = search_provider
        self._system_prompt = None
        
        # Load API keys
        self.exa_api_key = os.getenv("EXA_API_KEY")
        self.tavily_api_key = os.getenv("TAVILY_API_KEY")
    
    @property
    def system_prompt(self) -> str:
        """Lazy load system prompt from file."""
        if self._system_prompt is None:
            self._system_prompt = load_prompt('web_search_prompt')
        return self._system_prompt

    def get_system_prompt(self) -> str:
        return self.system_prompt
    
    def search_exa(self, query: str, num_results: int = 5) -> List[Dict[str, Any]]:
        """
        Search using Exa API.
        
        Args:
            query: Search query
            num_results: Number of results to return
            
        Returns:
            List of search results
        """
        if not self.exa_api_key:
            return self._mock_search(query, num_results)
        
        headers = {
            "Authorization": f"Bearer {self.exa_api_key}",
            "Content-Type": "application/json",
        }
        
        payload = {
            "query": query,
            "numResults": num_results,
            "type": "neural",  # Use neural search for better relevance
            "useAutoprompt": True,
            "contents": {
                "text": True,
            }
        }
        
        try:
            response = requests.post(
                "https://api.exa.ai/search",
                headers=headers,
                json=payload,
                timeout=30,
            )
            response.raise_for_status()
            
            data = response.json()
            results = []
            for item in data.get("results", []):
                results.append({
                    "title": item.get("title", ""),
                    "url": item.get("url", ""),
                    "content": item.get("text", "")[:2000],  # Limit content length
                    "score": item.get("score", 0),
                    "source": "exa",
                })
            
            return results
            
        except Exception as e:
            self.log(f"Exa search error: {e}")
            return self._mock_search(query, num_results)
    
    def search_tavily(self, query: str, num_results: int = 5) -> List[Dict[str, Any]]:
        """
        Search using Tavily API.
        
        Args:
            query: Search query
            num_results: Number of results to return
            
        Returns:
            List of search results
        """
        if not self.tavily_api_key:
            return self._mock_search(query, num_results)
        
        headers = {
            "Content-Type": "application/json",
        }
        
        payload = {
            "api_key": self.tavily_api_key,
            "query": query,
            "search_depth": "advanced",
            "max_results": num_results,
            "include_raw_content": True,
        }
        
        try:
            response = requests.post(
                "https://api.tavily.com/search",
                headers=headers,
                json=payload,
                timeout=30,
            )
            response.raise_for_status()
            
            data = response.json()
            results = []
            for item in data.get("results", []):
                results.append({
                    "title": item.get("title", ""),
                    "url": item.get("url", ""),
                    "content": item.get("content", "")[:2000],
                    "score": item.get("score", 0),
                    "source": "tavily",
                })
            
            return results
            
        except Exception as e:
            self.log(f"Tavily search error: {e}")
            return self._mock_search(query, num_results)
    
    def _mock_search(self, query: str, num_results: int = 5) -> List[Dict[str, Any]]:
        """
        Generate mock search results for development/testing.

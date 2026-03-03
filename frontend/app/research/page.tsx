"use client";
// Force revalidation

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUp,
  Search,
  Sparkles,
  Terminal,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Globe,
  PanelLeft,
  PanelLeftClose,
} from "lucide-react";
import { ClaimExpander } from "@/components/claim-expander";
import { SourceCard } from "@/components/source-card";
import { ResearchPlan } from "@/components/research-plan";
import { cn } from "@/lib/utils";
import Aurora from "@/components/Aurora";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArchitecturePlanDisplay } from "@/components/architecture-plan";
import { ResearchTimeline } from "@/components/research-timeline";
import { TrustPanel } from "@/components/trust-panel";
import { ContradictionSection } from "@/components/contradiction-section";
import { ModeSelector } from "@/components/mode-selector";
import { PersonalizationFields } from "@/components/personalization-fields";
import { MetricsPanel } from "@/components/metrics-panel";
import { ResearchGaps } from "@/components/research-gaps";
import { ContinuationButtons } from "@/components/continuation-buttons";
import { PhaseNavigator } from "@/components/phase-navigator";
import { DeveloperModeToggle } from "@/components/developer-mode-toggle";
import { MobilePanelsDrawer } from "@/components/mobile-panels-drawer";
import { ComparisonInput } from "@/components/comparison-input";
import { ComparisonTable } from "@/components/comparison-table";
import { ChallengeResultDisplay } from "@/components/challenge-result";
import { SourceGenome } from "@/components/source-genome";
import { EvidenceGraph } from "@/components/evidence-graph";
import { toast } from "sonner";
import type {
  Phase,
  TrustMetrics,
  Contradiction,
  OutputMode,
  AudienceType,
  ExpertiseLevel,
  ResearchMetrics,
  Claim,
  ResearchGaps as ResearchGapsType,
  Continuation,
  SessionSummary,
  ChallengeResult,
  ComparisonResult,
  SourceGenomeData,
} from "@/types/research";

interface LogEntry {
  timestamp: string;
  message: string;
}

interface ResearchResult {
  report: string;
  sources: { url: string; reliability: number; agent: string, title?: string, content?: string }[];
  metadata: {
    duration_seconds?: number;
    iterations?: number;
    validated_findings?: any;
    task_graph?: any;
    evidence_graph?: any;
    [key: string]: any;
  };
}

interface ArchitecturePlan {
  metadata: {
    system_name: string;
    dau: number;
    compliance_requirements: string[];
    confidence_score?: number;
  };
  executive_summary: string;
  system_diagram: {
    format: string;
    diagram: string;
  };
  components: Array<{
    name: string;
    purpose: string;
    technology: string;
    sla: Record<string, string>;
  }>;
  technology_stack: Array<{
    component: string;
    technology: string;
    reasoning: string;
    pros: string[];
    cons: string[];
    cost_monthly_usd: number;
  }>;
  cost_model: {
    total_monthly_cost: {
      total_usd: number;
      llm_cost_usd: number;
      infrastructure_cost_usd: number;
    };
  };
  risk_mitigation: Array<{
    risk: string;
    probability: string;
    impact: string;
    mitigation: string[];
    rto: string;
  }>;
  deployment_architecture: any;
  scalability_strategy: any;
  observability_plan: any;
  security_compliance: any;
  future_evolution: any;
}

interface HistoryItem {
  id: string;
  query: string;
  status: string;
  created_at: string;
  has_result: boolean;
}

function ResearchPageContent() {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [continueQuery, setContinueQuery] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [result, setResult] = useState<ResearchResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [outputMode, setOutputMode] = useState<OutputMode>("deep");
  const [audience, setAudience] = useState<AudienceType>("myself");
  const [expertiseLevel, setExpertiseLevel] = useState<ExpertiseLevel>("intermediate");
  const [isDeveloperMode, setIsDeveloperMode] = useState<boolean>(false);
  const [researchMetrics, setResearchMetrics] = useState<ResearchMetrics | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [architecture, setArchitecture] = useState<ArchitecturePlan | null>(null);
  const [architectureLoading, setArchitectureLoading] = useState(false);
  const [architectureError, setArchitectureError] = useState<string | null>(null);
  const [showArchitectureConstraints, setShowArchitectureConstraints] = useState(false);
  const [phases, setPhases] = useState<Phase[]>([]);
  const [trustMetrics, setTrustMetrics] = useState<TrustMetrics | null>(null);
  const [contradictions, setContradictions] = useState<Contradiction[]>([]);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [researchGaps, setResearchGaps] = useState<ResearchGapsType | null>(null);
  const [continuations, setContinuations] = useState<Continuation[]>([]);
  // Part 4: Comparison Mode
  const [comparisonMode, setComparisonMode] = useState(false);
  const [subjectA, setSubjectA] = useState("");
  const [subjectB, setSubjectB] = useState("");
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);
  // Track which options panel is expanded
  const [expandedPanel, setExpandedPanel] = useState<"personalize" | "compare" | null>(null);
  // Part 4: Claim Challenge
  const [challengeResult, setChallengeResult] = useState<ChallengeResult | null>(null);
  const [isChallenging, setIsChallenging] = useState(false);
  // Part 4: Source Genome
  const [genomeData, setGenomeData] = useState<SourceGenomeData | null>(null);
  const [genomeOpen, setGenomeOpen] = useState(false);
  // Part 4: Evidence Graph
  const [showEvidenceGraph, setShowEvidenceGraph] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [constraints, setConstraints] = useState({
    dau: 10000,
    peak_rps: 100,
    latency_target_ms: 500,
    budget_min_monthly: 5000,
    budget_max_monthly: 15000,
    compliance: ["SOC2", "GDPR"],
  });
  const metrics = result?.metadata?.metrics as
    | {
      mode?: "quick" | "deep";
      latency?: number;
      prompt_tokens?: number;
      completion_tokens?: number;
      cost_estimate?: number;
      models_used?: Record<string, number>;
      task_graph?: {
        total_nodes?: number;
        max_depth?: number;
      };
    }
    | undefined;
  const reflexionTriggered = Boolean(result?.metadata?.reflexion?.triggered);
  const metricsMode = metrics?.mode || "deep";
  const isQuickMode = metricsMode === "quick";

  // Persist developer mode in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("dev_mode");
    if (stored === "true") setIsDeveloperMode(true);
  }, []);

  const handleDevModeToggle = (newValue: boolean) => {
    localStorage.setItem("dev_mode", String(newValue));
    setIsDeveloperMode(newValue);
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  // Check for API URL from environment
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  // Load history on mount
  useEffect(() => {
    fetchHistory();
  }, []); // Only on mount

  // Refresh history when session ID changes (new session created)
  useEffect(() => {
    if (sessionId) {
      fetchHistory();
    }
  }, [sessionId]);

  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_URL}/api/history`);
      if (res.ok) {
        const data = await res.json();
        setHistory(data);
      }
      // Silently ignore non-ok responses (auth disabled, empty history, etc.)
    } catch {
      // Silently ignore network errors (server not running is expected during development)
    }
  };

  // Check URL param
  useEffect(() => {
    const id = searchParams.get("session_id");
    if (id && id !== sessionId) {
      setSessionId(id);
    }
  }, [searchParams]);

  useEffect(() => {
    console.log("Session ID updated:", sessionId);
  }, [sessionId]);

  // Load session data when ID changes
  useEffect(() => {
    if (!sessionId) return;

    const fetchSession = async () => {
      try {
        const res = await fetch(`${API_URL}/api/research/${sessionId}`);
        if (res.ok) {
          const data = await res.json();
          setLogs(data.logs || []);
          if (data.phases) setPhases(data.phases);

          if (data.status === "completed") {
            setResult(data.result);
            setIsProcessing(false);
            if (data.phases) setPhases(data.phases);
            if (data.result?.trust_metrics) setTrustMetrics(data.result.trust_metrics);
            if (data.result?.contradictions) setContradictions(data.result.contradictions);
            if (data.result?.research_metrics) setResearchMetrics(data.result.research_metrics);
            if (data.result?.claims) setClaims(data.result.claims);
            if (data.result?.research_gaps) setResearchGaps(data.result.research_gaps);
            if (data.result?.continuations) setContinuations(data.result.continuations);
            if (data.result?.comparison) setComparisonResult(data.result.comparison);
          } else if (data.status === "failed") {
            setIsProcessing(false);
            setResult(null);
          }
          // If loaded from history, query might not be set in UI
          if (data.query) setQuery(data.query);
        }
      } catch (e) {
        console.error("Error fetching session", e);
      }
    };

    fetchSession();
  }, [sessionId]);


  // Auto-scroll logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Poll for status
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (sessionId && isProcessing) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(`${API_URL}/api/research/${sessionId}`);
          if (res.ok) {
            const data = await res.json();
            setLogs(data.logs || []);
            if (data.phases) setPhases(data.phases);

            if (data.status === "completed") {
              setResult(data.result);
              setIsProcessing(false);
              if (data.phases) setPhases(data.phases);
              if (data.result?.trust_metrics) setTrustMetrics(data.result.trust_metrics);
              if (data.result?.contradictions) setContradictions(data.result.contradictions);
              if (data.result?.research_metrics) setResearchMetrics(data.result.research_metrics);
              if (data.result?.claims) setClaims(data.result.claims);
              if (data.result?.research_gaps) setResearchGaps(data.result.research_gaps);
              if (data.result?.continuations) setContinuations(data.result.continuations);
              if (data.result?.comparison) setComparisonResult(data.result.comparison);
              clearInterval(interval);
              fetchHistory(); // Refresh sidebar
            } else if (data.status === "failed") {
              setIsProcessing(false);
              setResult(null); // Clear result on failure
              clearInterval(interval);
              fetchHistory(); // Also refresh history on failure
              // Handle error visually
            }
          }
        } catch (error) {
          console.error("Polling error", error);
        }
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [sessionId, isProcessing]);

  const handleSubmit = async (e?: React.FormEvent, overrideQuery?: string) => {
    e?.preventDefault();
    const submittedQuery = (overrideQuery ?? query).trim();
    if (!submittedQuery) return;
    if (overrideQuery) {
      setQuery(submittedQuery);
    }

    setIsProcessing(true);
    setLogs([]);
    setResult(null); // Clear previous result immediately
    setPhases([]);
    setTrustMetrics(null);
    setContradictions([]);
    setResearchMetrics(null);
    setClaims([]);
    setResearchGaps(null);
    setContinuations([]);
    setChallengeResult(null);
    setComparisonResult(null);

    const res = await fetch(`${API_URL}/api/research`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: submittedQuery,
        output_mode: outputMode,
        audience,
        expertise_level: expertiseLevel,
        session_id: sessionId || undefined,
        comparison_mode: comparisonMode,
        subject_a: comparisonMode ? subjectA : undefined,
        subject_b: comparisonMode ? subjectB : undefined,
      }),
    });

    const data = await res.json();
    setSessionId(data.session_id);
    // Update URL without reload
    router.push(`/research?session_id=${data.session_id}`);
  };

  const handleContinue = async () => {
    if (!continueQuery.trim()) return;
    await handleSubmit(undefined, continueQuery);
    setContinueQuery("");
  };

  const loadSession = (id: string) => {
    setSessionId(id);
    router.push(`/research?session_id=${id}`);
    setResult(null); // Clear previous result to show loading/logs
    setPhases([]);
    setTrustMetrics(null);
    setContradictions([]);
    setResearchMetrics(null);
    setClaims([]);
    setResearchGaps(null);
    setContinuations([]);
    setChallengeResult(null);
    setComparisonResult(null);
    fetchHistory(); // Refresh history
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Part 4: Challenge a claim
  const handleChallengeClaim = async (
    marker: string,
    claimText: string,
    originalDomains: string[],
    confidence: number
  ) => {
    if (!sessionId) return;
    setIsChallenging(true);
    setChallengeResult(null);
    try {
      const res = await fetch(`${API_URL}/api/research/${sessionId}/challenge`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          claim_marker: marker,
          claim_text: claimText,
          original_domains: originalDomains,
          confidence_before: confidence,
        }),
      });
      if (!res.ok) throw new Error("Challenge request failed");
      const data = await res.json();
      const challengeData = data as ChallengeResult;
      setChallengeResult(challengeData);

      // Update the claims array so the inline badge reflects the new confidence
      if (challengeData.confidence_after != null) {
        setClaims(prev => prev.map(c => {
          if (c.citation_marker === marker) {
            return {
              ...c,
              sources: c.sources.map(s => ({
                ...s,
                reliability: challengeData.confidence_after,
              })),
            };
          }
          return c;
        }));

        // Update trust metrics to reflect the challenge result
        setTrustMetrics(prev => {
          if (!prev) return prev;
          const delta = challengeData.confidence_after - confidence;
          const newConfidence = Math.max(0, Math.min(1, prev.confidence_score + delta * 0.15));
          const newVerified = challengeData.verdict === "corroborated"
            ? Math.min(prev.claims_verified + 1, prev.claims_total)
            : challengeData.verdict === "refuted"
              ? Math.max(prev.claims_verified - 1, 0)
              : prev.claims_verified;
          return {
            ...prev,
            confidence_score: parseFloat(newConfidence.toFixed(3)),
            claims_verified: newVerified,
          };
        });
      }
    } catch (err: any) {
      toast.error("Challenge failed", { description: err.message });
    } finally {
      setIsChallenging(false);
    }
  };

  // Part 4: View Source Genome
  const handleViewGenome = async (sourceIndex: number) => {
    if (!sessionId) return;
    try {
      const res = await fetch(`${API_URL}/api/research/${sessionId}/source-genome/${sourceIndex}`);
      if (!res.ok) throw new Error("Failed to fetch source genome");
      const data = await res.json();
      setGenomeData(data as SourceGenomeData);
      setGenomeOpen(true);
    } catch (err: any) {
      toast.error("Source Genome failed", { description: err.message });
    }
  };

  const generateArchitecturePlan = async () => {
    if (!result) return;

    setArchitectureLoading(true);
    setArchitectureError(null);

    try {
      const response = await fetch(`${API_URL}/api/generate-architecture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_name: "Deep Research Agent",
          system_description: query,
          recommended_solution: result.report,
          constraints: {
            system_name: "Deep Research Agent",
            daily_active_users: constraints.dau,
            peak_concurrent_sessions: constraints.peak_rps,
            queries_per_session: 5,
            quick_mode_latency_sec: 30,
            deep_mode_latency_sec: 300,
            interactive_latency_sec: constraints.latency_target_ms / 1000, // Convert ms to seconds
            budget_monthly_min: constraints.budget_min_monthly,
            budget_monthly_max: constraints.budget_max_monthly,
            compliance_requirements: constraints.compliance,
          },
          tradeoffs: ["Balancing cost, latency, and compliance requirements"],
          confidence_score: 0.85,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate architecture: ${response.statusText}`);
      }

      const data = await response.json();
      setArchitecture(data);
    } catch (error) {
      console.error("Architecture generation error:", error);
      setArchitectureError(error instanceof Error ? error.message : "Failed to generate architecture");
    } finally {
      setArchitectureLoading(false);
    }
  };

  const handleGenerateRunbook = async (cloudTarget: string) => {
    if (!architecture) return;

    try {
      const response = await fetch(`${API_URL}/api/generate-deployment-runbook`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          architecture,
          target_cloud: cloudTarget,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate runbook: ${response.statusText}`);
      }

      const runbookText = await response.text();
      // Download as markdown file
      const element = document.createElement("a");
      element.setAttribute("href", "data:text/markdown;charset=utf-8," + encodeURIComponent(runbookText));
      element.setAttribute("download", `deployment-runbook-${cloudTarget.toLowerCase()}.md`);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (error) {
      console.error("Runbook generation error:", error);
      setArchitectureError(error instanceof Error ? error.message : "Failed to generate runbook");
    }
  };

  return (
    <div className="flex h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-800 relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Sidebar */}
      <div className={cn(
        "hidden md:flex flex-col border-r border-white/10 bg-black/80 backdrop-blur-xl relative z-10 transition-all duration-300",
        sidebarCollapsed ? "w-[60px] p-2" : "w-[260px] p-4"
      )}>
        {/* Collapse/Expand Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-4 h-6 w-6 rounded-full bg-zinc-800 border border-white/10 hover:bg-zinc-700 z-20"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          {sidebarCollapsed ? (
            <PanelLeft className="h-3.5 w-3.5 text-zinc-400" />
          ) : (
            <PanelLeftClose className="h-3.5 w-3.5 text-zinc-400" />

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
          )}
        </Button>

        {/* Logo/Brand */}
        <div className={cn(
          "flex items-center gap-2 px-2 py-1 mb-4",
          sidebarCollapsed && "justify-center px-0"
        )}>
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
            <div className="h-3 w-3 rounded-full bg-white/90" />
          </div>
          {!sidebarCollapsed && (
            <span className="font-semibold text-sm tracking-tight text-white/90">Deep Research</span>
          )}
        </div>

        {/* New Research Button */}
        <Button
          variant="outline"
          className={cn(
            "justify-start gap-2 bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300 mb-4",
            sidebarCollapsed ? "w-10 h-10 p-0 justify-center" : "w-full"
          )}
          onClick={() => {
            setSessionId(null);
            setResult(null);
            setQuery("");
            setLogs([]);
            setPhases([]);
            setTrustMetrics(null);
            setContradictions([]);
            setResearchMetrics(null);
            setClaims([]);
            setResearchGaps(null);
            setContinuations([]);
            setChallengeResult(null);
            setComparisonResult(null);
            setComparisonMode(false);
            setSubjectA("");
            setSubjectB("");
            router.push("/research");
            fetchHistory();
          }}
          title="New Research"
        >
          <Sparkles className="h-4 w-4 flex-shrink-0" />
          {!sidebarCollapsed && "New Research"}
        </Button>

        {/* History Section */}
        {!sidebarCollapsed && (
          <div className="space-y-1 flex-1 overflow-y-auto pr-1 scrollbar-hide">
            <p className="text-xs font-medium text-zinc-400 px-2 py-2">History</p>
            {history.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-8 px-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/70",
                  sessionId === item.id && "bg-zinc-900 text-zinc-100"
                )}
                onClick={() => loadSession(item.id)}
              >
                <Clock className="mr-2 h-3 w-3 opacity-70" />
                <span className="truncate text-xs text-left w-full">{item.query || "Untitled Research"}</span>
              </Button>
            ))}
            {history.length === 0 && (
              <p className="text-xs text-zinc-500 px-2">No history yet</p>
            )}
          </div>
        )}

        {/* Collapsed state - show history icon */}
        {sidebarCollapsed && (
          <div className="flex-1 flex flex-col items-center pt-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
              onClick={() => setSidebarCollapsed(false)}
              title="View History"
            >
              <Clock className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative w-full h-full overflow-hidden z-10">

        {/* Header / Top Bar */}
        <div className="absolute top-0 right-0 p-2 sm:p-4 flex gap-1 sm:gap-2 z-20">
          <Link href="/docs" className="hidden sm:inline-flex">
            <Button variant="outline" className="border-white/20 bg-black/50 text-white hover:bg-white/10">
              Docs
            </Button>
          </Link>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-4">Feedback</Button>
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-4">History</Button>
        </div>

        <div className="flex-1 overflow-auto">
          {!result && !isProcessing && logs.length === 0 ? (
            // Hero State
            <div className="h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 max-w-4xl mx-auto w-full">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400 text-center">
                What do you want to research?
              </h1>

              <div className="w-full relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-cyan-500/30 opacity-30 blur-2xl group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black/90 backdrop-blur-md rounded-3xl border border-white/10 p-4 sm:p-6 shadow-2xl">
                  <Textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What topic are you curious about?"
                    className="min-h-[100px] sm:min-h-[120px] w-full resize-none border-0 bg-transparent text-lg sm:text-xl placeholder:text-base sm:placeholder:text-lg placeholder:text-zinc-500 focus-visible:ring-0 px-2 py-3"
                  />
                  <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                      <ModeSelector selected={outputMode} onChange={setOutputMode} />
                      <Button
                        onClick={() => handleSubmit()}
                        disabled={!query.trim()}
                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white h-12 px-6 sm:px-8 rounded-xl font-semibold text-base transition-all disabled:opacity-40 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                      >
                        Research
                      </Button>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <PersonalizationFields
                          audience={audience}
                          expertiseLevel={expertiseLevel}
                          onAudienceChange={setAudience}
                          onExpertiseLevelChange={setExpertiseLevel}
                          isExpanded={expandedPanel === "personalize"}
                          onToggle={() => setExpandedPanel(expandedPanel === "personalize" ? null : "personalize")}
                        />
                        <ComparisonInput
                          comparisonMode={comparisonMode}
                          setComparisonMode={setComparisonMode}
                          subjectA={subjectA}
                          setSubjectA={setSubjectA}
                          subjectB={subjectB}
                          setSubjectB={setSubjectB}
                          isExpanded={expandedPanel === "compare"}
                          onToggle={() => setExpandedPanel(expandedPanel === "compare" ? null : "compare")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 text-zinc-400 px-2">
                <button 
                  type="button"
                  onClick={() => setQuery("Latest AI architectures")}
                  className="text-xs sm:text-sm bg-zinc-800/60 backdrop-blur border border-white/5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-zinc-700/60 hover:text-zinc-200 cursor-pointer transition-all"
                >
                  Latest AI architectures
                </button>
                <button 
                  type="button"
                  onClick={() => setQuery("Quantum computing trends")}
                  className="text-xs sm:text-sm bg-zinc-800/60 backdrop-blur border border-white/5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-zinc-700/60 hover:text-zinc-200 cursor-pointer transition-all"
                >
                  Quantum computing trends
                </button>
                <button 
                  type="button"
                  onClick={() => setQuery("CRISPR advancements")}
                  className="text-xs sm:text-sm bg-zinc-800/60 backdrop-blur border border-white/5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-zinc-700/60 hover:text-zinc-200 cursor-pointer transition-all"
                >
                  CRISPR advancements
                </button>
              </div>
            </div>
          ) : (
            // Results State — 3-column layout
            <div className="max-w-[1600px] mx-auto p-4 md:p-6 min-h-full pb-20">
              {/* Full-width header */}
              {result && result.metadata?.output_mode_used && (
                <p className="text-xs text-zinc-500 mb-2">
                  This report was generated in <span className="capitalize text-zinc-400">{result.metadata.output_mode_used}</span> mode.
                </p>
              )}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">{query}</h2>
                {(phases.length > 0 || isProcessing) && (
                  <ResearchTimeline phases={phases} isLive={isProcessing} />
                )}
              </div>

              {/* 3-Column Layout */}
              <div className="flex gap-6 items-start">
                {/* Left Column — Phase Navigator */}
                <aside className="hidden lg:block w-52 shrink-0">
                  <div className="sticky top-6">
                    <PhaseNavigator
                      phases={phases}
                      isLive={isProcessing}
                      sessionHistory={history.slice(0, 5).map(h => ({ id: h.id, query: h.query, status: h.status, created_at: h.created_at }))}
                      onSessionClick={loadSession}
                    />
                  </div>
                </aside>

                {/* Center Column — Main Content */}
                <main className="flex-1 min-w-0">
                <div className="space-y-4 mb-6">

                  {/* Research Plan Visualization — developer only */}
                  {isDeveloperMode && result?.metadata?.task_graph && (
                    <div className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <ResearchPlan plan={result.metadata.task_graph} />
                    </div>
                  )}

                  {/* Logs Accordion/Terminal — developer only (always visible while processing) */}
                  {(isDeveloperMode || isProcessing) && (
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
                        <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                          <Terminal className="h-3 w-3" />
                          AGENT TERMINAL
                        </span>
                        {isProcessing && <Loader2 className="h-3 w-3 animate-spin text-zinc-500" />}
                      </div>
                      <div ref={scrollRef} className={cn("overflow-y-auto p-4 font-mono text-xs text-zinc-400 space-y-1 transition-all duration-300", result ? "h-32" : "h-64")}>
                        {logs.map((log, i) => (
                          <div key={i} className="flex gap-2">
                            <span className="text-zinc-600 shrink-0">{log.timestamp.split('T')[1].split('.')[0]}</span>
                            <span className={log.message.includes("Error") ? "text-red-400" : ""}>{log.message}</span>
                          </div>
                        ))}
                        {logs.length === 0 && <span className="text-zinc-600">Initializing agent...</span>}
                      </div>
                    </div>
                  )}
                </div>

              {/* Final Report */}
              {result && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">Research Complete</span>
                  </div>

                  <Card className="bg-zinc-950 border-zinc-800 text-zinc-300 shadow-xl">
                    <CardContent className="prose prose-invert max-w-none pt-8 px-8 pb-8">
                      <div className="markdown-body">
                        <ClaimExpander
                          content={result.report}
                          sources={result.sources}
                          claims={claims}
                          onChallenge={handleChallengeClaim}
                          onViewGenome={handleViewGenome}
                          isChallenging={isChallenging}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Part 4: Comparison Table */}
                  {comparisonResult && <ComparisonTable comparison={comparisonResult} />}

                  {/* Part 4: Challenge Result */}
                  {challengeResult && (
                    <ChallengeResultDisplay
                      result={challengeResult}
                      onDismiss={() => setChallengeResult(null)}
                    />
                  )}

                  {/* Research Gaps Section */}
                  {researchGaps && (
                    <ResearchGaps
                      gaps={researchGaps}
                      onFollowupClick={(q: string) => handleSubmit(undefined, q)}
                    />
                  )}

                  {/* Contradiction Detection Section */}
                  <ContradictionSection contradictions={contradictions} />

                  {/* Continuation Buttons */}
                  {!isProcessing && continuations.length > 0 && (
                    <ContinuationButtons
                      continuations={continuations}
                      sessionId={sessionId || undefined}
                      onFollowupClick={(q: string) => handleSubmit(undefined, q)}
                      onExportClick={() => {}}
                    />
                  )}

                  {/* Part 4: Evidence Graph Toggle */}
                  {!isProcessing && result && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowEvidenceGraph(true)}
                        className="border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 gap-1.5 text-xs"
                      >
                        🕸️ View Evidence Graph
                      </Button>
                    </div>
                  )}

                  {/* Sources Section */}
                  {result.sources && result.sources.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-zinc-100">Sources</h3>
                        {/* Source Pill Badge */}
                        <div className="bg-[#1e1e22] text-zinc-400 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          {(() => {
                            try {
                              return new URL(result.sources[0].url).hostname.replace('www.', '').substring(0, 15) + '...';
                            } catch { return 'Source'; }
                          })()}
                          <span className="text-zinc-500 ml-1">+{result.sources.length - 1}</span>
                        </div>
                      </div>

                      <div className="flex overflow-x-auto pb-4 gap-3 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                        {/* Render first 5-6 sources directly */}
                        {result.sources.slice(0, 10).map((source, i) => (
                          <SourceCard key={i} source={source} index={i} />
                        ))}

                        {/* Show All Card */}
                        <Sheet>
                          <SheetTrigger asChild>
                            <div className="min-w-[100px] flex-shrink-0 cursor-pointer group">
                              <Card className="h-full bg-[#1e1e22] border-none hover:bg-[#27272a] transition-all duration-200 shadow-none rounded-xl flex items-center justify-center">
                                <CardContent className="p-4 flex flex-col items-center gap-2 text-zinc-400 group-hover:text-zinc-200">
                                  <Globe className="h-5 w-5 mb-1" />
                                  <span className="text-xs font-semibold whitespace-nowrap">Show all</span>
                                </CardContent>
                              </Card>
                            </div>
                          </SheetTrigger>
                          <SheetContent className="bg-[#09090b] border-l border-zinc-800 w-[400px] sm:w-[600px] lg:w-[800px] sm:max-w-[80vw]">
                            <SheetHeader className="mb-8 px-4">
                              <SheetTitle className="text-zinc-100 flex items-center gap-3 text-xl font-medium">
                                <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                  <Globe className="h-4 w-4 text-zinc-400" />
                                </div>
                                {result.sources.length} Sources
                              </SheetTitle>
                            </SheetHeader>
                            <ScrollArea className="h-[calc(100vh-100px)] pr-0">
                              <div className="max-w-3xl mx-auto px-4 pb-10 grid grid-cols-1 gap-3">
                                {result.sources.map((source, i) => (
                                  // For the sheet view, we probably want a wider list-like card, 
                                  // but reusing SourceCard with width override is okay for now.
                                  <SourceCard key={i} source={source} index={i} className="min-w-full max-w-none" />
                                ))}
                              </div>
                            </ScrollArea>
                          </SheetContent>
                        </Sheet>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-zinc-900/20 border-zinc-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Sources Analyzed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-zinc-100">{trustMetrics?.sources_analyzed ?? result.sources?.length ?? 0}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-900/20 border-zinc-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Duration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-zinc-100">{metrics?.latency ? `${metrics.latency.toFixed(1)}s` : "—"}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-900/20 border-zinc-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Claims Verified</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-zinc-100">
                          {trustMetrics
                            ? `${trustMetrics.claims_verified} / ${trustMetrics.claims_total}`
                            : Object.keys(result.metadata?.evidence_graph?.claims ?? {}).length}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Architecture Plan Section */}
                  <div className="space-y-4 mt-8 pt-8 border-t border-zinc-800">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-2">Production Architecture Plan</h3>
                      <p className="text-sm text-zinc-400 mb-4">Generate a production-ready architecture based on your research findings and system constraints.</p>
                    </div>

                    {/* Constraints Configuration */}
                    {!architecture && (
                      <Card className="bg-zinc-900/40 border-zinc-800">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-semibold text-zinc-200">System Constraints</CardTitle>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowArchitectureConstraints(!showArchitectureConstraints)}
                              className="text-zinc-400 hover:text-zinc-200"
                            >
                              {showArchitectureConstraints ? "Hide" : "Edit"}
                            </Button>
                          </div>
                        </CardHeader>

                        {showArchitectureConstraints && (
                          <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-xs font-medium text-zinc-400 block mb-2">Daily Active Users</label>
                                <Input
                                  type="number"
                                  value={constraints.dau}
                                  onChange={(e) => setConstraints({ ...constraints, dau: Number(e.target.value) })}
                                  className="bg-black/30 border-zinc-700 text-zinc-200"
                                />
                              </div>
                              <div>
                                <label className="text-xs font-medium text-zinc-400 block mb-2">Peak RPS</label>
                                <Input
                                  type="number"
                                  value={constraints.peak_rps}
                                  onChange={(e) => setConstraints({ ...constraints, peak_rps: Number(e.target.value) })}
                                  className="bg-black/30 border-zinc-700 text-zinc-200"
                                />
                              </div>
                              <div>
                                <label className="text-xs font-medium text-zinc-400 block mb-2">Latency Target (ms)</label>
                                <Input
                                  type="number"
                                  value={constraints.latency_target_ms}
                                  onChange={(e) => setConstraints({ ...constraints, latency_target_ms: Number(e.target.value) })}
                                  className="bg-black/30 border-zinc-700 text-zinc-200"
                                />
                              </div>
                              <div>
                                <label className="text-xs font-medium text-zinc-400 block mb-2">Budget Range</label>
                                <div className="flex gap-2">
                                  <Input
                                    type="number"
                                    placeholder="Min"
                                    value={constraints.budget_min_monthly}
                                    onChange={(e) => setConstraints({ ...constraints, budget_min_monthly: Number(e.target.value) })}
                                    className="bg-black/30 border-zinc-700 text-zinc-200"
                                  />
                                  <Input
                                    type="number"
                                    placeholder="Max"
                                    value={constraints.budget_max_monthly}
                                    onChange={(e) => setConstraints({ ...constraints, budget_max_monthly: Number(e.target.value) })}
                                    className="bg-black/30 border-zinc-700 text-zinc-200"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="text-xs font-medium text-zinc-400 block mb-2">Compliance Requirements</label>
                              <div className="flex flex-wrap gap-2">
                                {["SOC2", "GDPR", "HIPAA", "PCI-DSS"].map((comp) => (
                                  <label key={comp} className="flex items-center gap-2 text-sm">
                                    <input
                                      type="checkbox"
                                      checked={constraints.compliance.includes(comp)}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setConstraints({ ...constraints, compliance: [...constraints.compliance, comp] });
                                        } else {
                                          setConstraints({ ...constraints, compliance: constraints.compliance.filter(c => c !== comp) });
                                        }
                                      }}
                                      className="rounded border-zinc-600 bg-black/30"
                                    />
                                    <span className="text-zinc-300">{comp}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        )}

                        <CardContent className="pt-0">
                          <Button
                            onClick={generateArchitecturePlan}
                            disabled={architectureLoading || !result}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          >
                            {architectureLoading ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Generating Architecture...
                              </>
                            ) : (
                              <>
                                <Sparkles className="h-4 w-4 mr-2" />
                                Generate Production Architecture
                              </>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* Architecture Plan Display */}
                    {architecture && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <ArchitecturePlanDisplay
                          architecture={architecture}
                          loading={architectureLoading}
                          error={architectureError}
                          onGenerateRunbook={handleGenerateRunbook}
                        />
                      </div>
                    )}

                    {architectureError && !architecture && (
                      <Card className="bg-red-900/20 border-red-800">
                        <CardContent className="pt-6">
                          <div className="flex gap-3">
                            <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-red-300">Architecture Generation Failed</h4>
                              <p className="text-sm text-red-200 mt-1">{architectureError}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              )}
              </main>

              {/* Right Column — Panels */}
              <aside className="hidden xl:block w-72 shrink-0">
                <div className="sticky top-6 space-y-4">
                  <DeveloperModeToggle
                    enabled={isDeveloperMode}
                    onToggle={handleDevModeToggle}
                  />
                  {trustMetrics && (
                    <TrustPanel
                      metrics={trustMetrics}
                      onContradictionClick={() =>
                        document.getElementById("contradictions-section")?.scrollIntoView({ behavior: "smooth" })
                      }
                    />
                  )}
                  {researchMetrics && (
                    <MetricsPanel metrics={researchMetrics} isDeveloperMode={isDeveloperMode} />
                  )}
                </div>
              </aside>
              </div>

              <MobilePanelsDrawer
                trustMetrics={trustMetrics}
                researchMetrics={researchMetrics}
                isDeveloperMode={isDeveloperMode}
                onContradictionClick={() =>
                  document.getElementById("contradictions-section")?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>
          )}
        </div>
      </div>

      {/* Part 4: Modals */}
      <EvidenceGraph
        sessionId={sessionId || ""}
        isOpen={showEvidenceGraph}
        onClose={() => setShowEvidenceGraph(false)}
      />
      {genomeData && (
        <SourceGenome
          genome={genomeData}
          isOpen={genomeOpen}
          onClose={() => setGenomeOpen(false)}
        />
      )}
    </div>
  );
}

export default function ResearchPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-black text-zinc-500">Loading Deep Research...</div>}>
      <ResearchPageContent />
    </Suspense>
  );
}

"use client"

import type { MetricsPanelProps } from "@/types/research"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
  return `${m}m ${s}s`
}

export function MetricsPanel({ metrics, isDeveloperMode }: MetricsPanelProps) {
  return (
    <div className="space-y-4">
      {/* Standard 2×2 grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Rigor Level */}
        <div className="bg-black/50 border border-white/10 rounded-xl p-4">
          <p className="text-[11px] uppercase tracking-wide text-zinc-300 mb-1">
            Rigor Level
          </p>
          <p className="text-xl font-bold text-cyan-400">
            {metrics.rigor_level}
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            {metrics.task_nodes} nodes · {metrics.graph_depth} depth levels
          </p>
        </div>

        {/* Reliability Coverage */}
        <div className="bg-black/50 border border-white/10 rounded-xl p-4">
          <p className="text-[11px] uppercase tracking-wide text-zinc-300 mb-1">
            Reliability Coverage
          </p>
          <p className="text-xl font-bold text-emerald-400">
            {metrics.reliability_coverage_pct}%
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            of sources independently verified
          </p>
        </div>

        {/* Engineering Rigor Score */}
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 cursor-default">
          <p className="text-[11px] uppercase tracking-wide text-zinc-300 mb-1">
                Research Integrity Score
              </p>
              <p className="text-xl font-bold text-violet-400">
                {metrics.engineering_rigor_score.toFixed(2)}
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                weighted quality score
              </p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            className="bg-black/90 border-white/10 text-zinc-300 text-xs w-64"
          >
            Weighted score combining source confidence (40%), methodology quality
            (40%), and domain independence (20%).
          </HoverCardContent>
        </HoverCard>

        {/* Duration */}
        <div className="bg-black/50 border border-white/10 rounded-xl p-4">
          <p className="text-[11px] uppercase tracking-wide text-zinc-300 mb-1">
            Research Duration
          </p>
          <p className="text-xl font-bold text-amber-400">
            {formatDuration(metrics.total_duration_seconds)}
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            {metrics.parallel_agents_used} agents ran in parallel
          </p>
        </div>
      </div>

      {/* Developer-only section */}
      {isDeveloperMode && (
        <div className="bg-black/50 border border-white/10 rounded-xl p-4 space-y-3">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Technical Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-zinc-500">Model Routing:</span>{" "}
              <span className="text-zinc-300">
                {metrics.model_routing_summary && typeof metrics.model_routing_summary === "object"
                  ? Object.entries(metrics.model_routing_summary).map(([k, v]) => `${k}: ${v}`).join(", ")
                  : String(metrics.model_routing_summary || "N/A")}
              </span>
            </div>
            <div>
              <span className="text-zinc-500">Reflexion Iterations:</span>{" "}
              <span className="text-zinc-300">
                {metrics.reflexion_iterations} quality re-plan loops
              </span>
            </div>
            <div>
              <span className="text-zinc-500">Output Mode Used:</span>{" "}
              <span className="text-zinc-300 capitalize">
                {metrics.output_mode_used}
              </span>
            </div>
            <div>
              <span className="text-zinc-500">Task Graph:</span>{" "}
              <span className="text-zinc-300">
                {metrics.task_nodes} nodes, {metrics.graph_depth} max depth
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import React from "react"
import { CheckCircle2, AlertTriangle } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { TrustMetrics, TrustPanelProps } from "@/types/research"

// ── Color helpers ────────────────────────────────────────────────────────────

interface ScoreBadge {
  bg: string
  text: string
  label: string
}

function confidenceBadge(score: number): ScoreBadge {
  if (score >= 0.75) return { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Strong Evidence" }
  if (score >= 0.50) return { bg: "bg-amber-500/20", text: "text-amber-400", label: "Moderate Evidence" }
  return { bg: "bg-rose-500/20", text: "text-rose-400", label: "Weak Evidence" }
}

function verificationBadge(score: number): ScoreBadge {
  if (score >= 0.75) return { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Well Verified" }
  if (score >= 0.50) return { bg: "bg-amber-500/20", text: "text-amber-400", label: "Partially Verified" }
  return { bg: "bg-rose-500/20", text: "text-rose-400", label: "Under-verified" }
}

function biasRiskBadge(risk: TrustMetrics["bias_risk"]): ScoreBadge {
  switch (risk) {
    case "low":
      return { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Low Risk" }
    case "medium":
      return { bg: "bg-amber-500/20", text: "text-amber-400", label: "Medium Risk" }
    case "high":
      return { bg: "bg-rose-500/20", text: "text-rose-400", label: "High Risk" }
  }
}

// ── Card wrapper ─────────────────────────────────────────────────────────────

function MetricCard({
  children,
  onClick,
  clickable = false,
}: {
  children: React.ReactNode
  onClick?: () => void
  clickable?: boolean
}) {
  return (
    <div
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={clickable ? (e) => { if (e.key === "Enter" || e.key === " ") onClick?.() } : undefined}
      className={`bg-black/50 border border-white/10 rounded-xl p-4 min-w-[160px] flex-1 transition-colors hover:border-white/30 ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      {children}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function TrustPanel({ metrics, onContradictionClick }: TrustPanelProps) {
  const confidence = confidenceBadge(metrics.confidence_score)
  const verification = verificationBadge(metrics.methodology_score)
  const bias = biasRiskBadge(metrics.bias_risk)

  const verifiedPct =
    metrics.claims_total > 0 ? (metrics.claims_verified / metrics.claims_total) * 100 : 0
  const diversityPct =
    metrics.sources_analyzed > 0
      ? Math.round((metrics.independent_domains / metrics.sources_analyzed) * 100)
      : 0

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {/* Card 1 — Sources Analyzed */}
      <MetricCard>
        <p className="text-[28px] font-bold text-cyan-400 leading-none">{metrics.sources_analyzed}</p>
        <p className="text-xs text-zinc-300 mt-1">Sources Analyzed</p>
        <p className="text-[10px] text-zinc-400 mt-1 leading-tight">
          Total web sources collected and reviewed
        </p>
      </MetricCard>

      {/* Card 2 — Independent Domains */}
      <MetricCard>
        <p className="text-[28px] font-bold text-red-400 leading-none">{metrics.independent_domains}</p>
        <p className="text-xs text-zinc-300 mt-1">
          {metrics.independent_domains} of {metrics.sources_analyzed} unique domains
        </p>
        <p className="text-[10px] text-zinc-400 mt-1 leading-tight">
          Higher diversity = less chance of single-source bias
        </p>
      </MetricCard>

      {/* Card 3 — Claims Verified */}
      <MetricCard>
        <p className="text-[28px] font-bold text-white leading-none">
          {metrics.claims_verified} / {metrics.claims_total}
        </p>
        <p className="text-xs text-zinc-300 mt-1">Claims Verified</p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
          <div
            className="h-1.5 rounded-full bg-white transition-all"
            style={{ width: `${verifiedPct}%` }}
          />
        </div>
        <p className="text-[10px] text-zinc-400 mt-1 leading-tight">
          Claims linked to a supporting source
        </p>
      </MetricCard>

      {/* Card 4 — Claim Confidence */}
      <MetricCard>
        <p className="text-[28px] font-bold text-amber-400 leading-none">
          {metrics.confidence_score.toFixed(2)}
        </p>
        <span className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${confidence.bg} ${confidence.text}`}>
          {confidence.label}
        </span>
        <p className="text-xs text-zinc-300 mt-1.5">Claim Confidence</p>
        <p className="text-[10px] text-zinc-400 mt-0.5 leading-tight">
          Average confidence across all claims based on how well sources support them (0-1 scale)
        </p>
      </MetricCard>

      {/* Card 5 — Verification Score */}
      <MetricCard>
        <p className="text-[28px] font-bold text-sky-400 leading-none">
          {metrics.methodology_score.toFixed(2)}
        </p>
        <span className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${verification.bg} ${verification.text}`}>
          {verification.label}
        </span>
        <p className="text-xs text-zinc-300 mt-1.5">Verification Score</p>
        <p className="text-[10px] text-zinc-400 mt-0.5 leading-tight">
          Scored from: {Math.round(verifiedPct)}% claims verified + {diversityPct}% source diversity
        </p>
      </MetricCard>

      {/* Card 6 — Bias Risk */}
      <MetricCard>
        <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${bias.bg} ${bias.text}`}>
          {bias.label}
        </span>
        <p className="text-xs text-zinc-300 mt-2">Bias Risk</p>
        <p className="text-[10px] text-zinc-400 mt-1 leading-tight">
          {metrics.independent_domains}/{metrics.sources_analyzed} unique domains - {diversityPct >= 70 ? "good" : diversityPct >= 40 ? "moderate" : "low"} source diversity
        </p>
      </MetricCard>

      {/* Card 7 — Contradictions */}
      <MetricCard
        clickable={metrics.contradictions_found > 0}
        onClick={metrics.contradictions_found > 0 ? onContradictionClick : undefined}
      >
        {metrics.contradictions_found === 0 ? (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-zinc-300">None Found</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="inline-block text-sm font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">
              {metrics.contradictions_found} Conflicts Found
            </span>
          </div>
        )}
        <p className="text-xs text-zinc-300 mt-1">Contradictions</p>
        <p className="text-[10px] text-zinc-400 mt-0.5 leading-tight">
          Sources that directly disagree with each other
        </p>
      </MetricCard>
    </div>
  )
}

// ── Skeleton loader ──────────────────────────────────────────────────────────

export function TrustPanelSkeleton() {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {Array.from({ length: 7 }).map((_, i) => (
        <Skeleton key={i} className="h-24 min-w-[140px] flex-1 rounded-xl bg-white/5" />
      ))}
    </div>
  )
}

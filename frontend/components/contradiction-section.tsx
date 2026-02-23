"use client"

import React from "react"
import { AlertTriangle } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Contradiction, ContradictionSectionProps } from "@/types/research"

// ── helpers ──────────────────────────────────────────────────────────────────

function TrustDots({ score }: { score: number }) {
  const filled = Math.round(score * 5)
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full ${
            i < filled ? "bg-[#1E3A5F]" : "bg-[#E2E8F0]"
          }`}
        />
      ))}
      <span className="ml-1 text-xs text-gray-600">{score.toFixed(2)}</span>
    </span>
  )
}

interface SeverityStyle {
  bg: string
  text: string
  label: string
}

function severityStyle(severity: Contradiction["severity"]): SeverityStyle {
  switch (severity) {
    case "low":
      return { bg: "bg-[#EBF8F0]", text: "text-[#1A7F4B]", label: "Low" }
    case "moderate":
      return { bg: "bg-[#FFFBEA]", text: "text-[#D97706]", label: "Moderate" }
    case "high":
      return { bg: "bg-[#FFF0EE]", text: "text-[#C0392B]", label: "High" }
  }
}

// ── Claim column ─────────────────────────────────────────────────────────────

function ClaimColumn({ label, claim }: { label: string; claim: Contradiction["claim_a"] }) {
  return (
    <div className="flex-1 min-w-0">
      <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-1">{label}</p>
      <p className="text-sm italic text-gray-700 mb-2 line-clamp-4">{claim.text}</p>
      <p className="text-xs font-bold text-gray-800">{claim.source_domain}</p>
      <a
        href={claim.source_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] text-blue-600 hover:underline break-all"
      >
        {claim.source_url}
      </a>
      <div className="mt-1">
        <TrustDots score={claim.trust_score} />
      </div>
    </div>
  )
}

// ── Card ─────────────────────────────────────────────────────────────────────

function ContradictionCard({ item }: { item: Contradiction }) {
  const sev = severityStyle(item.severity)
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden">
      {/* Top row */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#E2E8F0]">
        <span className="text-xs font-semibold text-gray-700">Conflicting Evidence</span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${sev.bg} ${sev.text}`}>
          {sev.label}
        </span>
      </div>

      {/* Two-column claims */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <ClaimColumn label="Claim A" claim={item.claim_a} />
        <ClaimColumn label="Claim B" claim={item.claim_b} />
      </div>

      {/* Resolution row */}
      <div className="bg-[#F7F9FC] px-4 py-3 border-t border-[#E2E8F0]">
        <span className="text-xs font-semibold text-gray-600 mr-1">Resolution:</span>
        <span className="text-xs text-gray-700">{item.resolution_note}</span>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function ContradictionSection({ contradictions }: ContradictionSectionProps) {
  if (!contradictions || contradictions.length === 0) return null

  return (
    <section id="contradictions-section" className="space-y-4">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-[#D97706]" />
        <h3 className="text-lg font-semibold text-zinc-100">Conflicting Findings</h3>
      </div>

      <div className="space-y-3">
        {contradictions.map((item) => (
          <ContradictionCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

// ── Skeleton loader ──────────────────────────────────────────────────────────

export function ContradictionSectionSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-40 w-full rounded-lg" />
    </div>
  )
}

"use client"

import React, { useState, useEffect, useCallback } from "react"
import { CheckCircle2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Phase, ResearchTimelineProps } from "@/types/research"

// ── helpers ──────────────────────────────────────────────────────────────────

function formatElapsed(seconds: number): string {
  return seconds.toFixed(1) + "s"
}

function pillClasses(status: Phase["status"]): string {
  switch (status) {
    case "complete":
      return "bg-[#1A7F4B] border-[#1A7F4B]"
    case "active":
      return "bg-[#1E3A5F] border-[#1E3A5F] animate-pulse"
    case "skipped":
      return "bg-zinc-600 border-zinc-600"
    default:
      return "bg-transparent border-[#CBD5E1]"
  }
}

function lineColor(prev: Phase["status"]): string {
  if (prev === "complete") return "bg-[#1A7F4B]"
  if (prev === "skipped") return "bg-zinc-600"
  return "bg-[#CBD5E1]"
}

// ── LiveTimer ────────────────────────────────────────────────────────────────

function LiveTimer({ startedAt }: { startedAt: number }) {
  const [elapsed, setElapsed] = useState(() =>
    Math.max(0, Date.now() / 1000 - startedAt)
  )

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Math.max(0, Date.now() / 1000 - startedAt))
    }, 1000)
    return () => clearInterval(id)
  }, [startedAt])

  return <span className="text-xs font-medium text-[#1E3A5F]">{formatElapsed(elapsed)}</span>
}

// ── LogDrawer ────────────────────────────────────────────────────────────────

function LogDrawer({ entries }: { entries: string[] }) {
  return (
    <div className="mt-2 w-full rounded-md bg-[#1a1a2e] p-3 max-h-48 overflow-y-auto">
      {entries.length === 0 ? (
        <p className="text-xs text-zinc-500 font-mono">No log entries</p>
      ) : (
        entries.map((entry, i) => (
          <p key={i} className="text-xs font-mono text-white leading-5 whitespace-pre-wrap">
            {entry}
          </p>
        ))
      )}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function ResearchTimeline({ phases, isLive }: ResearchTimelineProps) {
  const [openPhaseId, setOpenPhaseId] = useState<string | null>(null)

  const handlePillClick = useCallback(
    (phase: Phase) => {
      if (phase.status !== "complete") return
      setOpenPhaseId((prev) => (prev === phase.id ? null : phase.id))
    },
    []
  )

  // If phases is empty, show nothing — must be after all hooks
  if (!phases || phases.length === 0) return null

  return (
    <div className="w-full mb-6">
      {/* ── Desktop: horizontal ─────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-between w-full bg-[#F7F9FC] rounded-lg border border-[#E2E8F0] px-4" style={{ height: 56 }}>
        {phases.map((phase, idx) => (
          <React.Fragment key={phase.id}>
            {/* Pill + label */}
            <button
              type="button"
              onClick={() => handlePillClick(phase)}
              disabled={phase.status !== "complete"}
              className="flex items-center gap-2 shrink-0 disabled:cursor-default cursor-pointer select-none focus:outline-none"
            >
              {/* Circle */}
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${pillClasses(phase.status)}`}
              >
                {phase.status === "complete" && (
                  <CheckCircle2 className="w-4 h-4 text-white" />
                )}
              </span>

              {/* Label + time */}
              <span className="flex flex-col leading-tight">
                <span
                  className={`text-xs ${
                    phase.status === "active"
                      ? "font-bold text-[#1E3A5F]"
                      : phase.status === "complete"
                      ? "font-medium text-[#1A7F4B]"
                      : phase.status === "skipped"
                      ? "font-normal text-zinc-400 line-through"
                      : "font-normal text-gray-400"
                  }`}
                >
                  {phase.label}
                </span>
                {phase.status === "complete" && phase.elapsed_seconds !== null && (
                  <span className="text-[10px] text-gray-500">{formatElapsed(phase.elapsed_seconds)}</span>
                )}
                {phase.status === "skipped" && (
                  <span className="text-[10px] text-zinc-500">skipped</span>
                )}
                {phase.status === "active" && isLive && phase.started_at !== null && (
                  <LiveTimer startedAt={phase.started_at} />
                )}
              </span>
            </button>

            {/* Connecting line */}
            {idx < phases.length - 1 && (
              <span className={`flex-1 h-0.5 mx-2 rounded ${lineColor(phase.status)}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Mobile: vertical ────────────────────────────────────── */}
      <div className="flex md:hidden flex-col gap-1 w-full bg-[#F7F9FC] rounded-lg border border-[#E2E8F0] p-3">
        {phases.map((phase, idx) => (
          <React.Fragment key={phase.id}>
            <button
              type="button"
              onClick={() => handlePillClick(phase)}
              disabled={phase.status !== "complete"}
              className="flex items-center gap-2 py-1 disabled:cursor-default cursor-pointer select-none focus:outline-none"
            >
              <span
                className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-colors ${pillClasses(phase.status)}`}
              >
                {phase.status === "complete" && (
                  <CheckCircle2 className="w-3 h-3 text-white" />
                )}
              </span>
              <span
                className={`text-xs ${
                  phase.status === "active"
                    ? "font-bold text-[#1E3A5F]"
                    : phase.status === "complete"
                    ? "font-medium text-[#1A7F4B]"
                    : phase.status === "skipped"
                    ? "font-normal text-zinc-400 line-through"
                    : "font-normal text-gray-400"
                }`}
              >
                {phase.label}
              </span>
              {phase.status === "complete" && phase.elapsed_seconds !== null && (
                <span className="ml-auto text-[10px] text-gray-500">{formatElapsed(phase.elapsed_seconds)}</span>
              )}
              {phase.status === "skipped" && (
                <span className="ml-auto text-[10px] text-zinc-500">skipped</span>
              )}
              {phase.status === "active" && isLive && phase.started_at !== null && (
                <span className="ml-auto">
                  <LiveTimer startedAt={phase.started_at} />
                </span>
              )}
            </button>

            {/* Vertical connector */}
            {idx < phases.length - 1 && (
              <span className={`ml-[9px] w-0.5 h-3 rounded ${lineColor(phase.status)}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Log drawer (shared) ─────────────────────────────────── */}
      {openPhaseId !== null && (() => {
        const phase = phases.find((p) => p.id === openPhaseId)
        if (!phase) return null
        return <LogDrawer entries={phase.log_entries} />
      })()}
    </div>
  )
}

// ── Skeleton loader ──────────────────────────────────────────────────────────

export function ResearchTimelineSkeleton() {
  return (
    <div className="w-full mb-6">
      <Skeleton className="h-14 w-full rounded-lg" />
    </div>
  )
}

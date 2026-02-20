"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader2, Clock, SkipForward, Circle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Phase, PhaseNavigatorProps } from "@/types/research";

function PhaseIcon({ status }: { status: Phase["status"] }) {
  switch (status) {
    case "complete":
      return <CheckCircle2 className="h-3.5 w-3.5 text-white/70" />;
    case "active":
      return <Loader2 className="h-3.5 w-3.5 text-white animate-spin" />;
    case "skipped":
      return <SkipForward className="h-3.5 w-3.5 text-zinc-500" />;
    default:
      return <Circle className="h-3.5 w-3.5 text-zinc-500" />;
  }
}

function formatElapsed(seconds: number): string {
  return seconds.toFixed(1) + "s";
}

export function PhaseNavigator({
  phases,
  isLive,
  sessionHistory,
  onSessionClick,
}: PhaseNavigatorProps) {
  return (
    <div className="flex flex-col h-full bg-black/50 border border-white/10 rounded-2xl p-4">
      {/* Phase Steps */}
      <div className="mb-4">
        <h3 className="text-[10px] font-semibold text-zinc-300 uppercase tracking-widest px-1 mb-3">
          Research Phases
        </h3>
        {phases.length === 0 ? (
          <p className="text-[11px] text-zinc-400 px-1 italic">
            {isLive ? "Starting..." : "No active research"}
          </p>
        ) : (
          <div className="space-y-0.5">
            {phases.map((phase, i) => (
              <div key={phase.id} className="flex items-start gap-2 px-1 py-1.5 group">
                {/* Vertical line connector */}
                <div className="flex flex-col items-center">
                  <PhaseIcon status={phase.status} />
                  {i < phases.length - 1 && (
                    <div
                      className={cn(
                        "w-px flex-1 min-h-[12px] mt-1",
                        phase.status === "complete" ? "bg-white/20" :
                        phase.status === "active" ? "bg-white/10" :
                        "bg-white/5"
                      )}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className={cn(
                      "block text-[11px] font-medium truncate",
                      phase.status === "complete" ? "text-zinc-300" :
                      phase.status === "active" ? "text-white" :
                      phase.status === "skipped" ? "text-zinc-500 line-through" :
                      "text-zinc-400"
                    )}
                  >
                    {phase.label}
                  </span>
                  {phase.elapsed_seconds != null && phase.elapsed_seconds > 0 && (
                    <span className="text-[9px] text-zinc-300 font-mono">
                      {formatElapsed(phase.elapsed_seconds)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-px bg-white/10" />

      {/* Session History (last 5) */}
      <div className="flex-1 mt-4 overflow-hidden">
        <h3 className="text-[10px] font-semibold text-zinc-300 uppercase tracking-widest px-1 mb-3">
          Recent Sessions
        </h3>
        <ScrollArea className="h-full">
          <div className="space-y-1 pr-2">
            {sessionHistory.slice(0, 5).map((session) => (
              <button
                key={session.id}
                onClick={() => onSessionClick(session.id)}
                className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <Clock className="h-2.5 w-2.5 text-zinc-400 shrink-0" />
                  <span className="text-[11px] text-zinc-400 group-hover:text-white truncate transition-colors">
                    {session.query || "Untitled"}
                  </span>
                </span>
              </button>
            ))}
            {sessionHistory.length === 0 && (
              <p className="text-[11px] text-zinc-400 px-1 italic">No sessions yet</p>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

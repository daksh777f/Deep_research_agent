"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Trophy, Minus } from "lucide-react";
import type { ComparisonTableProps, ComparisonDimension } from "@/types/research";

function WinnerBadge({ winner, side }: { winner: string; side: "a" | "b" }) {
  const label = side === "a" ? "Subject A" : "Subject B";
  const isWinner = winner.toLowerCase() === label.toLowerCase() || winner.toLowerCase() === (side === "a" ? "a" : "b");
  if (winner.toLowerCase() === "tie" || winner.toLowerCase() === "draw") {
    return <Minus className="h-3.5 w-3.5 text-zinc-500" />;
  }
  if (!isWinner) return null;
  return <Trophy className="h-3.5 w-3.5 text-amber-400" />;
}

function DimensionRow({ dim, subjectA, subjectB }: { dim: ComparisonDimension; subjectA: string; subjectB: string }) {
  const isTie = dim.winner.toLowerCase() === "tie" || dim.winner.toLowerCase() === "draw";
  const aWins = !isTie && (dim.winner.toLowerCase() === subjectA.toLowerCase() || dim.winner.toLowerCase() === "a" || dim.winner.toLowerCase() === "subject a");
  const bWins = !isTie && !aWins;

  return (
    <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
      <td className="py-2.5 px-3 text-[12px] font-semibold text-zinc-300 w-[120px] align-top">
        <div className="flex items-center gap-1.5">
          {dim.dimension}
          {dim.confidence !== undefined && (
            <span className="text-[9px] text-zinc-600 font-mono">({(dim.confidence * 100).toFixed(0)}%)</span>
          )}
        </div>
      </td>
      <td className={cn("py-2.5 px-3 text-[11px] text-zinc-400 align-top", aWins && "bg-emerald-950/20")}>
        <div className="flex items-start gap-1.5">
          {aWins && <Trophy className="h-3 w-3 text-amber-400 shrink-0 mt-0.5" />}
          <span>{dim.subject_a_summary}</span>
        </div>
      </td>
      <td className={cn("py-2.5 px-3 text-[11px] text-zinc-400 align-top", bWins && "bg-emerald-950/20")}>
        <div className="flex items-start gap-1.5">
          {bWins && <Trophy className="h-3 w-3 text-amber-400 shrink-0 mt-0.5" />}
          <span>{dim.subject_b_summary}</span>
        </div>
      </td>
    </tr>
  );
}

export function ComparisonTable({ comparison }: ComparisonTableProps) {
  if (!comparison) return null;

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/50 mb-6">
        {/* Header */}
        <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
            <span className="text-lg">⚖️</span> Structured Comparison
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-2.5 px-3 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider text-left w-[120px]">
                  Dimension
                </th>
                <th className="py-2.5 px-3 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider text-left">
                  <span className="text-blue-400">{comparison.subject_a}</span>
                </th>
                <th className="py-2.5 px-3 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider text-left">
                  <span className="text-purple-400">{comparison.subject_b}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.dimensions.map((dim, idx) => (
                <DimensionRow
                  key={idx}
                  dim={dim}
                  subjectA={comparison.subject_a}
                  subjectB={comparison.subject_b}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Verdict */}
        {comparison.verdict && (
          <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/20">
            <div className="flex items-start gap-2">
              <Trophy className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-semibold text-zinc-300">Verdict</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">{comparison.verdict}</p>
              </div>
            </div>
          </div>
        )}

        {/* Overall Summary */}
        {comparison.overall_summary && (
          <div className="px-4 py-3 border-t border-zinc-800">
            <p className="text-[11px] text-zinc-500 leading-relaxed">{comparison.overall_summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

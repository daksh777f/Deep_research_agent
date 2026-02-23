"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Dna, Loader2 } from "lucide-react";
import type { ClaimSource } from "@/types/research";

interface ClaimButtonProps {
  marker: string;        // e.g. "[1]"
  claimText: string;
  sources: ClaimSource[];
  onChallenge?: (marker: string, claimText: string, originalDomains: string[], confidence: number) => void;
  onViewGenome?: (sourceIndex: number) => void;
  isChallenging?: boolean;
}

/** Reliability dot visualization: 5 dots filled proportionally to score. */
function ReliabilityDots({ score }: { score: number }) {
  const filled = Math.round(score * 5);
  return (
    <div className="flex items-center gap-0.5" title={`Reliability: ${(score * 100).toFixed(0)}%`}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors",
            i < filled ? "bg-emerald-400" : "bg-zinc-700"
          )}
        />
      ))}
    </div>
  );
}

/** Bias risk badge based on reliability score thresholds. */
function BiasIndicator({ reliability }: { reliability: number }) {
  const risk = reliability >= 0.7 ? "low" : reliability >= 0.4 ? "medium" : "high";
  const config = {
    low: { label: "Low Risk", color: "text-emerald-400 bg-emerald-950/50 border-emerald-900/50" },
    medium: { label: "Med Risk", color: "text-amber-400 bg-amber-950/50 border-amber-900/50" },
    high: { label: "High Risk", color: "text-red-400 bg-red-950/50 border-red-900/50" },
  };
  const c = config[risk];
  return (
    <span className={cn("px-1.5 py-0.5 rounded text-[9px] font-medium border", c.color)}>
      {c.label}
    </span>
  );
}

export function ClaimButton({ marker, claimText, sources, onChallenge, onViewGenome, isChallenging }: ClaimButtonProps) {
  const [expanded, setExpanded] = useState(false);

  // Derive average reliability for the badge color
  const avgReliability = sources.length > 0
    ? sources.reduce((sum, s) => sum + s.reliability, 0) / sources.length
    : 0.5;

  const badgeColor = avgReliability >= 0.7
    ? "bg-emerald-950/60 text-emerald-400 border-emerald-900/50 hover:bg-emerald-900/70"
    : avgReliability >= 0.4
      ? "bg-amber-950/60 text-amber-400 border-amber-900/50 hover:bg-amber-900/70"
      : "bg-red-950/60 text-red-400 border-red-900/50 hover:bg-red-900/70";

  return (
    <span className="inline relative">
      {/* Inline Citation Badge */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 align-baseline",
          "text-[11px] font-semibold rounded-md border cursor-pointer",
          "transition-all duration-200 select-none",
          badgeColor,
          expanded && "ring-1 ring-offset-1 ring-offset-black ring-current"
        )}
        aria-expanded={expanded}
        aria-label={`Citation ${marker} — click to expand reliability details`}
      >
        {marker}
      </button>

      {/* Expandable Panel */}
      {expanded && (
        <span className="block mt-2 mb-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <span className="block rounded-lg border border-zinc-800 bg-zinc-950/90 backdrop-blur-sm overflow-hidden shadow-xl">
            {/* Header */}
            <span className="block px-4 py-2.5 border-b border-zinc-800/60 bg-zinc-900/40">
              <span className="block text-[11px] font-medium text-zinc-400 mb-1">
                Claim {marker}
              </span>
              <span className="block text-[13px] text-zinc-200 leading-relaxed">
                {claimText || "Referenced claim"}
              </span>
            </span>

            {/* Source Rows */}
            <span className="block divide-y divide-zinc-800/40">
              {sources.map((source, idx) => {
                let domain = source.domain;
                if (!domain && source.url) {
                  try {
                    domain = new URL(source.url).hostname.replace("www.", "");
                  } catch { domain = "Unknown"; }
                }
                const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

                return (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 px-4 py-3 hover:bg-zinc-900/50 transition-colors group"
                  >
                    <span className="h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0 mt-0.5 border border-zinc-700/50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={faviconUrl}
                        alt=""
                        className="h-3 w-3 object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </span>
                    <span className="flex-1 min-w-0 space-y-1.5">
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-[12px] font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors truncate">
                          {domain || "Source"}
                        </span>
                        <span className="flex items-center gap-2 shrink-0">
                          <ReliabilityDots score={source.reliability} />
                          <BiasIndicator reliability={source.reliability} />
                        </span>
                      </span>
                      {source.snippet && (
                        <span className="block text-[11px] text-zinc-500 leading-relaxed line-clamp-2">
                          {source.snippet}
                        </span>
                      )}
                      <span className="block text-[10px] text-zinc-600 font-mono">
                        Reliability: {(source.reliability * 100).toFixed(0)}%
                      </span>
                    </span>
                  </a>
                );
              })}
            </span>

            {sources.length === 0 && (
              <span className="block px-4 py-3 text-xs text-zinc-500 italic">
                No source details available for this claim.
              </span>
            )}

            {/* Part 4: Challenge & Genome buttons — only render footer if buttons exist */}
            {(onChallenge || (onViewGenome && sources.length > 0)) && (
              <span className="block px-4 py-2.5 border-t border-zinc-800/60 flex items-center gap-2">
                {onChallenge && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      const domains = sources.map(s => {
                        if (s.domain) return s.domain;
                        try { return new URL(s.url).hostname.replace("www.", ""); } catch { return ""; }
                      }).filter(Boolean);
                      onChallenge(marker, claimText, domains, avgReliability);
                    }}
                    disabled={isChallenging}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold",
                      "border border-amber-900/50 bg-amber-950/40 text-amber-400",
                      "hover:bg-amber-900/50 hover:text-amber-300 transition-all",
                      "disabled:opacity-40 disabled:cursor-not-allowed"
                    )}
                  >
                    {isChallenging ? <Loader2 className="h-3 w-3 animate-spin" /> : <Zap className="h-3 w-3" />}
                    Challenge
                  </button>
                )}
                {onViewGenome && sources.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onViewGenome(0);
                    }}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold",
                      "border border-purple-900/50 bg-purple-950/40 text-purple-400",
                      "hover:bg-purple-900/50 hover:text-purple-300 transition-all"
                    )}
                  >
                    <Dna className="h-3 w-3" />
                    Source Genome
                  </button>
                )}
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  );
}

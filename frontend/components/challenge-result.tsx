"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ShieldCheck, ShieldAlert, ShieldQuestion, ExternalLink } from "lucide-react";
import type { ChallengeResult, ChallengeResultProps } from "@/types/research";

const verdictConfig = {
  corroborated: {
    icon: ShieldCheck,
    label: "Corroborated",
    bg: "bg-emerald-950/40 border-emerald-800/60",
    text: "text-emerald-400",
    banner: "bg-emerald-900/30",
    description: "Independent evidence supports this claim.",
  },
  refuted: {
    icon: ShieldAlert,
    label: "Refuted",
    bg: "bg-red-950/40 border-red-800/60",
    text: "text-red-400",
    banner: "bg-red-900/30",
    description: "Independent evidence contradicts this claim.",
  },
  disputed: {
    icon: ShieldQuestion,
    label: "Disputed",
    bg: "bg-amber-950/40 border-amber-800/60",
    text: "text-amber-400",
    banner: "bg-amber-900/30",
    description: "Mixed or insufficient evidence found.",
  },
};

export function ChallengeResultDisplay({ result, onDismiss }: ChallengeResultProps) {
  const config = verdictConfig[result.verdict];
  const IconComp = config.icon;
  const confidenceDelta = result.confidence_after - result.confidence_before;
  const deltaSign = confidenceDelta >= 0 ? "+" : "";

  return (
    <Card className={cn("relative animate-in fade-in slide-in-from-top-2 duration-500 border", config.bg)}>
      {/* Dismiss */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onDismiss}
        className="absolute top-2 right-2 h-6 w-6 text-zinc-500 hover:text-zinc-200"
      >
        <X className="h-3.5 w-3.5" />
      </Button>

      {/* Verdict Banner */}
      <div className={cn("px-4 py-3 flex items-center gap-3 border-b border-zinc-800/40 rounded-t-lg", config.banner)}>
        <IconComp className={cn("h-5 w-5", config.text)} />
        <div>
          <span className={cn("text-sm font-bold", config.text)}>{config.label}</span>
          <span className="text-xs text-zinc-400 ml-2">— Claim {result.claim_marker}</span>
        </div>
      </div>

      <CardContent className="pt-4 pb-4 space-y-3">
        {/* Claim text */}
        <p className="text-[13px] text-zinc-300 leading-relaxed italic">
          &ldquo;{result.claim_text}&rdquo;
        </p>

        {/* Summary */}
        <p className="text-[12px] text-zinc-400 leading-relaxed">{result.summary}</p>

        {/* Confidence Change */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-zinc-500">
            Confidence: <span className="text-zinc-300 font-mono">{(result.confidence_before * 100).toFixed(0)}%</span>
            {" → "}
            <span className={cn(
              "font-mono font-semibold",
              result.verdict === "corroborated" ? "text-emerald-400" :
                result.verdict === "refuted" ? "text-red-400" : "text-amber-400"
            )}>
              {(result.confidence_after * 100).toFixed(0)}%
            </span>
            <span className={cn(
              "ml-1 text-[10px]",
              confidenceDelta > 0 ? "text-emerald-500" : confidenceDelta < 0 ? "text-red-500" : "text-zinc-500"
            )}>
              ({deltaSign}{(confidenceDelta * 100).toFixed(0)}%)
            </span>
          </div>
        </div>

        {/* New Sources */}
        {result.new_sources.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-zinc-800/40">
            <h4 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
              Independent Sources Found ({result.new_sources.length})
            </h4>
            {result.new_sources.slice(0, 5).map((src, idx) => (
              <a
                key={idx}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-zinc-900/50 transition-colors group"
              >
                <span className={cn(
                  "h-1.5 w-1.5 rounded-full shrink-0",
                  src.agrees_with_original ? "bg-emerald-500" : "bg-red-500"
                )} />
                <span className="text-[11px] text-zinc-300 group-hover:text-blue-400 truncate flex-1">
                  {src.domain || "Source"}
                  {src.title && ` — ${src.title.slice(0, 60)}`}
                </span>
                <ExternalLink className="h-3 w-3 text-zinc-600 group-hover:text-zinc-400 shrink-0" />
              </a>
            ))}
          </div>
        )}

        {/* Challenge Queries (developer info) */}
        {result.challenge_queries.length > 0 && (
          <details className="text-[10px] text-zinc-600 pt-1">
            <summary className="cursor-pointer hover:text-zinc-400 transition-colors">
              Search queries used ({result.challenge_queries.length})
            </summary>
            <ul className="mt-1 ml-3 space-y-0.5 list-disc">
              {result.challenge_queries.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </details>
        )}
      </CardContent>
    </Card>
  );
}

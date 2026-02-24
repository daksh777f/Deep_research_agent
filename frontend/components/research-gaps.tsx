"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import type { ResearchGapsProps } from "@/types/research";

const sectionConfig = [
  {
    key: "insufficient_evidence" as const,
    title: "Insufficient Evidence",
    icon: HelpCircle,
    emptyText: "All claims have adequate supporting evidence.",
  },
  {
    key: "unresolved_contradictions" as const,
    title: "Unresolved Contradictions",
    icon: HelpCircle,
    emptyText: "No unresolved contradictions detected.",
  },
  {
    key: "scope_limitations" as const,
    title: "Scope Limitations",
    icon: Search,
    emptyText: "No significant scope limitations identified.",
  },
  {
    key: "suggested_followups" as const,
    title: "Suggested Follow-ups",
    icon: ArrowRight,
    emptyText: "No follow-up actions suggested.",
  },
];

export function ResearchGaps({ gaps, onFollowupClick }: ResearchGapsProps) {
  // Don't render if all sections are empty
  const hasAnyGaps =
    gaps.insufficient_evidence.length > 0 ||
    gaps.unresolved_contradictions.length > 0 ||
    gaps.scope_limitations.length > 0 ||
    gaps.suggested_followups.length > 0;

  if (!hasAnyGaps) return null;

  return (
    <div className="bg-zinc-950/95 border border-white/10 rounded-2xl p-6 space-y-5 backdrop-blur-sm">
      <div>
        <h3 className="text-lg font-bold text-white flex items-center gap-2 tracking-tight">
          Research Gaps & Limitations
        </h3>
        <p className="text-sm text-zinc-400 mt-1">
          Transparency report — areas where this research may be incomplete or uncertain.
        </p>
      </div>
      <div className="space-y-5">
        {sectionConfig.map(({ key, title, icon: Icon, emptyText }) => {
          const items = gaps[key];
          if (items.length === 0) return null;

          return (
            <div key={key}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-zinc-400" />
                <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wide">
                  {title}
                </h4>
                <span className="text-xs text-zinc-500">
                  ({items.length})
                </span>
              </div>
              <ul className="space-y-2.5 ml-6">
                {items.map((item, i) => (
                  <li key={i} className="text-sm text-zinc-300 leading-relaxed list-disc marker:text-zinc-500">
                    {key === "suggested_followups" && onFollowupClick ? (
                      <button
                        onClick={() => onFollowupClick(item)}
                        className="text-left hover:text-white transition-colors cursor-pointer underline underline-offset-2 decoration-white/20 hover:decoration-white/50"
                      >
                        {item}
                      </button>
                    ) : (
                      <span className="line-clamp-2">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

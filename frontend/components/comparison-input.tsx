"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ComparisonInputProps {
  comparisonMode: boolean
  setComparisonMode: (value: boolean) => void
  subjectA: string
  setSubjectA: (value: string) => void
  subjectB: string
  setSubjectB: (value: string) => void
  isExpanded: boolean
  onToggle: () => void
}

export function ComparisonInput({
  comparisonMode,
  setComparisonMode,
  subjectA,
  setSubjectA,
  subjectB,
  setSubjectB,
  isExpanded,
  onToggle,
}: ComparisonInputProps) {
  const hasSubjects = subjectA.trim() || subjectB.trim();
  
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => {
          onToggle();
          if (!isExpanded) {
            setComparisonMode(true);
          }
        }}
        className={cn(
          "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
          isExpanded 
            ? "bg-white/10 text-white border border-white/20" 
            : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
        )}
      >
        <span>Compare Mode</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-zinc-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zinc-400" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 p-3 sm:p-4 bg-black/50 border border-white/10 rounded-xl space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm text-zinc-400">Compare two topics side by side in your research</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1">
              <label className="text-xs text-zinc-400 mb-1.5 block">First Topic</label>
              <Input
                placeholder="e.g., React"
                value={subjectA}
                onChange={(e) => setSubjectA(e.target.value)}
                className="h-10 text-sm bg-black/50 border-white/15 text-white placeholder:text-zinc-600 rounded-lg focus:border-white/30 focus:ring-white/10"
              />
            </div>
            <div className="py-2 sm:pt-5 flex justify-center">
              <div className="px-3 py-1.5 bg-white/15 rounded-lg border border-white/30">
                <span className="text-sm text-white font-semibold">VS</span>
              </div>
            </div>
            <div className="flex-1">
              <label className="text-xs text-zinc-400 mb-1.5 block">Second Topic</label>
              <Input
                placeholder="e.g., Vue"
                value={subjectB}
                onChange={(e) => setSubjectB(e.target.value)}
                className="h-10 text-sm bg-black/50 border-white/15 text-white placeholder:text-zinc-600 rounded-lg focus:border-white/30 focus:ring-white/10"
              />
            </div>
          </div>
          {comparisonMode && (subjectA.trim() || subjectB.trim()) && (
            <button
              type="button"
              onClick={() => {
                setComparisonMode(false);
                setSubjectA("");
                setSubjectB("");
              }}
              className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
              Clear comparison
            </button>
          )}
        </div>
      )}
    </div>
  );
}

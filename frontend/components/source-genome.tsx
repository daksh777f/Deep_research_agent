"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, ExternalLink, AlertTriangle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SourceGenomeProps, CitationHop } from "@/types/research";

const trustColor = (score: number) =>
  score >= 0.7 ? "bg-emerald-500" : score >= 0.4 ? "bg-amber-500" : "bg-red-500";

function HopCard({ hop, isLast }: { hop: CitationHop; isLast: boolean }) {
  return (
    <div className="relative flex gap-3">
      {/* Vertical line */}
      <div className="flex flex-col items-center">
        <div className={cn("h-6 w-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shrink-0", "border-zinc-600 text-zinc-400 bg-zinc-900")}>
          {hop.hop}
        </div>
        {!isLast && <div className="w-px flex-1 bg-zinc-800 min-h-[24px]" />}
      </div>

      <div className="flex-1 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[12px] font-semibold text-zinc-200">{hop.domain || "Unknown"}</span>
          <span className={cn("h-2 w-2 rounded-full", trustColor(hop.domain_trust))} title={`Trust: ${(hop.domain_trust * 100).toFixed(0)}%`} />
          <span className="text-[10px] text-zinc-500 font-mono">{hop.source_type}</span>
        </div>

        {hop.claim_text_at_this_hop && (
          <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-3 mb-1">
            {hop.claim_text_at_this_hop}
          </p>
        )}

        <div className="flex items-center gap-2">
          <a
            href={hop.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-blue-500 hover:text-blue-400 flex items-center gap-1 truncate max-w-[250px]"
          >
            <Globe className="h-3 w-3 shrink-0" />
            {hop.url}
          </a>
          <span className="text-[9px] text-zinc-600 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
            {hop.fetch_method}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SourceGenome({ genome, isOpen, onClose }: SourceGenomeProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg mx-4 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <div>
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <span className="text-lg">🧬</span> Source Genome
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">{genome.source_domain || genome.source_url}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7 text-zinc-400 hover:text-zinc-100">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Distortion Warning */}
        {genome.distortion_detected && (
          <div className="mx-5 mt-3 px-3 py-2 rounded-lg bg-amber-950/40 border border-amber-800/50 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold text-amber-300">Distortion Detected</p>
              <p className="text-[10px] text-amber-400/80 mt-0.5">{genome.distortion_summary}</p>
            </div>
          </div>
        )}

        {/* Citation Chain */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <h4 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Citation Ancestry ({genome.citation_chain.length} hop{genome.citation_chain.length !== 1 ? "s" : ""})
          </h4>
          <div className="space-y-0">
            {genome.citation_chain.map((hop, idx) => (
              <HopCard key={idx} hop={hop} isLast={idx === genome.citation_chain.length - 1} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-zinc-800 flex justify-end">
          <Button variant="outline" size="sm" onClick={onClose} className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

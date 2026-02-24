"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ClaimButton } from "@/components/claim-button";
import type { Claim, ClaimExpanderProps } from "@/types/research";

interface Source {
  url: string;
  reliability?: number;
  agent?: string;
  title?: string;
  content?: string;
  description?: string;
}

/**
 * Build a lookup map from citation markers like "[1]", "[Source 1]" etc.
 * to the matching Claim object.
 */
function buildClaimMap(claims: Claim[]): Map<number, Claim> {
  const map = new Map<number, Claim>();
  for (const claim of claims) {
    // Extract number from marker like "[1]" or "[Source 3]"
    const match = claim.citation_marker.match(/\d+/);
    if (match) {
      map.set(parseInt(match[0], 10), claim);
    }
  }
  return map;
}

/**
 * Intercept citation patterns in text children and replace them with
 * ClaimButton components (if claims exist) or the existing HoverCard
 * source preview (fallback).
 */
/**
 * Normalize full-width Unicode brackets (\u3010\u3011, \uff3b\uff3d) to ASCII [N].
 * Some LLMs emit these instead of standard brackets.
 */
function normalizeCitations(text: string): string {
  return text.replace(/[\u3010\uff3b]\s*(\d+(?:\s*,\s*\d+)*)\s*[\u3011\uff3d]/g, '[$1]');
}

function replaceCitationsWithClaims(
  children: React.ReactNode,
  sources: Source[],
  claimMap: Map<number, Claim>,
  onChallenge?: (marker: string, claimText: string, originalDomains: string[], confidence: number) => void,
  onViewGenome?: (sourceIndex: number) => void,
  isChallenging?: boolean,
): React.ReactNode {
  // Allow processing if claims exist (ClaimButton has its own sources) OR if page-level sources exist (HoverCard fallback)
  if ((!sources || sources.length === 0) && claimMap.size === 0) return children;

  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      // Normalize full-width brackets before matching
      const normalized = normalizeCitations(child);
      // Match [N], [Source N], [Ref N], [Source 1, 2, 3] etc.
      const regex = /(\[(?:Source\s+|Ref\s+)?[\d]+(?:\s*,\s*\d+)*\]|\(Source\s+[\d,\s]+\))/gi;
      const parts = normalized.split(regex);

      return parts.map((part, i) => {
        const citationMatch = part.match(
          /^[\[(](?:Source\s+|Ref\s+)?([\d]+(?:\s*,\s*\d+)*)[\])]$/i
        );

        if (citationMatch) {
          const indices = citationMatch[1]
            .split(",")
            .map((s) => parseInt(s.trim(), 10))
            .filter((n) => !isNaN(n));

          // If we have claims data, render ClaimButtons
          if (claimMap.size > 0) {
            return (
              <React.Fragment key={i}>
                {indices.map((idx) => {
                  const claim = claimMap.get(idx);
                  if (claim) {
                    return (
                      <ClaimButton
                        key={`claim-${idx}`}
                        marker={claim.citation_marker}
                        claimText={claim.claim_text}
                        sources={claim.sources}
                        onChallenge={onChallenge}
                        onViewGenome={onViewGenome}
                        isChallenging={isChallenging}
                      />
                    );
                  }
                  // Fallback: simple badge for unmatched index
                  return (
                    <span
                      key={`ref-${idx}`}
                      className="inline-flex items-center px-1.5 py-0.5 mx-0.5 text-[11px] font-semibold rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      [{idx}]
                    </span>
                  );
                })}
              </React.Fragment>
            );
          }

          // Fallback: use hover-card source preview (like original markdown.tsx)
          const sourceIndices = indices.map((n) => n - 1);
          const validSources = sourceIndices
            .map((si) => ({ source: sources[si], index: si }))
            .filter((item) => item.source !== undefined);

          if (validSources.length === 0) return part;

          const firstSource = validSources[0].source;
          let mainLabel = "Source";
          try {
            if (firstSource.url) {
              const hostname = new URL(firstSource.url).hostname.replace(
                /^www\./,
                ""
              );
              mainLabel =
                hostname.split(".")[0].charAt(0).toUpperCase() +
                hostname.split(".")[0].slice(1);
            }
          } catch { /* ignore */ }

          const count = validSources.length;
          const label =
            count > 1 ? `${mainLabel} +${count - 1}` : mainLabel;

          return (
            <HoverCard key={i} openDelay={200}>
              <HoverCardTrigger asChild>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 align-middle text-[11px] font-medium rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-900/50 cursor-pointer hover:bg-cyan-900/70 transition-colors select-none">
                  {label}
                </span>
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[450px] p-0 border-zinc-800 bg-[#09090b] shadow-2xl rounded-xl z-50"
                align="start"
                sideOffset={4}
              >
                <div className="px-3 py-2 border-b border-zinc-900/50 flex items-center justify-between">
                  <p className="text-[11px] font-medium text-zinc-500">
                    Sources · {count}
                  </p>
                </div>
                <div className="p-1.5 space-y-0.5 max-h-[400px] overflow-y-auto">
                  {validSources.map(({ source, index }, j) => {

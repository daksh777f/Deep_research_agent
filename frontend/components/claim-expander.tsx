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
                    let hostname = "";
                    try {
                      hostname = new URL(source.url).hostname.replace(
                        "www.",
                        ""
                      );
                    } catch { /* noop */ }
                    const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
                    const snippet =
                      source.description ||
                      (source.content
                        ? source.content.slice(0, 120) +
                          (source.content.length > 120 ? "..." : "")
                        : undefined);

                    return (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="h-4 w-4 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0 border border-zinc-700/50 mt-0.5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={faviconUrl}
                            alt=""
                            className="h-2.5 w-2.5 object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-[12px] font-semibold text-zinc-200 leading-snug line-clamp-1 group-hover:text-blue-400 transition-colors truncate">
                              {source.title || hostname || "Source"}
                            </p>
                            <span className="text-[9px] text-zinc-600 font-mono shrink-0">
                              #{index + 1}
                            </span>
                          </div>
                          {snippet && (
                            <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2">
                              {snippet}
                            </p>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        }

        return part;
      });
    }
    return child;
  });
}

export function ClaimExpander({
  content,
  sources = [],
  claims = [],
  className,
  onChallenge,
  onViewGenome,
  isChallenging,
}: ClaimExpanderProps) {
  const claimMap = buildClaimMap(claims);

  // Strip markdown code blocks if present (LLM often wraps output)
  const cleanedContent = content
    .replace(/^```markdown\n?/, "")
    .replace(/^```\n?/, "")
    .replace(/\n?```$/, "");

  return (
    <div className={cn("prose prose-invert max-w-none break-words", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ className: cls, node: _n, ...props }) => (
            <h1 className={cn("mt-2 scroll-m-20 text-3xl font-bold tracking-tight text-white/90", cls)} {...props} />
          ),
          h2: ({ className: cls, node: _n, ...props }) => (
            <h2 className={cn("mt-10 scroll-m-20 border-b border-zinc-800 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-zinc-100", cls)} {...props} />
          ),
          h3: ({ className: cls, node: _n, ...props }) => (
            <h3 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-zinc-200", cls)} {...props} />
          ),
          h4: ({ className: cls, node: _n, ...props }) => (
            <h4 className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-zinc-300", cls)} {...props} />
          ),
          h5: ({ className: cls, node: _n, ...props }) => (
            <h5 className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight text-zinc-300", cls)} {...props} />
          ),
          h6: ({ className: cls, node: _n, ...props }) => (
            <h6 className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight text-zinc-400", cls)} {...props} />
          ),
          a: ({ className: cls, href, children, node: _n, ...props }) => (
            <a
              href={href}
              className={cn("font-medium underline underline-offset-4 text-blue-400 hover:text-blue-300 transition-colors", cls)}
              {...props}
            >
              {children}
            </a>
          ),
          // Render paragraphs as divs to avoid invalid nesting
          p: ({ className: cls, children, node: _n, ...props }) => (
            <div role="group" className={cn("leading-7 [&:not(:first-child)]:mt-6 text-zinc-300", cls)} {...props}>
              {replaceCitationsWithClaims(children, sources, claimMap, onChallenge, onViewGenome, isChallenging)}
            </div>
          ),
          li: ({ className: cls, children, node: _n, ...props }) => (
            <li className={cn("mt-2", cls)} {...props}>
              {replaceCitationsWithClaims(children, sources, claimMap, onChallenge, onViewGenome, isChallenging)}
            </li>
          ),
          blockquote: ({ className: cls, node: _n, ...props }) => (
            <blockquote className={cn("mt-6 border-l-2 border-zinc-700 pl-6 italic text-zinc-400", cls)} {...props} />
          ),
          img: ({ className: cls, alt, node: _n, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={cn("rounded-md border border-zinc-800 bg-zinc-900 my-4", cls)} alt={alt} {...props} />
          ),
          hr: ({ node: _n, ...props }) => <hr className="my-8 border-zinc-800" {...props} />,
          table: ({ className: cls, node: _n, ...props }) => (
            <div className="my-6 w-full overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-900/30">
              <table className={cn("w-full caption-bottom text-sm", cls)} {...props} />
            </div>
          ),
          tr: ({ className: cls, node: _n, ...props }) => (
            <tr className={cn("m-0 border-b border-zinc-800 p-0 even:bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors", cls)} {...props} />
          ),
          th: ({ className: cls, node: _n, ...props }) => (
            <th className={cn("border-zinc-800 px-4 py-3 text-left font-bold text-zinc-100 [&[align=center]]:text-center [&[align=right]]:text-right bg-zinc-900/80", cls)} {...props} />
          ),
          td: ({ className: cls, node: _n, ...props }) => (
            <td className={cn("border-zinc-800 px-4 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right text-zinc-300", cls)} {...props} />
          ),
          pre: ({ className: cls, node: _n, ...props }) => (
            <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 py-4 px-4 text-zinc-200", cls)} {...props} />
          ),
          code: ({ className: cls, node: _n, ...props }) => (
            <code className={cn("relative rounded bg-zinc-900 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-zinc-200 border border-zinc-800", cls)} {...props} />
          ),
        }}
      >
        {cleanedContent}
      </ReactMarkdown>
    </div>
  );
}

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { SourceCard } from "@/components/source-card";
import { Button } from "@/components/ui/button";

interface Source {
    url: string;
    reliability?: number;
    agent?: string;
    title?: string;
    content?: string;
    description?: string;
}

interface MarkdownProps {
    content: string;
    className?: string;
    sources?: Source[];
}

const CitationGroup = ({ indices, sources }: { indices: number[], sources: Source[] }) => {
    // Filter out invalid indices
    const validSources = indices
        .map(i => ({ source: sources[i], index: i }))
        .filter(item => item.source !== undefined);

    if (validSources.length === 0) return null;

    const firstSource = validSources[0].source;
    let mainLabel = "Source";
    try {
        if (firstSource.url) {
            // Get domain name without www. and extension
            const hostname = new URL(firstSource.url).hostname.replace(/^www\./, '');
            mainLabel = hostname.split('.')[0];
            // Capitalize first letter
            mainLabel = mainLabel.charAt(0).toUpperCase() + mainLabel.slice(1);
        }
    } catch (e) { }

    const count = validSources.length;
    // Perplexity style: "TechCrunch +2"
    const label = count > 1 ? `${mainLabel} +${count - 1}` : mainLabel;

    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 align-middle text-[11px] font-medium rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-900/50 cursor-pointer hover:bg-cyan-900/70 transition-colors select-none">
                    {label}
                </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-[450px] p-0 border-zinc-800 bg-[#09090b] shadow-2xl rounded-xl z-50" align="start" sideOffset={4}>
                <div className="px-3 py-2 border-b border-zinc-900/50 flex items-center justify-between">
                    <p className="text-[11px] font-medium text-zinc-500">Sources · {count}</p>
                </div>
                <div className="p-1.5 space-y-0.5 max-h-[400px] overflow-y-auto">
                    {validSources.map(({ source, index }, i) => {
                        let hostname = "";
                        try {
                            hostname = new URL(source.url).hostname.replace("www.", "");
                        } catch (e) { }

                        const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
                        const snippet = source.description || (source.content ? source.content.slice(0, 120) + (source.content.length > 120 ? "..." : "") : undefined);

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
                        )
                    })}
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

/**
 * Normalize full-width Unicode brackets (\u3010\u3011, \uff3b\uff3d) to ASCII [N].
 */
function normalizeCitations(text: string): string {
    return text.replace(/[\u3010\uff3b]\s*(\d+(?:\s*,\s*\d+)*)\s*[\u3011\uff3d]/g, '[$1]');
}

const replaceCitations = (children: React.ReactNode, sources: Source[] = []) => {
    if (!sources || sources.length === 0) return children;

    return React.Children.map(children, (child) => {
        if (typeof child === 'string') {
            // Normalize full-width brackets before matching
            const normalized = normalizeCitations(child);
            // Regex to match [N], (Source 1), [Source 1], (Source 1, 2) etc.
            const regex = /([(\[](?:Source\s+)?[\d]+(?:[\s,]+\d+)*[)\]])/gi;
            const parts = normalized.split(regex);

            return parts.map((part, i) => {
                // Match [N], [Source N], (Source N), [N, N] etc.
                const isCitation = part.match(/^[(\[](?:Source\s+)?(\d[\d,\s]*)[)\]]$/i);
                if (isCitation) {
                    // Extract all numbers

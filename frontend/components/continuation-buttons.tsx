"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Search,
  Scale,
  Lightbulb,
  TrendingUp,
  FileText,
  Download,
  Share2,
  BookOpen,
  Presentation,
  CheckSquare,
  Loader2,
  SendHorizonal,
  type LucideIcon,
} from "lucide-react";
import type { ContinuationButtonsProps, Continuation } from "@/types/research";

/** Map string icon names to actual lucide components */
const iconMap: Record<string, LucideIcon> = {
  Search,
  Scale,
  Lightbulb,
  TrendingUp,
  FileText,
  Download,
  Share2,
  BookOpen,
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] || Search;
}

const exportActions = [
  { label: "PDF", format: "pdf", icon: FileText },
  { label: "Markdown", format: "markdown", icon: Download },
  { label: "PPTX", format: "pptx", icon: Presentation },
  { label: "DOCX", format: "docx", icon: FileText },
  { label: "Checklist", format: "checklist", icon: CheckSquare },
  { label: "Citation", format: "bibtex", icon: BookOpen },
];

export function ContinuationButtons({
  continuations,
  sessionId,
  onFollowupClick,
  onExportClick,
}: ContinuationButtonsProps) {
  const [loadingFormat, setLoadingFormat] = useState<string | null>(null);
  const [followUpQuery, setFollowUpQuery] = useState("");

  if (!continuations || continuations.length === 0) return null;

  const handleExport = async (format: string) => {
    if (format === "bibtex") {
      toast.info("Citation export coming soon", { description: "BibTeX citation export will be available in a future update." });
      onExportClick(format);
      return;
    }

    if (!sessionId) {
      toast.error("No active session for export");
      return;
    }

    setLoadingFormat(format);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${apiUrl}/api/research/${sessionId}/export`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ format }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "Export failed" }));
        throw new Error(err.detail || "Export failed");
      }

      const blob = await res.blob();
      const ext = format === "checklist" ? "md" : format === "markdown" ? "md" : format;
      const filename = `research-report.${ext}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(`${format.toUpperCase()} exported`, { description: `Downloaded ${filename}` });
    } catch (err: any) {
      toast.error("Export failed", { description: err.message });
    } finally {
      setLoadingFormat(null);
    }
    onExportClick(format);
  };

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Research Continuations */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-zinc-500" />
          Continue Researching
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {continuations.map((cont, i) => {
            const IconComp = getIcon(cont.icon);
            return (
              <button
                key={i}
                onClick={() => onFollowupClick(cont.query)}
                className={cn(
                  "group flex items-start gap-3 p-3 rounded-lg border border-zinc-800",
                  "bg-zinc-950/50 hover:bg-zinc-900/70 hover:border-zinc-700",
                  "transition-all duration-200 text-left cursor-pointer"
                )}
              >
                <span className="h-8 w-8 rounded-lg bg-zinc-800/60 flex items-center justify-center shrink-0 group-hover:bg-zinc-700/60 transition-colors">
                  <IconComp className="h-4 w-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[13px] font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {cont.label}
                  </span>
                  <span className="block text-[11px] text-zinc-500 mt-0.5 line-clamp-2">
                    {cont.reason}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Follow-up question input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const q = followUpQuery.trim();
            if (!q) return;
            onFollowupClick(q);
            setFollowUpQuery("");
          }}
          className="mt-3 flex items-center gap-2"
        >
          <input
            type="text"
            value={followUpQuery}
            onChange={(e) => setFollowUpQuery(e.target.value)}
            placeholder="Ask a follow-up question..."
            className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-colors"
          />
          <button
            type="submit"
            disabled={!followUpQuery.trim()}
            className="h-9 w-9 rounded-lg border border-zinc-800 bg-zinc-950/50 flex items-center justify-center text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 hover:border-zinc-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <SendHorizonal className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* Export Actions */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
          <Download className="h-3.5 w-3.5 text-zinc-500" />
          Export & Share
        </h3>
        <div className="flex flex-wrap gap-2">
          {exportActions.map((action) => {
            const IconComp = action.icon;
            const isLoading = loadingFormat === action.format;
            return (
              <Button
                key={action.format}
                variant="outline"
                size="sm"
                disabled={isLoading}
                onClick={() => handleExport(action.format)}
                className="border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 hover:border-zinc-700 gap-1.5 text-xs disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <IconComp className="h-3 w-3" />}
                {action.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState, useMemo } from "react";
import { X, Maximize2, Minimize2, Shield, FileText, Link2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { EvidenceGraphProps, GraphNode, GraphEdge } from "@/types/research";

/* ─── Helpers ─────────────────────────────────────────────────────── */

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n) + "…" : s;
}

function confidenceColor(c: number) {
  if (c >= 0.75) return "text-emerald-400";
  if (c >= 0.5) return "text-amber-400";
  return "text-red-400";
}

function confidenceBg(c: number) {
  if (c >= 0.75) return "bg-emerald-500";
  if (c >= 0.5) return "bg-amber-500";
  return "bg-red-500";
}

function reliabilityBar(score: number) {
  const pct = Math.round(score * 100);
  const color = score >= 0.7 ? "bg-emerald-500" : score >= 0.4 ? "bg-amber-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[10px] text-zinc-500 font-mono w-8 text-right">{pct}%</span>
    </div>
  );
}

/* ─── Edge stats ──────────────────────────────────────────────────── */

interface EdgeStats {
  supports: number;
  contradicts: number;
  mentions: number;
}

function computeEdgeStats(edges: GraphEdge[], nodeId: string, isSource: boolean): EdgeStats {
  const filtered = edges.filter(e => isSource ? e.target === nodeId : e.source === nodeId);
  return {
    supports: filtered.filter(e => e.relation === "supports").length,
    contradicts: filtered.filter(e => e.relation === "contradicts").length,
    mentions: filtered.filter(e => e.relation !== "supports" && e.relation !== "contradicts").length,
  };
}

/* ─── SVG Bipartite Layout ────────────────────────────────────────── */

interface LayoutNode {
  id: string;
  x: number;
  y: number;
  data: GraphNode;
}

function computeLayout(
  claims: GraphNode[],
  sources: GraphNode[],
  width: number,
  height: number,
): { claimNodes: LayoutNode[]; sourceNodes: LayoutNode[] } {
  const pad = 60;
  const claimX = width * 0.22;
  const sourceX = width * 0.78;

  const claimSpacing = Math.min(60, (height - pad * 2) / Math.max(claims.length, 1));
  const sourceSpacing = Math.min(50, (height - pad * 2) / Math.max(sources.length, 1));

  const claimStartY = (height - (claims.length - 1) * claimSpacing) / 2;
  const sourceStartY = (height - (sources.length - 1) * sourceSpacing) / 2;

  const claimNodes = claims.map((c, i) => ({
    id: c.id,
    x: claimX,
    y: claimStartY + i * claimSpacing,
    data: c,
  }));

  const sourceNodes = sources.map((s, i) => ({
    id: s.id,
    x: sourceX,
    y: sourceStartY + i * sourceSpacing,
    data: s,
  }));

  return { claimNodes, sourceNodes };
}

/* ─── Main Component ──────────────────────────────────────────────── */

export function EvidenceGraph({ sessionId, isOpen, onClose }: EvidenceGraphProps) {
  const [data, setData] = useState<{ nodes: GraphNode[]; edges: GraphEdge[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "supports" | "contradicts">("all");

  useEffect(() => {
    if (!isOpen || !sessionId) return;
    setLoading(true);
    setError(null);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    fetch(`${apiUrl}/api/research/${sessionId}/graph`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch graph");
        return r.json();
      })
      .then((d) => {
        setData(d as { nodes: GraphNode[]; edges: GraphEdge[] });
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [isOpen, sessionId]);

  const claims = useMemo(() => data?.nodes.filter(n => n.type === "claim") ?? [], [data]);
  const sources = useMemo(() => data?.nodes.filter(n => n.type === "source") ?? [], [data]);

  const filteredEdges = useMemo(() => {
    if (!data) return [];
    if (filter === "all") return data.edges;
    return data.edges.filter(e => e.relation === filter);
  }, [data, filter]);

  // Which edges are highlighted (connected to selected or hovered node)
  const activeNodeId = selectedNode || hoveredNode;
  const connectedEdges = useMemo(() => {
    if (!activeNodeId || !data) return new Set<string>();
    return new Set(
      filteredEdges
        .filter(e => e.source === activeNodeId || e.target === activeNodeId)
        .map((e, i) => `${e.source}-${e.target}-${i}`)
    );
  }, [activeNodeId, filteredEdges, data]);

  const connectedNodeIds = useMemo(() => {
    if (!activeNodeId || !data) return new Set<string>();
    const ids = new Set<string>();
    ids.add(activeNodeId);
    filteredEdges.forEach(e => {
      if (e.source === activeNodeId) ids.add(e.target);
      if (e.target === activeNodeId) ids.add(e.source);
    });
    return ids;
  }, [activeNodeId, filteredEdges, data]);

  // Layout dimensions
  const svgWidth = 900;
  const svgHeight = Math.max(500, Math.max(claims.length, sources.length) * 60 + 120);
  const { claimNodes, sourceNodes } = useMemo(
    () => computeLayout(claims, sources, svgWidth, svgHeight),
    [claims, sources, svgWidth, svgHeight]
  );

  const allLayoutNodes = useMemo(() => {
    const map = new Map<string, LayoutNode>();
    claimNodes.forEach(n => map.set(n.id, n));
    sourceNodes.forEach(n => map.set(n.id, n));
    return map;
  }, [claimNodes, sourceNodes]);

  // Summary stats
  const stats = useMemo(() => {
    if (!data) return { supports: 0, contradicts: 0, mentions: 0 };
    return {
      supports: data.edges.filter(e => e.relation === "supports").length,
      contradicts: data.edges.filter(e => e.relation === "contradicts").length,
      mentions: data.edges.filter(e => e.relation !== "supports" && e.relation !== "contradicts").length,
    };
  }, [data]);

  // Selected node detail
  const selectedDetail = useMemo(() => {
    if (!selectedNode || !data) return null;
    const node = data.nodes.find(n => n.id === selectedNode);
    if (!node) return null;
    const isSource = node.type === "source";
    const edgeStats = computeEdgeStats(data.edges, selectedNode, isSource);
    const connected = data.edges
      .filter(e => isSource ? e.target === selectedNode : e.source === selectedNode)
      .map(e => {
        const otherId = isSource ? e.source : e.target;
        const otherNode = data.nodes.find(n => n.id === otherId);
        return { relation: e.relation, strength: e.strength, node: otherNode };
      });
    return { node, edgeStats, connected, isSource };
  }, [selectedNode, data]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={cn(
        "bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden",
        isFullscreen ? "w-full h-full rounded-none" : "w-[95vw] max-w-6xl h-[85vh] mx-4"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <Link2 className="h-4 w-4 text-blue-400" />
              Evidence Graph
            </h3>
            {data && (
              <div className="flex items-center gap-3 ml-3 text-[10px] text-zinc-500">
                <span>{claims.length} claims</span>
                <span className="text-zinc-700">·</span>
                <span>{sources.length} sources</span>
                <span className="text-zinc-700">·</span>
                <span>{data.edges.length} edges</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-400 hover:text-zinc-100" onClick={() => setIsFullscreen(!isFullscreen)}>
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-400 hover:text-zinc-100" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filter Bar */}
        {data && data.nodes.length > 0 && (
          <div className="px-5 py-2 border-b border-zinc-800/50 flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-zinc-600 uppercase tracking-wider mr-2">Filter:</span>
            {(["all", "supports", "contradicts"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-medium transition-all border",
                  filter === f
                    ? f === "supports" ? "bg-emerald-950/60 text-emerald-400 border-emerald-800"
                      : f === "contradicts" ? "bg-red-950/60 text-red-400 border-red-800"
                      : "bg-zinc-800 text-zinc-200 border-zinc-700"
                    : "bg-transparent text-zinc-500 border-zinc-800/50 hover:text-zinc-300 hover:border-zinc-700"
                )}
              >
                {f === "all" ? "All Edges" : f === "supports" ? `Supports (${stats.supports})` : `Contradicts (${stats.contradicts})`}
              </button>
            ))}
            <div className="flex-1" />
            {/* Legend */}
            <div className="flex items-center gap-3 text-[10px] text-zinc-500">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500 inline-block" /> Claim</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" /> Source</span>
              <span className="flex items-center gap-1"><span className="h-3 w-0.5 bg-emerald-500/60 inline-block rounded" /> Support</span>
              <span className="flex items-center gap-1"><span className="h-3 w-0.5 bg-red-500/60 inline-block rounded" /> Contradict</span>
              <span className="flex items-center gap-1"><span className="h-3 w-0.5 bg-zinc-600 inline-block rounded" /> Mention</span>
            </div>
          </div>
        )}

        {/* Content */}

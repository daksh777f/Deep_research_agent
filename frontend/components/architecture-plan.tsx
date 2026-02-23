"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

interface ArchitecturePlan {
    metadata: {
        system_name: string;
        dau: number;
        compliance_requirements: string[];
        confidence_score?: number;
    };
    executive_summary: string;
    system_diagram: {
        format: string;
        diagram: string;
    };
    components: Array<{
        name: string;
        purpose: string;
        technology: string;
        sla: Record<string, string>;
    }>;
    technology_stack: Array<{
        component: string;
        technology: string;
        reasoning: string;
        pros: string[];
        cons: string[];
        cost_monthly_usd: number;
    }>;
    cost_model: {
        total_monthly_cost: {
            total_usd: number;
            llm_cost_usd: number;
            infrastructure_cost_usd: number;
        };
    };
    risk_mitigation: Array<{
        risk: string;
        probability: string;
        impact: string;
        mitigation: string[];
        rto: string;
    }>;
    deployment_architecture: any;
    scalability_strategy: any;
    observability_plan: any;
    security_compliance: any;
    future_evolution: any;
}

interface ArchitecturePlanProps {
    architecture: ArchitecturePlan | null;
    loading?: boolean;
    error?: string | null;
    onGenerateRunbook?: (targetCloud: string) => void;
}

export function ArchitecturePlanDisplay({
    architecture,
    loading = false,
    error = null,
    onGenerateRunbook,
}: ArchitecturePlanProps) {
    const [expandedRisk, setExpandedRisk] = useState<number | null>(null);
    const [selectedCloud, setSelectedCloud] = useState<string>("gcp");
    const [activeTab, setActiveTab] = useState<string>("summary");

    if (loading) {
        return (
            <div className="space-y-4 p-6">
                <Skeleton className="h-8 w-80 bg-white/10" />
                <Skeleton className="h-64 w-full bg-white/10" />
                <Skeleton className="h-32 w-full bg-white/10" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert className="bg-black/50 border-white/10">
                <p className="text-red-400">Architecture generation failed: {error}</p>
            </Alert>
        );
    }

    if (!architecture) {
        return (
            <Alert className="bg-black/50 border-white/10">
                <p className="text-zinc-400">
                    No architecture plan generated yet. Generate one from your research findings above.
                </p>
            </Alert>
        );
    }

    const totalMonthlyCost = (
        architecture.cost_model.total_monthly_cost.total_usd || 0
    ).toFixed(2);
    const llmCost = (
        architecture.cost_model.total_monthly_cost.llm_cost_usd || 0
    ).toFixed(2);
    const infraCost = (
        architecture.cost_model.total_monthly_cost.infrastructure_cost_usd || 0
    ).toFixed(2);

    return (
        <div className="space-y-6 p-6 bg-black/50 rounded-2xl border border-white/10">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                    {architecture.metadata.system_name} - Production Architecture
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <span>{architecture.metadata.dau.toLocaleString()} DAU</span>
                    <span>{architecture.metadata.compliance_requirements.join(", ")}</span>
                    {architecture.metadata.confidence_score && (
                        <span>{(architecture.metadata.confidence_score * 100).toFixed(0)}% confidence</span>
                    )}
                </div>
            </div>

            {/* Tabs for different sections */}
            <div className="w-full">
                <div className="flex gap-2 border-b border-white/10 overflow-x-auto">
                    {[{value: "summary", label: "Summary"}, {value: "diagram", label: "System Diagram"}, {value: "tech-stack", label: "Tech Stack"}, {value: "risks", label: "Risks"}].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === tab.value
                                    ? "text-white border-white/50"
                                    : "text-zinc-400 hover:text-white border-transparent hover:border-white/30"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Summary Tab */}
                {activeTab === "summary" && (
                    <div className="mt-6">
                        <div className="prose prose-invert max-w-none">
                            <div className="bg-black/50 p-4 rounded-xl border border-white/10 text-zinc-300 text-sm leading-relaxed">
                                <p>{architecture.executive_summary}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* System Diagram Tab */}
                {activeTab === "diagram" && (
                    <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-bold text-white">System Architecture</h3>
                        <Card className="bg-black/50 border-white/10 p-4 rounded-xl">
                            <pre className="text-xs text-zinc-400 overflow-x-auto max-h-96">
                                {architecture.system_diagram.diagram}
                            </pre>
                        </Card>
                    </div>
                )}

                {/* Tech Stack Tab */}
                {activeTab === "tech-stack" && (
                    <div className="mt-6 space-y-4">
                        <Card className="bg-black/50 border-white/10 rounded-xl">
                            <div className="p-4">
                                <h3 className="font-bold text-white mb-3">Key Technologies</h3>
                                <div className="space-y-2">
                                    {architecture.technology_stack.slice(0, 5).map((tech, idx) => (
                                        <div key={idx} className="text-sm text-zinc-300">

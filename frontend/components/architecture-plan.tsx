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
                                            <p className="font-semibold text-white">{tech.component}</p>
                                            <p className="text-xs text-zinc-500">{tech.technology}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        <h3 className="text-lg font-bold text-white">Core Components</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {architecture.components.slice(0, 6).map((comp, idx) => (
                                <Card key={idx} className="bg-black/50 border-white/10 p-3 rounded-xl">
                                    <h4 className="font-bold text-white text-sm mb-1">{comp.name}</h4>
                                    <p className="text-xs text-zinc-400 mb-2">{comp.purpose}</p>
                                    <p className="text-xs text-zinc-500">
                                        <strong className="text-zinc-400">Tech:</strong> {comp.technology}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        <strong className="text-zinc-400">SLA:</strong> {comp.sla?.latency_p99 || comp.sla?.availability}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Costs Tab */}
                {activeTab === "costs" && (
                    <div className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="bg-black/50 border-white/10 rounded-xl">
                                <div className="p-4">
                                    <h3 className="font-bold text-white mb-3">Monthly Costs</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-zinc-400">
                                            <span>LLM & Models</span>
                                            <span className="text-white font-semibold">${llmCost}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-zinc-400">
                                            <span>Infrastructure</span>
                                            <span className="text-white font-semibold">${infraCost}</span>
                                        </div>
                                        <div className="h-px bg-white/10 my-2" />
                                        <div className="flex justify-between text-base font-bold text-white">
                                            <span>Total</span>
                                            <span>${totalMonthlyCost}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Risks Tab */}
                {activeTab === "risks" && (
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-white mb-3">Production Risks & Mitigation</h3>
                        <div className="space-y-2">
                            {architecture.risk_mitigation.slice(0, 4).map((risk, idx) => (
                                <Card
                                    key={idx}
                                    className="bg-black/50 border-white/10 p-3 cursor-pointer hover:bg-white/5 rounded-xl transition-colors"
                                    onClick={() => setExpandedRisk(expandedRisk === idx ? null : idx)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{risk.risk}</h4>
                                            <p className="text-xs text-zinc-500 mt-1">
                                                <strong className="text-zinc-400">Probability:</strong> {risk.probability} | <strong className="text-zinc-400">RTO:</strong> {risk.rto}
                                            </p>
                                        </div>
                                        <span className="text-xl text-zinc-500">
                                            {expandedRisk === idx ? "−" : "+"}
                                        </span>
                                    </div>
                                    {expandedRisk === idx && (
                                        <div className="mt-3 pt-3 border-t border-white/10">
                                            <p className="text-xs text-zinc-300 mb-2">
                                                <strong className="text-zinc-400">Impact:</strong> {risk.impact}
                                            </p>
                                            <p className="text-xs text-zinc-400">
                                                <strong>Mitigation:</strong>
                                            </p>
                                            <ul className="list-disc list-inside text-xs text-zinc-500 mt-1">
                                                {risk.mitigation.map((m, midx) => (
                                                    <li key={midx}>{m}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Deployment Runbook */}
            <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">Deployment Guide</h3>
                <div className="space-y-3">
                    <p className="text-sm text-zinc-400">
                        Generate a deployment runbook for your target cloud platform:
                    </p>
                    <div className="flex gap-2">
                        {["gcp", "aws", "azure"].map((cloud) => (
                            <button
                                key={cloud}
                                onClick={() => setSelectedCloud(cloud)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-lg uppercase transition-colors ${
                                    selectedCloud === cloud
                                        ? "bg-white/15 text-white border border-white/30"
                                        : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                                }`}
                            >
                                {cloud}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => onGenerateRunbook?.(selectedCloud)}
                        className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/10 transition-colors"
                    >
                        Generate {selectedCloud.toUpperCase()} Runbook
                    </button>
                </div>
            </div>

            {/* Scalability Roadmap */}
            <div>
                <h3 className="text-lg font-bold text-white mb-3">Scalability Roadmap</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {Object.entries(architecture.scalability_strategy)
                        .filter(([key]) => key.includes("phase"))
                        .map(([phase, details]: [string, any], idx) => (
                            <Card key={idx} className="bg-black/50 border-white/10 p-3 rounded-xl">
                                <h4 className="font-bold text-white text-sm mb-2 capitalize">
                                    {phase.replace(/_/g, " ")}
                                </h4>
                                <div className="text-xs text-zinc-400 space-y-1">
                                    {typeof details === "object" &&
                                        Object.entries(details)
                                            .slice(0, 3)
                                            .map(([key, val]: [string, any], vidx) => (
                                                <div key={vidx}>
                                                    <strong className="text-zinc-500">{key.replace(/_/g, " ")}:</strong>
                                                    <p className="text-zinc-600 line-clamp-1">
                                                        {typeof val === "string" ? val : JSON.stringify(val).substring(0, 50)}
                                                    </p>
                                                </div>
                                            ))}
                                </div>
                            </Card>
                        ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-black/50 border border-white/10 p-4 rounded-xl text-center">
                <p className="text-sm text-zinc-400 mb-3">
                    Ready to deploy? Generate a detailed runbook and start building production infrastructure.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg border border-white/10 transition-colors text-sm">
                        Download Architecture PDF
                    </button>
                    <button className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/5 font-medium rounded-lg border border-white/10 transition-colors text-sm">
                        Share with Team
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArchitecturePlanDisplay;

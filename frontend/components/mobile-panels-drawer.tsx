"use client";

import React from "react";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrustPanel } from "@/components/trust-panel";
import { MetricsPanel } from "@/components/metrics-panel";
import type { MobilePanelsDrawerProps } from "@/types/research";

export function MobilePanelsDrawer({
  trustMetrics,
  researchMetrics,
  isDeveloperMode,
  onContradictionClick,
}: MobilePanelsDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size="sm"
          className="fixed bottom-6 right-6 z-50 xl:hidden shadow-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 gap-2 rounded-full px-4"
        >
          <BarChart3 className="h-4 w-4" />
          Research Stats
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-950 border-zinc-800 max-h-[80vh]">
        <DrawerHeader className="pb-2">
          <DrawerTitle className="text-zinc-200 text-sm">Research Stats & Trust</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="px-4 pb-6 max-h-[calc(80vh-60px)]">
          <div className="space-y-4">
            {trustMetrics && (
              <TrustPanel
                metrics={trustMetrics}
                onContradictionClick={onContradictionClick}
              />
            )}
            {researchMetrics && (
              <MetricsPanel
                metrics={researchMetrics}
                isDeveloperMode={isDeveloperMode}
              />
            )}
            {!trustMetrics && !researchMetrics && (
              <p className="text-sm text-zinc-500 text-center py-8">
                No metrics available yet.
              </p>
            )}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

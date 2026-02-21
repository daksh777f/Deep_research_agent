"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import type { DeveloperModeToggleProps } from "@/types/research";

export function DeveloperModeToggle({ enabled, onToggle }: DeveloperModeToggleProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Code2 className={cn("h-3.5 w-3.5", enabled ? "text-cyan-400" : "text-zinc-400")} />
      <span className={cn("text-[13px]", enabled ? "text-cyan-400" : "text-zinc-400")}>
        Developer Mode
      </span>
      <Switch checked={enabled} onCheckedChange={onToggle} />
    </label>
  );
}

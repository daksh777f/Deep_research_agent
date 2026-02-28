"use client"

import { cn } from "@/lib/utils"
import type { OutputMode, ModeSelectorProps } from "@/types/research"

const modes: {
  id: OutputMode
  label: string
  time: string
}[] = [
  { id: "quick", label: "Quick", time: "30s" },
  { id: "deep", label: "Deep", time: "2m" },
  { id: "technical", label: "Technical", time: "3m" },
]

export function ModeSelector({ selected, onChange }: ModeSelectorProps) {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
      {modes.map((mode) => {
        const isSelected = selected === mode.id
        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => onChange(mode.id)}
            className={cn(
              "group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              isSelected
                ? "bg-white/15 text-white border border-white/30"
                : "text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent"
            )}
          >
            <span className="font-medium">{mode.label}</span>
            <span className={cn(
              "text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium",
              isSelected ? "bg-white/20 text-white" : "text-zinc-500"
            )}>
              {mode.time}
            </span>
          </button>
        )
      })}
    </div>
  )
}

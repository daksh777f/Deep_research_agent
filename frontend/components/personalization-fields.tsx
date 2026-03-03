"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type {
  AudienceType,
  ExpertiseLevel,
} from "@/types/research"

interface PersonalizationFieldsProps {
  audience: AudienceType
  expertiseLevel: ExpertiseLevel
  onAudienceChange: (value: AudienceType) => void
  onExpertiseLevelChange: (value: ExpertiseLevel) => void
  isExpanded: boolean
  onToggle: () => void
}

const audienceOptions: { value: AudienceType; label: string }[] = [
  { value: "myself", label: "Just me" },
  { value: "team", label: "My team" },
  { value: "executive", label: "Executive" },
  { value: "client", label: "Client" },
  { value: "academic", label: "Academic" },
]

const expertiseOptions: { value: ExpertiseLevel; label: string }[] = [
  { value: "beginner", label: "New here" },
  { value: "intermediate", label: "Know some" },
  { value: "expert", label: "Expert" },
]

function audienceLabel(val: AudienceType): string {
  return audienceOptions.find((o) => o.value === val)?.label ?? val
}

export function PersonalizationFields({
  audience,
  expertiseLevel,
  onAudienceChange,
  onExpertiseLevelChange,
  isExpanded,
  onToggle,
}: PersonalizationFieldsProps) {

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
          isExpanded 
            ? "bg-white/10 text-white border border-white/20" 
            : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
        )}
      >
        <span>Personalize Output</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-zinc-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zinc-400" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 p-3 sm:p-4 bg-black/50 border border-white/10 rounded-xl space-y-3 sm:space-y-4">
          <div className="space-y-2">
            <label className="text-xs text-zinc-400 uppercase tracking-wider">
              Who's reading this?
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {audienceOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onAudienceChange(opt.value)}
                  className={cn(
                    "px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all",
                    audience === opt.value
                      ? "bg-white/15 text-white border border-white/30"
                      : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-zinc-400 uppercase tracking-wider">
              Your expertise level
            </label>
            <div className="flex gap-1.5 sm:gap-2">
              {expertiseOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onExpertiseLevelChange(opt.value)}
                  className={cn(
                    "flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all text-center",
                    expertiseLevel === opt.value
                      ? "bg-white/15 text-white border border-white/30"
                      : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

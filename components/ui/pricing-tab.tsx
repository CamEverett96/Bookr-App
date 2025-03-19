"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (value: string) => void
  discount?: boolean
}

export function Tab({ text, selected, setSelected, discount }: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
        selected
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-600 hover:text-gray-900"
      )}
    >
      {text}
      {discount && (
        <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-2 py-0.5 text-xs text-white">
          <Sparkles className="h-3 w-3" />
          <span>Save 20%</span>
        </div>
      )}
    </button>
  )
} 
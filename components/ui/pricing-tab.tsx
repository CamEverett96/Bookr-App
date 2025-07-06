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
        "relative rounded-xl px-4 py-2 text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        selected
          ? "bg-white/70 backdrop-blur-md text-purple-700 shadow-lg border border-purple-300 ring-2 ring-purple-200"
          : "text-gray-600 hover:text-purple-700 bg-white/30 border border-transparent",
        "font-[DM Sans,Inter,sans-serif] mx-1"
      )}
      style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}
    >
      <span className="relative z-10">{text}</span>
      {discount && (
        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 text-xs text-white font-bold shadow-md animate-pulse">
          <Sparkles className="h-3 w-3" />
          <span>Save 20%</span>
        </span>
      )}
    </button>
  )
} 
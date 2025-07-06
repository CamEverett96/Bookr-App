"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "responsive" | "browser" | "phone"
  children: React.ReactNode
}

export function Mockup({ type = "responsive", className, children, ...props }: MockupProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-border/30 bg-card shadow-xl",
        className
      )}
      {...props}
    >
      {type === "browser" && (
        <div className="flex items-center gap-1.5 border-b border-neutral-200/30 bg-neutral-100/50 px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-neutral-300" />
          <div className="h-2 w-2 rounded-full bg-neutral-300" />
          <div className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
      )}
      {children}
    </div>
  )
}

export function MockupFrame({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative mx-auto max-w-[1274px] px-4 md:px-8", className)} {...props}>
      {children}
    </div>
  )
} 
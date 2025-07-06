"use client"

import { FeatureSection } from "@/components/ui/feature-section"
import { motion } from "framer-motion"

export function FeatureSectionDemo() {
  return (
    <div className="relative w-full bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-yellow-50/30">
      <div className="relative z-10">
        <FeatureSection />
      </div>
    </div>
  )
} 
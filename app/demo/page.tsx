"use client"

import { Hero } from "@/components/ui/hero"

export default function DemoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f3f1ea]">
      <Hero
        eyebrow="INTRODUCING BOOKR"
        title={
          <>
            <div className="whitespace-nowrap">
              <span className="font-instrument-serif font-normal">Your schedule, </span>
              <span className="font-instrument-serif font-normal italic">seamlessly </span>
              <span className="font-instrument-serif font-normal">connected</span>
            </div>
            <div className="font-instrument-serif font-normal">
              to your workspace
            </div>
          </>
        }
        subtitle="Bookr brings your tasks, notes, and schedule together"
        ctaText="Get Started"
        ctaLink="/"
        mockupImage={{
          src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
          alt: "Bookr Calendar Interface",
          width: 1274,
          height: 1043
        }}
      />
    </main>
  )
} 
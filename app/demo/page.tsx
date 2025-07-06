"use client"

import { Hero } from "@/components/ui/hero"
import Image from "next/image"
import { Mockup } from "@/components/ui/mockup"

export default function DemoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Hero
        eyebrow="INTRODUCING BOOKR"
        title={
          <>
            <div className="whitespace-nowrap">
              <span className="font-normal">Your schedule, </span>
              <span className="font-normal italic">seamlessly </span>
              <span className="font-normal">connected</span>
            </div>
            <div className="font-normal">
              to your workspace
            </div>
          </>
        }
        subtitle="Bookr brings your tasks, notes, and schedule together"
        ctaText="Get Started"
        ctaLink="/"
        customMockup={
          <Mockup>
            <div className="relative w-full aspect-[1274/1043] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71"
                alt="Bookr Calendar Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Mockup>
        }
      />
    </main>
  )
} 
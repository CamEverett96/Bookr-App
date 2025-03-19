"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { Particles } from "@/components/ui/particles"

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  subtitle?: string
  eyebrow?: string
  ctaText?: string
  ctaLink?: string
  customMockup?: React.ReactNode
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, title, subtitle, eyebrow, ctaText, ctaLink, customMockup, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center bg-gradient-to-br from-white to-purple-50 relative overflow-hidden", className)}
        {...props}
      >
        <Particles
          className="absolute inset-0"
          quantity={110}
          staticity={35}
          color="#9333ea"
          ease={25}
          size={0.7}
          vx={-0.3}
          vy={-0.3}
        />
        
        {eyebrow && (
          <p 
            className="font-instrument-sans uppercase tracking-[0.51em] leading-[133%] text-center text-[19px] mt-[100px] md:mt-[150px] mb-8 text-gray-900 animate-appear opacity-0 relative z-10"
          >
            {eyebrow}
          </p>
        )}

        <h1 
          className="text-4xl md:text-6xl leading-tight text-center px-4 lg:px-[200px] text-gray-900 animate-appear opacity-0 delay-100"
        >
          {title}
        </h1>

        {subtitle && (
          <p 
            className="text-xl md:text-2xl text-center font-light px-4 lg:px-[200px] mt-[25px] mb-[48px] leading-[133%] text-gray-600 animate-appear opacity-0 delay-300"
          >
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <div 
              className="inline-flex items-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium w-[227px] h-[49px] animate-appear opacity-0 delay-500"
            >
              <div className="flex items-center justify-between w-full pl-[22px] pr-[17px]">
                <span className="text-[19px] whitespace-nowrap">{ctaText}</span>
                <div className="flex items-center gap-[14px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        )}

        {customMockup && (
          <div className="mt-20 w-full relative animate-appear opacity-0 delay-700">
            {customMockup}
            <div
              className="absolute bottom-0 left-0 right-0 w-full h-[303px]"
              style={{
                background: "linear-gradient(to top, rgba(243, 232, 255, 0.8) 0%, rgba(243, 232, 255, 0) 100%)",
                zIndex: 10,
              }}
            />
          </div>
        )}
      </div>
    )
  }
)
Hero.displayName = "Hero"

export { Hero } 
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export interface PricingTier {
  id: string
  name: string
  price: {
    monthly: string | number
    yearly: string | number
  }
  description: string
  features: string[]
  cta: string
  popular?: boolean
  highlighted?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  // Updated marketing copy for each tier
  const marketingCopy: Record<string, { name: string; description: string; features: string[]; cta: string }> = {
    starter: {
      name: "Starter",
      description: "Free scheduling for individuals. Stay organized, effortlessly.",
      features: [
        "Up to 25 bookings/month",
        "Sync with your favorite calendar",
        "Email notifications",
        "Personal booking page",
        "Standard support",
      ],
      cta: "Start Free",
    },
    professional: {
      name: "Professional",
      description: "Advanced tools for pros. Automate, analyze, and grow.",
      features: [
        "Unlimited bookings",
        "Group scheduling",
        "Custom branding",
        "Calendar analytics",
        "Priority support",
      ],
      cta: "Start Trial",
    },
    business: {
      name: "Business",
      description: "Team scheduling made easy. Integrate, collaborate, succeed.",
      features: [
        "Team scheduling",
        "Automated meeting workflows",
        "Advanced integrations",
        "Admin controls",
        "API access",
      ],
      cta: "Start Trial",
    },
    enterprise: {
      name: "Enterprise",
      description: "Custom solutions for scale. Security, support, and control.",
      features: [
        "Dedicated success manager",
        "Custom integrations",
        "SLA guarantees",
        "Enterprise SSO",
        "Advanced security",
      ],
      cta: "Contact Sales",
    },
  };
  const plan = marketingCopy[tier.id] || {
    name: tier.name,
    description: tier.description,
    features: tier.features,
    cta: tier.cta,
  };
  const price = tier.price[paymentFrequency as keyof typeof tier.price]
  const formattedPrice = typeof price === "number" ? `$${price}` : price

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/80 p-7 transition-all duration-300 bg-white/70 backdrop-blur-2xl shadow-2xl",
        "hover:scale-105 hover:shadow-3xl hover:border-purple-300",
        tier.popular && "border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-purple-200/50"
      )}
      style={{
        boxShadow: "0 8px 32px 0 rgba(131, 88, 255, 0.08), inset 0 1px 8px rgba(255,255,255,0.25)",
        transition: "transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s"
      }}
    >
      {/* Noise overlay only in light mode */}
      <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none bg-[url('/images/asfalt-light.png')] bg-cover bg-blend-overlay" />
      {/* Subtle animated blob for popular card */}
      {tier.popular && (
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-50 rounded-full blur-xl opacity-50 animate-pulse z-0 pointer-events-none" />
      )}
      {/* Popular badge always on top */}
      {tier.popular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-30 w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-base text-white shadow-lg animate-pulse font-semibold tracking-wide border-2 border-white"
             style={{ transform: 'translate(-50%, -50%)' }}>
          Popular
        </div>
      )}
      <div className="mb-5 z-10">
        <h3 className="text-3xl font-extrabold mb-2 tracking-tight leading-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'DM Sans, Inter, sans-serif', textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>{plan.name}</h3>
        <p className="text-base text-gray-600 mb-3 font-normal line-clamp-2" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>{plan.description}</p>
      </div>
      <div className="mb-7 z-10">
        <div className="flex flex-col items-center">
          <span
            className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight"
            style={{ fontFamily: 'DM Sans, Inter, sans-serif', textShadow: '0 2px 8px rgba(131,88,255,0.10)' }}
          >
            {formattedPrice}
          </span>
          {typeof price === "number" && (
            <span className="text-lg text-gray-500 font-medium -mt-1 tracking-wide">/{paymentFrequency}</span>
          )}
        </div>
      </div>
      <ul className="mb-10 flex flex-col gap-4 z-10">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div className="rounded-full bg-purple-100 p-1.5 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
              <Check className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-lg text-gray-700 leading-relaxed font-normal" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto z-10">
        <Button
          className={cn(
            "w-full rounded-lg px-4 py-2 text-base font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:from-pink-500 hover:to-purple-500 hover:shadow-lg",
          )}
          style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  )
} 
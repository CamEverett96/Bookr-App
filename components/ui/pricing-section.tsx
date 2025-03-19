"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

interface PricingSectionProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  frequencies: string[]
}

export function PricingSection({
  title,
  subtitle,
  tiers,
  frequencies,
}: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0])

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl font-instrument-serif">{title}</h1>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-purple-50 p-1">
          {frequencies.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedFrequency === freq}
              setSelected={setSelectedFrequency}
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
          />
        ))}
      </div>
    </section>
  )
}

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "Perfect for personal scheduling",
    features: [
      "Up to 25 bookings/month",
      "Basic calendar sync",
      "Email notifications",
      "Custom booking page",
      "48-hour support",
    ],
    cta: "Start Free",
  },
  {
    id: "professional",
    name: "Professional",
    price: {
      monthly: 29,
      yearly: 24,
    },
    description: "For growing professionals",
    features: [
      "Unlimited bookings",
      "Group scheduling",
      "Custom branding",
      "Calendar analytics",
      "Priority support",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    price: {
      monthly: 79,
      yearly: 65,
    },
    description: "For teams and businesses",
    features: [
      "Team scheduling",
      "Meeting workflows",
      "Advanced integrations",
      "Admin controls",
      "API access",
    ],
    cta: "Start Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large organizations",
    features: [
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantees",
      "Enterprise SSO",
      "Advanced security",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
]

export function PricingSectionDemo() {
  return (
    <div className="relative flex justify-center items-center w-full py-20 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <PricingSection
        title="Choose Your Perfect Plan"
        subtitle="Start free, upgrade as you grow. All plans include a 14-day trial."
        frequencies={PAYMENT_FREQUENCIES}
        tiers={TIERS}
      />
    </div>
  )
} 
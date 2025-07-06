"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"
import { motion } from "framer-motion"

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
    <section className="flex flex-col items-center gap-10 py-6" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>
      {title && (
        <div className="space-y-7 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold md:text-5xl text-gray-800 mb-2 tracking-tight leading-tight" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>{title}</h1>
            <p className="text-gray-600 text-lg font-medium" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>{subtitle}</p>
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
      )}
      
      {!title && (
        <div className="mx-auto flex w-fit rounded-full bg-purple-50 p-1 mb-8">
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
      )}

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
    <div className="relative flex justify-center items-center w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Enhanced background elements for light mode only */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/60 to-yellow-50/80" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-100/50 rounded-full blur-2xl" />
      {/* Grid overlay for light mode only */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:35px_35px] opacity-15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_110%)]" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}>
              Start free, upgrade as you grow. All plans include a 14-day trial.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <PricingSection
              title=""
              subtitle=""
              frequencies={PAYMENT_FREQUENCIES}
              tiers={TIERS}
            />
          </motion.div>
        </div>
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
          style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}
        >
          <p className="text-gray-600 text-sm mb-4 font-medium">Trusted by 10,000+ teams worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-70">
            <div className="text-gray-500 text-xs font-medium">✓ 99.9% Uptime</div>
            <div className="text-gray-500 text-xs font-medium">✓ 24/7 Support</div>
            <div className="text-gray-500 text-xs font-medium">✓ 30-day Money Back</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
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
  const price = tier.price[paymentFrequency as keyof typeof tier.price]
  const formattedPrice = typeof price === "number" ? `$${price}` : price

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-6",
        tier.highlighted
          ? "border-purple-600 bg-gradient-to-br from-purple-50 to-white"
          : "border-gray-200 bg-white",
        tier.popular && "border-purple-200 shadow-lg"
      )}
    >
      {tier.popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-3 py-1 text-sm text-white">
          Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-lg font-medium">{tier.name}</h3>
        <p className="text-sm text-gray-500">{tier.description}</p>
      </div>

      <div className="mb-5">
        <div className="flex items-end gap-1">
          <div className="text-3xl font-semibold">{formattedPrice}</div>
          {typeof price === "number" && (
            <div className="text-sm text-gray-500">/{paymentFrequency}</div>
          )}
        </div>
      </div>

      <ul className="mb-10 flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <div className="rounded-full bg-purple-100 p-1">
              <Check className="h-3 w-3 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          className={cn(
            "w-full",
            tier.highlighted
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-purple-50 text-purple-600 hover:bg-purple-100"
          )}
        >
          {tier.cta}
        </Button>
      </div>
    </div>
  )
} 
"use client"

import { FeatureSection } from "@/components/ui/feature-section"
import { Particles } from "@/components/ui/particles"
import { motion } from "framer-motion"

export function FeatureSectionDemo() {
  return (
    <div className="relative w-full py-20 lg:py-40">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        staticity={30}
        color="#8b5cf6"
        ease={20}
        size={0.8}
      />
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold mb-4 font-instrument-serif text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Why choose{" "}
            <span className="text-purple-600">
              {"Bookr".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 + idx * 0.05
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            ?
          </motion.h2>
          <motion.p 
            className="text-lg text-black max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            Experience the future of scheduling with features designed to make your life easier
          </motion.p>
        </div>
        <FeatureSection />
      </div>
    </div>
  )
} 
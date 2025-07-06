"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="w-full py-10 lg:py-20 relative overflow-hidden" style={{ background: 'var(--background-gradient)' }}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter text-foreground mb-4">
            Remote{" "}
            <span className="relative">
              <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {"Connectivity".split("").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60" />
            </span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how teams around the world are using Bookr to streamline their scheduling and boost productivity.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <WorldMap
            dots={[
              {
                start: { lat: 40.7128, lng: -74.0060, label: "New York" },
                end: { lat: 51.5074, lng: -0.1278, label: "London" },
              },
              {
                start: { lat: 51.5074, lng: -0.1278, label: "London" },
                end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
              },
              {
                start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
              },
              {
                start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                end: { lat: 55.7558, lng: 37.6176, label: "Moscow" },
              },
            ]}
          />
        </motion.div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-muted-foreground">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-muted-foreground">Meetings</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
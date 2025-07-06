import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Particles } from "@/components/ui/particles";

const stats = [
  {
    number: "23,000+",
    label: "Happy customers worldwide",
  },
  {
    feature: "Interview candidates",
  },
  {
    feature: "Find proven leads",
  },
  {
    feature: "Filter, select, enjoy",
  },
];

export function StatsSection() {
  return (
    <div className="w-full py-10 lg:py-20 relative">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        staticity={30}
        color="#8b5cf6"
        ease={20}
        size={0.8}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-purple-600 mb-4"
          >
            {stats[0].number}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed font-medium"
          >
            {stats[0].label}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.slice(1).map((stat, index) => (
            <motion.div
              key={stat.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                <Check className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{stat.feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
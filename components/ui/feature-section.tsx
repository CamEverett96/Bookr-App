import { cn } from "@/lib/utils";
import {
  Terminal,
  Move,
  DollarSign,
  Cloud,
  Share2,
  HelpCircle,
  Settings,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export function FeatureSection() {
  const features = [
    {
      title: "Built for teams",
      description:
        "Designed for modern teams who value efficiency and seamless collaboration.",
      icon: <Terminal className="w-8 h-8" />,
    },
    {
      title: "Easy scheduling",
      description:
        "Schedule meetings with just a few clicks. No more back-and-forth emails.",
      icon: <Move className="w-8 h-8" />,
    },
    {
      title: "Flexible pricing",
      description:
        "Choose the plan that fits your needs. Scale up or down anytime.",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Always available",
      description: "99.9% uptime guarantee. Your schedule never goes down.",
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      title: "Team sharing",
      description: "Share calendars and delegate scheduling permissions easily.",
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: "24/7 Support",
      description:
        "Get help whenever you need it. Our support team is always available.",
      icon: <HelpCircle className="w-8 h-8" />,
    },
    {
      title: "Money back",
      description:
        "Try Bookr risk-free with our 30-day money-back guarantee.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "And more",
      description: "Discover all the features that make Bookr the perfect choice.",
      icon: <Heart className="w-8 h-8" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 py-10 max-w-7xl mx-auto px-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariant}
          className="w-full h-full"
        >
          <Feature {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full relative group/feature rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300",
        "border border-black/5 hover:border-purple-900/10 shadow-sm hover:shadow-md hover:-translate-y-1"
      )}
    >
      <ShineBorder
        borderWidth={1}
        duration={4}
        shineColor={["#000000", "#333333", "#666666"]}
        className="opacity-40 rounded-xl"
      />
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-center mb-6 relative z-10">
          <div className="flex items-center justify-center size-16 rounded-lg bg-purple-900/5 group-hover/feature:bg-purple-900/10 transition-all duration-200 group-hover/feature:scale-110">
            <div className="text-purple-900 transition-all duration-300 ease-out group-hover/feature:text-purple-900 group-hover/feature:rotate-6">
              {icon}
            </div>
          </div>
        </div>
        <div className="relative z-10 mb-4">
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-purple-900/10 group-hover/feature:bg-purple-900 transition-all duration-200 group-hover/feature:h-12" />
          <h3 className="text-xl font-bold transition duration-200 text-black font-instrument-serif group-hover/feature:translate-x-2">
            {title}
          </h3>
        </div>
        <p className="text-base text-black/80 relative z-10 transition-colors duration-200 group-hover/feature:text-black leading-relaxed group-hover/feature:translate-x-2">
          {description}
        </p>
      </div>
    </div>
  );
}; 
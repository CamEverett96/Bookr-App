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
import React from "react";

const features = [
  {
    title: "Expense Tracking",
    description:
      "Master your spending, gain valuable insights, and take control of your financial journey effortlessly.",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: "Budgeting Tools",
    description:
      "Craft personalized budgets, receive real-time alerts, and stay in command of your money like a pro.",
    icon: <Move className="w-6 h-6" />,
  },
  {
    title: "Bill Payment Reminders",
    description:
      "Say goodbye to late fees! Get timely reminders for bill payments and manage your expenses with ease.",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Goal Tracking",
    description:
      "Set ambitious financial milestones, track your progress with precision, and celebrate every milestone achieved.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Financial Insights",
    description:
      "Dive deep into your financial landscape, analyze trends, and receive intelligent recommendations.",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    title: "Secure Data Encryption",
    description:
      "Safeguard your sensitive information with advanced encryption technology, ensuring the utmost security and privacy.",
    icon: <HelpCircle className="w-6 h-6" />,
  },
];

export function FeatureSection() {
  return (
    <section className="relative flex justify-center items-center py-12 px-2 sm:px-4 md:px-8" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>
      {/* Enhanced background elements for light mode only */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-white/80 via-purple-50/40 to-pink-50/40 backdrop-blur-lg" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(224,224,224,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(224,224,224,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      {/* Additional light mode decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100/30 rounded-full blur-2xl" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-100/20 rounded-full blur-xl" />
      <div className="relative z-10 w-full max-w-6xl rounded-3xl bg-white/80 backdrop-blur-lg shadow-xl border border-white/60 px-4 sm:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="mb-4 px-4 py-1 rounded-full border border-pink-200 bg-pink-50 text-pink-600 text-sm font-medium">Features</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight leading-tight text-center" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>
            Unleash the Power: Features That
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">Transcend the Ordinary!</h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-base sm:text-lg font-medium">Unveiling the Finest Arsenal: Power-Packed Features that Elevate Your Financial Game to New Heights!</p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group flex flex-col items-start bg-white/60 border border-white/80 rounded-2xl shadow-2xl p-7 min-h-[170px] transition-all duration-300 hover:scale-105 hover:shadow-3xl backdrop-blur-2xl relative"
              style={{ fontFamily: 'DM Sans, Inter, sans-serif', boxShadow: '0 8px 32px 0 rgba(131, 88, 255, 0.08), inset 0 1px 8px rgba(255,255,255,0.25)' }}
            >
              {/* Noise overlay only in light mode */}
              <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none bg-[url('/images/asfalt-light.png')] bg-cover bg-blend-overlay" />
              <div className="mb-4 flex justify-center w-full">
                {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-purple-500 transition-transform transition-colors duration-300 group-hover:scale-110 group-hover:text-pink-500' })}
              </div>
              <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight leading-tight" style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}>
                {feature.title}
              </h4>
              <p className="text-base text-gray-600 leading-snug font-normal line-clamp-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
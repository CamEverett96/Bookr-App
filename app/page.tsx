'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import { ShineBorder } from "@/components/magicui/shine-border"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Hero } from "@/components/ui/hero"
import { MockupDashboard } from "@/components/ui/mockup-dashboard"
import { Blog } from "@/components/ui/blog"
import { WorldMapDemo } from "@/components/ui/world-map-demo"
import { PricingSectionDemo } from "@/components/ui/pricing-section"
import { TestimonialsSectionDemo } from "@/components/ui/testimonials-section-demo"
import { FeatureSectionDemo } from "@/components/ui/feature-section-demo"
import { FaqDemo } from "@/components/ui/faq-demo"
import { Footer } from "@/components/ui/footer-demo"
import { StatsSection } from "@/components/ui/stats-section"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Product",
      link: "/product",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <FloatingNav 
        navItems={navItems} 
        className="bg-white/90 backdrop-blur-md border-neutral-200"
      />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen px-[25px]">
        <Hero
          eyebrow="INTRODUCING BOOKR"
          title={
            <>
              <div className="whitespace-nowrap">
                <span className="font-instrument-serif font-normal">Scheduling made </span>
                <span className="font-instrument-serif font-normal italic">effortless</span>
              </div>
              <div className="font-instrument-serif font-normal">
                for modern teams
              </div>
            </>
          }
          subtitle="Streamline your calendar, automate your bookings, and focus on what matters most"
          ctaText="Start Free Trial"
          ctaLink="/signup"
          customMockup={<MockupDashboard />}
          className="pt-20"
        />
      </section>

      {/* Features Section */}
      <section className="px-[25px]">
        <FeatureSectionDemo />
      </section>

      {/* Blog Section */}
      <section className="px-[25px]">
        <Blog />
      </section>

      {/* World Map Section */}
      <section className="px-[25px]">
        <WorldMapDemo />
      </section>

      {/* Stats Section */}
      <section className="px-[25px]">
        <StatsSection />
      </section>

      {/* Testimonials Section */}
      <section className="px-[25px]">
        <TestimonialsSectionDemo />
      </section>

      {/* FAQ Section */}
      <section className="px-[25px]">
        <FaqDemo />
      </section>

      {/* Pricing Section */}
      <section className="px-[25px]">
        <PricingSectionDemo />
      </section>

      {/* Footer */}
      <section className="px-[25px]">
        <Footer />
      </section>
    </div>
  )
}
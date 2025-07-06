'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Poppins } from 'next/font/google'
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

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
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
    <div className={`${poppins.className} min-h-screen`} style={{ background: 'var(--background-gradient)' }}>
      <FloatingNav 
        navItems={navItems} 
        className="bg-background/90 backdrop-blur-md border-border"
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

        .dark .hero-glow {
          background: radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.08) 0%,
            rgba(139, 92, 246, 0.03) 35%,
            transparent 70%
          );
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
                <span className="font-normal">Scheduling made </span>
                <span className="font-normal italic">effortless</span>
              </div>
              <div className="font-normal">
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
      <section className="px-[25px] ">
        <FeatureSectionDemo />
      </section>

      {/* Blog Section */}
      <section className="px-[25px] py-5">
        <Blog />
      </section>

      {/* World Map Section */}
      <section className="px-[25px] py-5">
        <WorldMapDemo />
      </section>

      {/* Stats Section */}
      <section className="px-[25px] py-5">
        <StatsSection />
      </section>

      {/* Testimonials Section */}
      <section className="px-[25px] py-5">
        <TestimonialsSectionDemo />
      </section>

      {/* FAQ Section */}
      <section className="px-[25px] py-5">
        <FaqDemo />
      </section>

      {/* Pricing Section */}
      <section className="px-[25px] py-5">
        <PricingSectionDemo />
      </section>

      {/* Footer */}
      <section className="px-[25px] py-5">
        <Footer />
      </section>
    </div>
  )
}
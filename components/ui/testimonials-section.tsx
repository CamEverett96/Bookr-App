import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { Particles } from "@/components/ui/particles"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
    rating?: number
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "relative bg-gradient-to-br from-white to-purple-50",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        staticity={30}
        color="#8b5cf6"
        ease={20}
        size={0.8}
      />
      
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight font-instrument-serif">
            {title}
          </h2>
          <p className="text-md max-w-[600px] text-gray-600 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* First row - moving left */}
          <div className="flex w-full overflow-hidden [--gap:1rem] [--duration:50s]">
            <div className="flex animate-marquee [gap:var(--gap)] will-change-transform">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`row1-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            <div className="flex animate-marquee [gap:var(--gap)] will-change-transform" aria-hidden="true">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`row1-duplicate-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Second row - moving right */}
          <div className="flex w-full overflow-hidden [--gap:1rem] [--duration:40s] mt-8">
            <div className="flex animate-marquee-reverse [gap:var(--gap)] will-change-transform">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.slice().reverse().map((testimonial, i) => (
                  <TestimonialCard 
                    key={`row2-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            <div className="flex animate-marquee-reverse [gap:var(--gap)] will-change-transform" aria-hidden="true">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.slice().reverse().map((testimonial, i) => (
                  <TestimonialCard 
                    key={`row2-duplicate-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" />
        </div>
      </div>
    </section>
  )
} 
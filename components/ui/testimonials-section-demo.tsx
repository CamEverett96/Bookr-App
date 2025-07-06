import { TestimonialsSection } from "@/components/ui/testimonials-section"

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Bookr has completely transformed how we manage our team's schedule. The interface is intuitive and the automation features save us hours every week.",
    href: "https://twitter.com/emmaai",
    rating: 5
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The calendar integration is flawless. We've reduced our scheduling conflicts by 90% since implementing Bookr.",
    href: "https://twitter.com/davidtech",
    rating: 5
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, a scheduling tool that actually understands our needs! The team collaboration features are exactly what we were looking for.",
    rating: 5
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Loved by teams worldwide"
      description="Join thousands of teams who are already streamlining their scheduling with Bookr"
      testimonials={testimonials}
    />
  )
} 
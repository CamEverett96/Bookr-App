import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  rating?: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-4 w-4",
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  )
}

export function TestimonialCard({ author, text, href, rating = 5 }: TestimonialCardProps) {
  const Card = href ? Link : "div"

  return (
    <Card
      href={href || ""}
      className={cn(
        "group relative flex w-[320px] shrink-0 flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-lg",
        "border border-gray-200",
        "transition-all duration-300",
        href && "hover:shadow-xl hover:-translate-y-1"
      )}
    >
      <div className="flex flex-col gap-4">
        <StarRating rating={rating} />
        <p className="text-sm text-gray-600 line-clamp-4">{text}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={author.avatar}
            alt={author.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-900">{author.name}</div>
          <div className="text-sm text-purple-600">{author.handle}</div>
        </div>
      </div>
    </Card>
  )
} 
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

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
  className?: string
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
              : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  )
}

export function TestimonialCard({ author, text, href, rating = 5, className }: TestimonialCardProps) {
  const Card = href ? Link : "div"

  return (
    <Card
      href={href || ""}
      className={cn(
        "group relative flex w-[320px] shrink-0 flex-col justify-between gap-4 rounded-xl bg-card p-6 shadow-lg",
        "border border-border",
        "transition-all duration-300",
        href && "hover:shadow-xl hover:-translate-y-1 hover:border-purple-200",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <StarRating rating={rating} />
        <p className="text-sm text-muted-foreground line-clamp-4">{text}</p>
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-purple-100 text-purple-600">{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-medium text-foreground">{author.name}</div>
          <div className="text-sm text-purple-600">{author.handle}</div>
        </div>
      </div>
    </Card>
  )
} 
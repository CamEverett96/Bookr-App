import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";

interface BlogPost {
  image: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    title: "Pay supplier invoices",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever."
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    title: "Manage your finances",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever."
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    title: "Track your expenses",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever."
  },
  {
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
    title: "Automate your workflow",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever."
  }
];

const Blog = () => (
  <div className="w-full py-10 lg:py-20 relative">
    <Particles
      className="absolute inset-0 -z-10"
      quantity={150}
      staticity={30}
      color="#8b5cf6"
      ease={20}
      size={0.8}
    />
    <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-foreground">
          Latest insights and updates
        </h4>
        <Button className="gap-4 bg-purple-600 hover:bg-purple-700">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col gap-2 hover:opacity-90 cursor-pointer transition-all duration-300 group">
            <div className="rounded-lg overflow-hidden aspect-video mb-4 relative">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={225}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl tracking-tight text-foreground group-hover:text-purple-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-base">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export { Blog }; 
"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { SanityBlogPost } from "@/types/sanity"
import { buildImageUrl } from "@/lib/sanity"
import { format } from "date-fns"
import Link from "next/link"

interface BlogCardProps {
  post: SanityBlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.mainImage
    ? buildImageUrl(post.mainImage)
    : "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  const formattedDate = post.publishedAt ? format(new Date(post.publishedAt), "MMMM d, yyyy") : ""

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 border-brand-100">
      {/* Featured Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          {post.tags && post.tags[0] && (
            <Badge
              variant="secondary"
              className="bg-brand-600/90 text-white dark:bg-brand-500/90 hover:bg-brand-700 dark:hover:bg-brand-600"
            >
              #{post.tags[0]}
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {post.readTime || "2 min read"}
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold line-clamp-2 text-brand-800 dark:text-brand-300">{post.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{post.subtitle}</p>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2 border-t dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 p-0 group"
          asChild
        >
          <Link href={`/blog/${post.slug.current}`}>
            <span>Read More</span>
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


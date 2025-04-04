"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { format } from "date-fns"
import { buildImageUrl } from "@/lib/sanity"
import type { SanityBlogPost } from "@/types/sanity"

interface BlogPostContentProps {
  post: SanityBlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const imageUrl = post.mainImage ? buildImageUrl(post.mainImage) : ""
  const formattedDate = post.publishedAt ? format(new Date(post.publishedAt), "MMMM d, yyyy") : ""

  return (
    <>
      {imageUrl && (
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <img src={imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      )}

      <div className="container-custom py-12 max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </Button>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-800 dark:text-brand-300">{post.title}</h1>

          {post.subtitle && <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{post.subtitle}</p>}

          <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400">
            {formattedDate && (
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{formattedDate}</span>
              </div>
            )}

            {post.readTime && (
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 ml-auto">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="capitalize">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </header>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>{post.excerpt}</p>
          <p>{post.body}</p>
          <p className="text-gray-500 italic">
            Note: To fully render Sanity's Portable Text content, you would need to install and use the
            @portabletext/react package.
          </p>
        </article>
      </div>
    </>
  )
}


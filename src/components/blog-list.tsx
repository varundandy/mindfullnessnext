"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { BlogCard } from "@/components/blog-card"
import { useQuery } from "@tanstack/react-query"
import type { SanityBlogPost } from "@/types/sanity"

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState<SanityBlogPost[]>([])

  // Fetch blog posts from Sanity through API route
  const fetchPosts = async () => {
    try {
      // Query to get blog posts from Sanity
      const query = `*[_type == "post"] {
        _id,
        title,
        subtitle,
        slug,
        mainImage,
        publishedAt,
        excerpt,
        readTime,
        "tags": categories[]->title
      }`

      const response = await fetch("/api/sanity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch posts")
      }

      return await response.json()
    } catch (err) {
      console.error("Error fetching posts:", err)
      throw err
    }
  }

  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchPosts,
    // Fallback to sample data for demo/development
    placeholderData: [
      {
        _id: "1",
        title: "Getting Started with Mindfulness Meditation",
        subtitle: "A beginner's guide to finding inner peace",
        slug: { current: "getting-started-with-mindfulness" },
        excerpt:
          "Discover the fundamentals of mindfulness meditation and how it can transform your daily life with simple practices you can start today.",
        publishedAt: "2023-04-15",
        readTime: "5 min read",
        tags: ["Beginners", "Meditation", "Mindfulness"],
      },
      {
        _id: "2",
        title: "The Science Behind Meditation Benefits",
        subtitle: "Research-backed evidence for skeptics",
        slug: { current: "science-behind-meditation" },
        excerpt:
          "Explore the scientific research that explains why meditation works and how it positively affects your brain, body, and overall wellbeing.",
        publishedAt: "2023-05-22",
        readTime: "8 min read",
        tags: ["Science", "Research", "Health"],
      },
      {
        _id: "3",
        title: "5 Breathing Techniques for Stress Relief",
        subtitle: "Quick exercises for immediate calm",
        slug: { current: "breathing-techniques-stress-relief" },
        excerpt:
          "Learn five powerful breathing techniques that you can use anywhere, anytime to quickly reduce stress and anxiety in just a few minutes.",
        publishedAt: "2023-06-10",
        readTime: "4 min read",
        tags: ["Breathing", "Stress Relief", "Techniques"],
      },
    ],
  })

  // Filter posts based on search term and active tag
  useEffect(() => {
    let result = posts

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (activeTag) {
      result = result.filter(
        (post) => post.tags && post.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase()),
      )
    }

    setFilteredPosts(result)
  }, [searchTerm, activeTag, posts])

  // Get all unique tags from posts
  const allTags = [...new Set(posts.flatMap((post) => post.tags || []))]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-50 dark:bg-gray-800 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4 text-brand-800 dark:text-brand-300">Mindfulness Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Insights, tips, and practices to support your meditation journey and mindful living.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border-brand-200 focus:border-brand-400 focus:ring-brand-400 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 flex-wrap gap-2">
            <Button
              variant={activeTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTag(null)}
              className="rounded-full"
            >
              All Topics
            </Button>

            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container-custom">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-96 animate-pulse">
                  <div className="h-52 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {error instanceof Error ? error.message : "An error occurred while loading posts"}
              </p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No posts found</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Try changing your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogList


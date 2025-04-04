import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogPostContent from "@/components/blog-post-content"
import type { Metadata } from "next"
import { buildImageUrl } from "@/lib/sanity"

// This would normally be a server-side fetch, but we're using mock data for now
async function getPost(slug: string) {
  // In a real app, you would fetch this from Sanity
  const mockPosts = [
    {
      _id: "1",
      title: "Getting Started with Mindfulness Meditation",
      subtitle: "A beginner's guide to finding inner peace",
      slug: { current: "getting-started-with-mindfulness" },
      excerpt:
        "Discover the fundamentals of mindfulness meditation and how it can transform your daily life with simple practices you can start today.",
      body: "This is the full content of the blog post. In a real application, this would be rich text content from Sanity.",
      publishedAt: "2023-04-15",
      readTime: "5 min read",
      tags: ["Beginners", "Meditation", "Mindfulness"],
      mainImage: null,
    },
    {
      _id: "2",
      title: "The Science Behind Meditation Benefits",
      subtitle: "Research-backed evidence for skeptics",
      slug: { current: "science-behind-meditation" },
      excerpt:
        "Explore the scientific research that explains why meditation works and how it positively affects your brain, body, and overall wellbeing.",
      body: "This is the full content of the blog post. In a real application, this would be rich text content from Sanity.",
      publishedAt: "2023-05-22",
      readTime: "8 min read",
      tags: ["Science", "Research", "Health"],
      mainImage: null,
    },
    {
      _id: "3",
      title: "5 Breathing Techniques for Stress Relief",
      subtitle: "Quick exercises for immediate calm",
      slug: { current: "breathing-techniques-stress-relief" },
      excerpt:
        "Learn five powerful breathing techniques that you can use anywhere, anytime to quickly reduce stress and anxiety in just a few minutes.",
      body: "This is the full content of the blog post. In a real application, this would be rich text content from Sanity.",
      publishedAt: "2023-06-10",
      readTime: "4 min read",
      tags: ["Breathing", "Stress Relief", "Techniques"],
      mainImage: null,
    },
  ]

  const post = mockPosts.find((post) => post.slug.current === slug)

  if (!post) {
    return null
  }

  return post
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const imageUrl = post.mainImage ? buildImageUrl(post.mainImage) : ""

  return {
    title: `${post.title} | Mindful Journey`,
    description: post.subtitle || post.excerpt || "",
    openGraph: {
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </div>
  )
}


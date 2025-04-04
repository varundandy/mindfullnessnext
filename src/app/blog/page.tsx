import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogList from "@/components/blog-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mindfulness Blog | Mindful Journey",
  description: "Insights, tips, and practices to support your meditation journey and mindful living.",
  keywords: "meditation, mindfulness, wellness, blog, articles",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogList />
      </main>
      <Footer />
    </div>
  )
}


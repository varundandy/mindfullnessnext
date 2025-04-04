import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BooksList from "@/components/books-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Books Collection | Mindful Journey",
  description:
    "Explore my collection of books on mindfulness, meditation, and personal growth. Digital and hardcopy versions available.",
  keywords: "mindfulness books, meditation guides, personal development, spiritual growth",
}

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BooksList />
      </main>
      <Footer />
    </div>
  )
}


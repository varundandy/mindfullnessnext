"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ExternalLink, BookOpen } from "lucide-react"

// Mock data - replace with real data in production
const books = [
  {
    id: 1,
    title: "The Mindful Journey",
    description:
      "A comprehensive guide to beginning your meditation practice and transforming your relationship with stress and anxiety.",
    coverImage: "/placeholder.svg",
    digitalPrice: 12.99,
    amazonLink: "https://amazon.com",
    year: "2023",
    pages: 240,
  },
  {
    id: 2,
    title: "Present Moment Awareness",
    description:
      "Learn how to cultivate presence and mindfulness in your everyday life through simple yet powerful techniques.",
    coverImage: "/placeholder.svg",
    digitalPrice: 9.99,
    amazonLink: "https://amazon.com",
    year: "2022",
    pages: 180,
  },
  {
    id: 3,
    title: "Mindfulness for Beginners",
    description:
      "Start your meditation journey with this beginner-friendly guide to mindfulness practices and techniques.",
    coverImage: "/placeholder.svg",
    digitalPrice: 7.99,
    amazonLink: "https://amazon.com",
    year: "2021",
    pages: 150,
  },
]

const BooksList = () => {
  const router = useRouter()

  return (
    <>
      <div className="bg-brand-50 dark:bg-gray-900 py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">My Books</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Explore my collection of books on mindfulness, meditation, and personal growth.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              >
                <div
                  className="aspect-w-2 aspect-h-3 bg-gray-100 dark:bg-gray-700 cursor-pointer"
                  onClick={() => router.push(`/books/${book.id}`)}
                >
                  <img
                    src={book.coverImage || "/placeholder.svg"}
                    alt={book.title}
                    className="object-cover w-full h-[260px]"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      onClick={() => router.push(`/books/${book.id}`)}
                    >
                      {book.title}
                    </h3>
                    <Badge variant="outline" className="ml-2">
                      {book.year}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{book.description}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <p>{book.pages} pages</p>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full mb-3" onClick={() => router.push(`/books/${book.id}`)}>
                    View Details
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Hard Copy
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BooksList


import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BookDetail from "@/components/book-detail"
import type { Metadata } from "next"

// Mock data - we'd normally fetch this from an API
const allBooks = [
  {
    id: 1,
    title: "The Mindful Journey",
    description:
      "A comprehensive guide to beginning your meditation practice and transforming your relationship with stress and anxiety.",
    fullDescription:
      "The Mindful Journey is a comprehensive guide designed to help you establish a solid foundation for your meditation practice. This book offers practical techniques, insights, and daily exercises that can help transform your relationship with stress and anxiety.\n\nYou'll discover how to integrate mindfulness into your everyday life, creating moments of peace and presence even during your busiest days. The book includes guided meditations, breathing exercises, and mindful movement practices that are accessible to beginners yet beneficial for experienced practitioners as well.",
    coverImage: "/placeholder.svg",
    digitalPrice: 12.99,
    amazonLink: "https://amazon.com",
    year: "2023",
    pages: 240,
    author: "Your Name",
    tableOfContents: [
      "Chapter 1: Introduction to Mindfulness",
      "Chapter 2: The Science Behind Meditation",
      "Chapter 3: Starting Your Practice",
      "Chapter 4: Mindful Breathing Techniques",
      "Chapter 5: Body Scan Meditation",
      "Chapter 6: Working with Difficult Emotions",
      "Chapter 7: Mindfulness in Daily Life",
      "Chapter 8: Advanced Practices",
    ],
  },
  {
    id: 2,
    title: "Present Moment Awareness",
    description:
      "Learn how to cultivate presence and mindfulness in your everyday life through simple yet powerful techniques.",
    fullDescription:
      "Present Moment Awareness offers a practical approach to living mindfully in our fast-paced world. This book provides simple yet powerful techniques that can be integrated into your daily routine to help you stay grounded, focused, and aware.\n\nDrawing from both ancient wisdom traditions and modern psychological research, this guide offers a balanced perspective on how mindfulness can enhance your relationships, work performance, and overall well-being. Each chapter includes practical exercises and reflection questions to deepen your understanding and application of the concepts.",
    coverImage: "/placeholder.svg",
    digitalPrice: 9.99,
    amazonLink: "https://amazon.com",
    year: "2022",
    pages: 180,
    author: "Your Name",
    tableOfContents: [
      "Chapter 1: The Power of Presence",
      "Chapter 2: Mindful Communication",
      "Chapter 3: Cultivating Awareness in Daily Activities",
      "Chapter 4: Working with Distractions",
      "Chapter 5: Mindfulness at Work",
      "Chapter 6: Mindfulness in Relationships",
      "Chapter 7: Digital Mindfulness",
      "Chapter 8: Creating a Sustainable Practice",
    ],
  },
  {
    id: 3,
    title: "Mindfulness for Beginners",
    description:
      "Start your meditation journey with this beginner-friendly guide to mindfulness practices and techniques.",
    fullDescription:
      "Mindfulness for Beginners is the perfect starting point for anyone looking to explore meditation and mindfulness practices. This accessible guide breaks down complex concepts into easy-to-understand language and provides step-by-step instructions for various mindfulness techniques.\n\nDesigned specifically for newcomers, this book addresses common challenges and questions that arise when beginning a meditation practice. The shorter length makes it less overwhelming while still providing all the essential information you need to build a strong foundation in mindfulness.",
    coverImage: "/placeholder.svg",
    digitalPrice: 7.99,
    amazonLink: "https://amazon.com",
    year: "2021",
    pages: 150,
    author: "Your Name",
    tableOfContents: [
      "Chapter 1: What is Mindfulness?",
      "Chapter 2: Benefits of a Regular Practice",
      "Chapter 3: Your First Meditation",
      "Chapter 4: Common Challenges for Beginners",
      "Chapter 5: Simple Daily Practices",
      "Chapter 6: Mindful Movement",
      "Chapter 7: Creating Your Meditation Space",
      "Chapter 8: Next Steps in Your Journey",
    ],
  },
]

interface BookPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const bookId = Number.parseInt(params.id)
  const book = allBooks.find((book) => book.id === bookId)

  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found.",
    }
  }

  return {
    title: `${book.title} | Mindful Journey`,
    description: book.description,
  }
}

export default function BookPage({ params }: BookPageProps) {
  const bookId = Number.parseInt(params.id)
  const book = allBooks.find((book) => book.id === bookId)

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BookDetail book={book} />
      </main>
      <Footer />
    </div>
  )
}


"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { BookOpen, Download, ArrowLeft, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

interface BookProps {
  id: number
  title: string
  description: string
  fullDescription: string
  coverImage: string
  digitalPrice: number
  amazonLink: string
  year: string
  pages: number
  author: string
  tableOfContents: string[]
}

const BookDetail = ({ book }: { book: BookProps }) => {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDigitalPurchase = async (bookId: number, bookTitle: string, price: number) => {
    try {
      setIsProcessing(true)

      // In a real app, this would call the Stripe API route
      // For demo purposes, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success("Purchase successful!", {
        description: `Thank you for purchasing "${bookTitle}". You will receive a download link shortly.`,
      })

      setIsProcessing(false)
    } catch (error) {
      setIsProcessing(false)
      toast.error("Payment processing failed", {
        description: "There was an error connecting to the payment processor. Please try again.",
      })
    }
  }

  return (
    <div className="bg-brand-50 dark:bg-gray-900 py-16">
      <div className="container-custom">
        <Button variant="outline" onClick={() => router.push("/books")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="aspect-w-2 aspect-h-3 bg-gray-100 dark:bg-gray-700">
                <img
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline">{book.year}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{book.pages} pages</span>
                </div>
                <div className="flex flex-col gap-3">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Digital (${book.digitalPrice})
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Purchase Digital Copy</AlertDialogTitle>
                        <AlertDialogDescription>
                          You're about to purchase a digital copy of "{book.title}" for ${book.digitalPrice}.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDigitalPurchase(book.id, book.title, book.digitalPrice)}
                          disabled={isProcessing}
                        >
                          {isProcessing ? "Processing..." : "Proceed to Payment"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Button variant="outline" asChild>
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Hard Copy
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{book.title}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">By {book.author}</p>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="whitespace-pre-line">{book.fullDescription}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Table of Contents</h3>
              <ul className="space-y-2">
                {book.tableOfContents.map((chapter, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {chapter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail


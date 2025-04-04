import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl md:text-8xl font-bold text-brand-600 mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or didn't exist in
            the first place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-brand-600 hover:bg-brand-700">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-brand-600 text-brand-600">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


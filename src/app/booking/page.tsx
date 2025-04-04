import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BookingContent from "@/components/booking-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Session | Mindful Journey",
  description: "Schedule a personalized consultation to address your specific challenges and get expert guidance.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BookingContent />
      </main>
      <Footer />
    </div>
  )
}


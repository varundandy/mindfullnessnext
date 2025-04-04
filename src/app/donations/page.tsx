import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DonationsContent from "@/components/donations-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support Our Work | Mindful Journey",
  description: "Your donations help us continue creating mindfulness content and resources for the community.",
}

export default function DonationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DonationsContent />
      </main>
      <Footer />
    </div>
  )
}


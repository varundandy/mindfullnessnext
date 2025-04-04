import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Mindful Journey",
  description: "Learn more about our background, expertise, and teaching philosophy.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MeditationContent from "@/components/meditation-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audio Center | Mindful Journey",
  description:
    "Explore our collection of guided meditations, podcast episodes, and curated Spotify playlists to enhance your mindfulness practice.",
}

export default function MeditationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MeditationContent />
      </main>
      <Footer />
    </div>
  )
}


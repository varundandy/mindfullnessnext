import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, Heart, CloudSun } from "lucide-react"

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-brand-100 py-20 md:py-32 subtle-pattern">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-brand-600 h-6 w-6" />
              <span className="text-brand-600 font-medium">Find your inner peace</span>
            </div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Mindfulness & <span className="text-brand-600">Meditation</span> for a Balanced Life
            </h1>
            <p className="mb-8 text-lg text-gray-600">
            I am an Meditation & Mindfulness Coach specializing in inner work, guiding individuals to explore their depths and navigate 
            life’s challenges with poise and grace. Additionally, through my writing—whether poetry or prose—and my podcast, I share inspirational messages, insights, 
            and personal reflections to support others on their journey of self-discovery and transformation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 group">
                <Link href="/courses">
                  <Heart className="mr-2 h-4 w-4 group-hover:animate-breathe" />
                  Explore Courses
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-600 text-brand-600">
                <Link href="/booking">
                  <CloudSun className="mr-2 h-4 w-4" />
                  Book a Session
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            {/* Replace this with your actual image */}
            <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center animate-breathe">
              <span className="text-brand-700 font-medium">Meditation Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


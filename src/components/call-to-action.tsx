import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, Calendar } from "lucide-react"

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Inner Journey</h2>
          <p className="text-lg text-brand-100 mb-8">
            Whether you&apos;re looking to reduce stress, improve focus, or find inner peace, I&apos;m here to guide you on your
            path to mindfulness and well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="default" className="bg-white text-brand-700 hover:bg-gray-100 group">
              <Link href="/courses">
                <Leaf className="mr-2 h-4 w-4 group-hover:animate-breathe" />
                Browse Courses
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-brand-700">
              <Link href="/booking">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Session
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction


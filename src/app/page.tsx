import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturedCourses from "@/components/featured-courses"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import BookingFeature from "@/components/booking-feature"
import { Leaf, Heart, Brain } from "lucide-react"

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />

        {/* Meditation Approach Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">My Approach to Inner Work</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Through personalized guidance and evidence-based practices, I help you develop a sustainable inner work
                routine that fits your lifestyle and goals and brings about inner fulfillment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-50 p-8 rounded-lg border border-brand-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mindful Awareness</h3>
                <p className="text-gray-600">
                  Learn techniques to stay present and engaged with your surroundings, reducing stress and improving
                  your overall well-being.
                </p>
              </div>

              <div className="bg-brand-50 p-8 rounded-lg border border-brand-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compassion Practice</h3>
                <p className="text-gray-600">
                  Develop self-compassion and empathy through guided meditation practices that nurture kindness and
                  understanding.
                </p>
              </div>

              <div className="bg-brand-50 p-8 rounded-lg border border-brand-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cognitive Awareness</h3>
                <p className="text-gray-600">
                  Understand how thought patterns affect your emotions and learn techniques to cultivate a more balanced
                  mental state.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeaturedCourses/>
        <BookingFeature />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}


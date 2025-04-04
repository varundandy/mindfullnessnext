"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock } from "lucide-react"

interface BookingOption {
  id: string
  title: string
  duration: string
  price: number
  description: string
}

const bookingOptions: BookingOption[] = [
  {
    id: "quick",
    title: "Quick Consultation",
    duration: "30 minutes",
    price: 75,
    description: "A focused session to address a specific question or challenge you're facing.",
  },
  {
    id: "standard",
    title: "Standard Consultation",
    duration: "60 minutes",
    price: 120,
    description: "A comprehensive session to dive deep into your challenges and develop solutions.",
  },
  {
    id: "premium",
    title: "Premium Consultation",
    duration: "90 minutes",
    price: 160,
    description: "An in-depth session with follow-up resources and a personalized action plan.",
  },
]

const BookingContent = () => {
  // Load Calendly widget when component mounts
  useEffect(() => {
    // Create and load the Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    // Clean up on unmount
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book a One-on-One Call</h1>
          <p className="text-gray-600">
            Schedule a personalized consultation to address your specific challenges and get expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-md overflow-hidden">
              <CardContent className="p-0">
                {/* Calendly inline widget */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/mindfulnesscoach/consultation"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Choose Your Consultation</h2>
                <div className="space-y-4 mb-6">
                  {bookingOptions.map((option) => (
                    <Card key={option.id} className="transition-all hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{option.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 mb-1">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              <span>{option.duration}</span>
                            </div>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                          <Badge className="bg-brand-50 text-brand-700 whitespace-nowrap ml-2">${option.price}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md border">
                <h3 className="font-medium mb-2">What&apos;s Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">Personalized advice tailored to your situation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">Video call via Zoom (link provided after booking)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">Action items and next steps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">Recording of the session (upon request)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-50 p-4 rounded-md border border-brand-100">
                <h3 className="font-medium text-brand-700 mb-2">Why Schedule a Call?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  One-on-one calls provide personalized guidance that group sessions can&apos;t offer. I&apos;ll focus entirely on
                  your unique challenges and goals.
                </p>
                <p className="text-sm text-gray-700">
                  After our call, you&apos;ll walk away with clarity and practical steps to implement immediately in your
                  mindfulness practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingContent


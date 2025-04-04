import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const BookingFeature = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Book a One-on-One Call</h2>
            <p className="text-gray-600 mb-6">
              Need personalized guidance? Schedule a one-on-one call with me to discuss your specific challenges and
              goals.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Tailored advice for your specific situation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Personalized action plan to achieve your goals</span>
              </li>
              <li className="flex items-start">
                <span className="bg-brand-100 text-brand-700 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Direct access to my expertise and experience</span>
              </li>
            </ul>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
              <h4 className="font-semibold mb-2">Booking Options:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">30-Minute Call</p>
                  <p className="text-gray-600">$75</p>
                </div>
                <div>
                  <p className="font-medium">60-Minute Call</p>
                  <p className="text-gray-600">$120</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto bg-brand-600 hover:bg-brand-700">
              <a href="/booking" className="flex items-center">
                Schedule a Call
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Easy Scheduling with Calendly</CardTitle>
              <CardDescription>Book a session in just a few clicks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="calendly-widget bg-gray-50 p-4 rounded-lg border border-gray-200 h-64 flex items-center justify-center">
                <p className="text-center text-gray-500">
                  Click the button below to open my Calendly and schedule a time that works for you.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-brand-600 hover:bg-brand-700">
                <a href="/booking" className="flex items-center">
                  Open Full Calendar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BookingFeature


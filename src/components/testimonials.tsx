import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { fetchTestimonials } from "@/app/data/courses"

const Testimonials = async () => {
  const testimonials = await fetchTestimonials();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What My Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take my word for it - hear from the professionals who have taken my courses and mentoring
            sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white h-full">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <span className="absolute -top-2 -left-2 text-5xl text-brand-200">"</span>
                  <p className="text-gray-700 relative z-10 pt-2">{testimonial.content}</p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t pt-6">
                <Avatar>
                  <AvatarFallback className="bg-brand-100 text-brand-700">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


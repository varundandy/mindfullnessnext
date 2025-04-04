import { NextResponse } from "next/server"
import { Testimonial } from "@/types/types"


export async function GET() {
  try {
   
    const testimonials: Testimonial[] = [
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Marketing Manager",
          content:
            "The course was incredibly valuable and provided practical insights I could apply immediately. The one-on-one sessions were a game-changer for my professional development.",
          initials: "SJ",
        },
        {
          id: "2",
          name: "David Chen",
          role: "Entrepreneur",
          content:
            "I've taken many online courses, but this one stands out. The content is well-structured, and the personalized feedback helped me adapt the concepts to my specific business needs.",
          initials: "DC",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "UX Designer",
          content:
            "The mentoring sessions were exactly what I needed to level up my career. I received tailored advice that helped me overcome challenges and reach my goals faster.",
          initials: "ER",
        },
      ]

    // Return the results
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Sanity error:", error)
    return NextResponse.json({ error: "Error fetching from Sanity" }, { status: 500 })
  }
}


import { NextResponse } from "next/server"
import { Course } from "@/types/types"


export async function GET() {
  try {
   
    const allCourses: Course[] = [
        {
          id: "1",
          title: "Rajayoga Meditation",
          description: "Master the most powerful meditation RajaYoga Meditation",
          price: 299,
          category: "Marketing",
          level: "Beginner",
          image: "",
          featured: true,
        },
        {
          id: "2",
          title: "Loving Observation",
          description: "Take your web development skills to the next level with modern frameworks and tools.",
          price: 249,
          category: "Development",
          level: "Intermediate",
          image: "",
          featured: true,
        },
        {
          id: "3",
          title: "Inner Work Mastery",
          description: "A 21 days one-on-one workshop for inner work mastery which will include Raja Yoga, Loving Observation and other tools. to elevate our experience of life.",
          price: 2000,
          category: "Productivity",
          level: "All Levels",
          image: "",
          featured: true,
        },
        
      ]

    // Return the results
    return NextResponse.json(allCourses);
  } catch (error) {
    console.error("Sanity error:", error)
    return NextResponse.json({ error: "Error fetching from Sanity" }, { status: 500 })
  }
}


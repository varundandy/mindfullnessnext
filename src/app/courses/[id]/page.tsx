import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CourseDetail from "@/components/course-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Mock data - we'd normally fetch this from an API
const courseData = {
  "1": {
    id: "1",
    title: "Mastering Digital Marketing",
    description: "Learn the fundamentals of digital marketing and how to create effective campaigns.",
    longDescription:
      "This comprehensive course will take you from the basics to advanced digital marketing strategies. You'll learn how to create and execute effective campaigns across multiple channels, measure their performance, and optimize for better results.",
    price: 199,
    category: "Marketing",
    level: "Beginner",
    image: "",
    featured: true,
    rating: 4.8,
    ratingCount: 342,
    duration: "10 hours",
    lessons: 42,
    instructor: "Jane Smith",
    lastUpdated: "July 2023",
    requirements: [
      "Basic computer skills",
      "No prior marketing experience required",
      "Willingness to learn and apply new concepts",
    ],
    whatYouWillLearn: [
      "Create effective digital marketing strategies across multiple channels",
      "Build and optimize campaigns for better ROI",
      "Understand audience targeting and segmentation",
      "Measure and analyze campaign performance",
      "Create compelling content that drives engagement",
      "Master the fundamentals of SEO, SEM, and social media marketing",
    ],
    modules: [
      {
        title: "Introduction to Digital Marketing",
        lessons: ["What is Digital Marketing?", "The Digital Marketing Landscape", "Setting Marketing Objectives"],
      },
      {
        title: "Content Marketing Fundamentals",
        lessons: [
          "Content Strategy Basics",
          "Creating Compelling Content",
          "Content Distribution Channels",
          "Measuring Content Performance",
        ],
      },
      {
        title: "Social Media Marketing",
        lessons: [
          "Platform Overview and Selection",
          "Creating a Social Media Strategy",
          "Content Creation for Social Media",
          "Paid Social Advertising",
          "Measuring Social Media ROI",
        ],
      },
      {
        title: "Search Engine Optimization (SEO)",
        lessons: [
          "SEO Fundamentals",
          "Keyword Research",
          "On-Page Optimization",
          "Off-Page Optimization",
          "Technical SEO",
        ],
      },
    ],
  },
  // Add other courses as needed
}

interface CoursePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = courseData[params.id as keyof typeof courseData]

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | Mindful Journey`,
    description: course.description,
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courseData[params.id as keyof typeof courseData]

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CourseDetail course={course} />
      </main>
      <Footer />
    </div>
  )
}


import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CoursesList from "@/components/courses-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Courses | Mindful Journey",
  description: "Browse our collection of courses designed to help you develop new skills and advance your career.",
}

// Fetch courses before rendering
const fetchCourses = async () => {
  const response = await fetch(`${process.env.HOSTNAME}/api/courses`, {
    next: { revalidate: 10 }, // Adjust caching as needed
  });
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};

export default async function CoursesPage() {
  const courses = await fetchCourses();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CoursesList courses={courses} />
      </main>
      <Footer />
    </div>
  )
}


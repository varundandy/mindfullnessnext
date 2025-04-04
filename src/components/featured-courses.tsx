import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fetchCourses } from "@/app/data/courses"

const FeaturedCourses = async () => {
  const courses:Course[] = await fetchCourses();
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my most popular courses designed to help you develop new skills and advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses
            .filter((course) => course.featured)
            .map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Course Thumbnail</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">
                      {course.level}
                    </Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{course.category}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="font-bold text-lg">${course.price}</span>
                  <Button asChild className="bg-brand-600 hover:bg-brand-700">
                    <Link href={`/courses/${course.id}`}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-brand-600 text-brand-600">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses


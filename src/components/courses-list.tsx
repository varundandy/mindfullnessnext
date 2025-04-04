"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search } from "lucide-react"
import { Course } from "@/types/types"


const categories = ["All", "Marketing", "Development", "Productivity", "Finance", "Design"]
const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"]

const CoursesList = ({ courses }: { courses: Course[] }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <section className="bg-gradient-to-b from-background to-muted py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Courses</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse my collection of courses designed to help you develop new skills and advance your career.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <div className="mr-4 mb-2">
            <span className="text-sm font-medium mr-2">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-brand-600 hover:bg-brand-700 cursor-pointer dark:bg-brand-600 dark:hover:bg-brand-700"
                      : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <span className="text-sm font-medium mr-2">Level:</span>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Badge
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  className={
                    selectedLevel === level
                      ? "bg-brand-600 hover:bg-brand-700 cursor-pointer dark:bg-brand-600 dark:hover:bg-brand-700"
                      : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSelectedLevel("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Course Thumbnail</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-brand-50 text-brand-700 hover:bg-brand-100 dark:bg-brand-900 dark:text-brand-300 dark:hover:bg-brand-800"
                    >
                      {course.level}
                    </Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{course.category}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="font-bold text-lg">${course.price}</span>
                  <Button asChild className="bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-700">
                    <Link href={`/courses/${course.id}`}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CoursesList


"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CheckCircle, Clock, FileText, PlayCircle, Shield, Star, ArrowLeft } from "lucide-react"

interface Module {
  title: string
  lessons: string[]
}

interface CourseProps {
  id: string
  title: string
  description: string
  longDescription: string
  price: number
  category: string
  level: string
  image: string
  featured: boolean
  rating: number
  ratingCount: number
  duration: string
  lessons: number
  instructor: string
  lastUpdated: string
  requirements: string[]
  whatYouWillLearn: string[]
  modules: Module[]
}

const CourseDetail = ({ course }: { course: CourseProps }) => {
  return (
    <>
      {/* Course Header */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/courses" className="text-brand-600 hover:text-brand-700 flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Courses
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">{course.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.longDescription}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" fill="#eab308" />
                  <span className="font-medium mr-1">{course.rating}</span>
                  <span className="text-gray-500">({course.ratingCount} ratings)</span>
                </div>
                <div className="flex items-center">
                  <PlayCircle className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-500 mr-1" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Badge className="bg-brand-50 text-brand-700 hover:bg-brand-100">{course.level}</Badge>
              </div>
            </div>

            <div>
              <Card className="shadow-lg sticky top-24">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Course Preview</span>
                </div>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-3xl font-bold mb-2">${course.price}</p>
                  </div>
                  <Button className="w-full mb-4 bg-brand-600 hover:bg-brand-700 text-lg py-6">Enroll Now</Button>
                  <div className="text-center text-sm text-gray-500 mb-6">
                    <p>30-Day Money-Back Guarantee</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <PlayCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Self-paced learning</p>
                        <p className="text-sm text-gray-500">Learn on your own schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Lifetime access</p>
                        <p className="text-sm text-gray-500">Learn at your own pace</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              {/* What You'll Learn */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Course Content</h2>
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <p className="font-medium">
                      {course.modules.length} modules • {course.lessons} lessons • {course.duration} total
                    </p>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                          <div className="text-left">
                            <p className="font-medium">{module.title}</p>
                            <p className="text-sm text-gray-500">{module.lessons.length} lessons</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2">
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center space-x-3 p-2">
                                <PlayCircle className="h-5 w-5 text-brand-600" />
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-500 mt-2 mr-3"></div>
                      <p>{req}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Instructor */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">JS</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{course.instructor}</h3>
                    <p className="text-gray-600">{course.category} Expert</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Professional instructor with years of experience in {course.category.toLowerCase()}, helping students
                  achieve their goals through practical, results-oriented teaching.
                </p>
              </div>

              {/* Related Courses */}
              <div>
                <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
                <div className="space-y-4">
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Course Thumbnail</span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Content Strategy & Creation</h3>
                      <p className="text-sm text-gray-600 mb-2">Develop a strategic approach to content creation</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">$189</span>
                        <Button asChild variant="outline" size="sm">
                          <Link href="/courses/6">View</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Course Thumbnail</span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Personal Productivity Mastery</h3>
                      <p className="text-sm text-gray-600 mb-2">Boost your productivity and achieve more</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">$149</span>
                        <Button asChild variant="outline" size="sm">
                          <Link href="/courses/3">View</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseDetail


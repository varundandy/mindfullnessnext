"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Mail, MapPin, Briefcase, GraduationCap, Award } from "lucide-react"

const AboutContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I'm YourName, an experienced educator and mentor committed to helping people develop new skills and
                advance their careers. With over a decade of experience in teaching and mentoring, I've helped hundreds
                of individuals achieve their personal and professional goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-brand-600 hover:bg-brand-700">
                  <Link href="/courses">Explore My Courses</Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-600 text-brand-600">
                  <a href="mailto:contact@yourname.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                {/* Replace this with your actual image */}
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Your Profile Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-3">
              <TabsTrigger value="bio">Biography</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="bio" className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">My Story</h2>
                  <p className="text-gray-600">Learn more about my background, expertise, and teaching philosophy.</p>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>
                    My journey began when I discovered my passion for teaching while working in the [your industry]
                    industry. After seeing many colleagues and friends struggle with [specific challenges], I decided to
                    create resources and courses to help others overcome these obstacles.
                  </p>

                  <p>
                    What sets my teaching approach apart is my focus on practical, results-oriented guidance. I believe
                    that learning should be engaging, actionable, and directly applicable to real-world scenarios. My
                    courses combine theoretical knowledge with hands-on exercises and real-world case studies.
                  </p>

                  <p>
                    Over the years, I've had the privilege of working with individuals from diverse backgrounds, helping
                    them develop new skills, transition to different career paths, and achieve their professional goals.
                    These experiences have shaped my teaching methodology and reinforced my commitment to providing
                    high-quality educational content.
                  </p>

                  <p>
                    When I'm not teaching or mentoring, you can find me [your hobbies or interests]. These activities
                    help me maintain a balanced perspective and bring fresh insights to my work.
                  </p>

                  <p>I'm excited about the opportunity to work with you and support your learning journey!</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                  <p className="text-gray-600">My career journey and professional accomplishments.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-brand-700" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">Current Role Title</h3>
                        <span className="text-sm text-gray-500">2020 - Present</span>
                      </div>
                      <p className="text-brand-600 mb-2">Company Name</p>
                      <p className="text-gray-700">
                        Description of your responsibilities, achievements, and impact in this role. Include relevant
                        metrics and outcomes where possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-brand-700" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">Previous Role Title</h3>
                        <span className="text-sm text-gray-500">2015 - 2020</span>
                      </div>
                      <p className="text-brand-600 mb-2">Previous Company</p>
                      <p className="text-gray-700">
                        Description of your responsibilities, achievements, and impact in this role. Include relevant
                        metrics and outcomes where possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-brand-700" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">Earlier Role Title</h3>
                        <span className="text-sm text-gray-500">2010 - 2015</span>
                      </div>
                      <p className="text-brand-600 mb-2">Earlier Company</p>
                      <p className="text-gray-700">
                        Description of your responsibilities, achievements, and impact in this role. Include relevant
                        metrics and outcomes where possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
                  <p className="text-gray-600">My academic background and professional qualifications.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-brand-700" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">Degree Name</h3>
                        <span className="text-sm text-gray-500">Graduation Year</span>
                      </div>
                      <p className="text-brand-600 mb-2">University Name</p>
                      <p className="text-gray-700">
                        Brief description of your studies, specializations, and notable achievements.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                        <Award className="h-6 w-6 text-brand-700" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">Certification Name</h3>
                        <span className="text-sm text-gray-500">Year Obtained</span>
                      </div>
                      <p className="text-brand-600 mb-2">Issuing Organization</p>
                      <p className="text-gray-700">
                        Brief description of what this certification represents and its significance in your field.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-brand-700" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg">Additional Training</h3>
                        <span className="text-sm text-gray-500">Various Years</span>
                      </div>
                      <p className="text-brand-600 mb-2">Multiple Institutions</p>
                      <p className="text-gray-700">
                        Overview of additional courses, workshops, and training programs you've completed to enhance
                        your expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or want to discuss how I can help you? Reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <a href="mailto:contact@yourname.com" className="text-brand-600 hover:underline">
                contact@yourname.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-gray-600">
                City, State/Province
                <br />
                Country
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-medium mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutContent


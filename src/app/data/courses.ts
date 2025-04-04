import { Course, Testimonial } from "@/types/types";

export const fetchCourses = async (): Promise<Course[]> => {
    const response = await fetch(`${process.env.HOSTNAME}/api/courses`, {
      next: { revalidate: 10 }, // Adjust caching as needed
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
  
    const data: Course[] = await response.json(); // Enforce strict typing here
    return data;
  };

   // Fetch courses before rendering
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
    const response = await fetch(`${process.env.HOSTNAME}/api/testimonials`, {
      next: { revalidate: 10 }, // Adjust caching as needed
    });
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const data: Testimonial[] = await response.json(); // Enforce strict typing here
    return data;
  };



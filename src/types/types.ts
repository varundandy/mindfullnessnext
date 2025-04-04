export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  level: string;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  initials: string;
}

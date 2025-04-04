import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Mindful Journey",
  description: "Sign in to access your courses and bookings.",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}


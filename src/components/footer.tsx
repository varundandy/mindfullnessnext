import Link from "next/link"
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">YourName</h4>
            <p className="text-gray-600 mb-4">
              Helping people achieve their potential through education and mentorship.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/yourusername"
                aria-label="Twitter"
                className="text-gray-500 hover:text-brand-600"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-brand-600"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                aria-label="Instagram"
                className="text-gray-500 hover:text-brand-600"
              >
                <Instagram size={20} />
              </a>
              <a href="mailto:you@example.com" aria-label="Email" className="text-gray-500 hover:text-brand-600">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-brand-600">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-600 hover:text-brand-600">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-brand-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-gray-600 hover:text-brand-600">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-brand-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-brand-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-brand-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-600 hover:text-brand-600">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">© {currentYear} YourName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import DonateButton from "@/components/donate-button"

const Navbar = () => {
  const isMobile = useIsMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center font-bold text-xl text-brand-700 dark:text-brand-400">
          <span className="mr-1">🧘</span> MindfulJourney
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/courses">Courses</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/books">Books</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/meditation">Meditation</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/booking">Book a Session</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/donations">Donate</Link>
            </Button>
            <ThemeToggle />
            <Button variant="default" asChild className="ml-2">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex items-center">
            <ThemeToggle />
            <DonateButton />
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="ml-1">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses" onClick={() => setIsMenuOpen(false)}>
                    Courses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/books" onClick={() => setIsMenuOpen(false)}>
                    Books
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/meditation" onClick={() => setIsMenuOpen(false)}>
                    Meditation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                    Book a Session
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/donations" onClick={() => setIsMenuOpen(false)}>
                    Donate
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


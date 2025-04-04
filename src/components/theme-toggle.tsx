"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="h-5 w-5 transition-all" /> : <Sun className="h-5 w-5 transition-all" />}
    </Button>
  )
}


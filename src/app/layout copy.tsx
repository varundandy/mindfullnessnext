import type React from "react"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/query-provider"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mindful Journey",
  description: "Mindfulness & Meditation for a Balanced Life",
  openGraph: {
    title: "Mindful Journey",
    description: "Mindfulness & Meditation for a Balanced Life",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindful_journey",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <TooltipProvider>
              <main>{children}</main>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}



import './globals.css'
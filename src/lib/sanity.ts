import type { SanityImage } from "@/types/sanity"

// This is a simplified version for the demo
export function buildImageUrl(ref: SanityImage): string {
  if (!ref || !ref.asset || !ref.asset._ref) {
    return "https://images.unsplash.com/photo-1506744038136-46273834b3fb" // Fallback image
  }

  // In a real app, you would use the Sanity image URL builder
  // For now, we'll just return a placeholder
  return "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
}

// Function to fetch data from our Next.js API route
export async function fetchFromSanity<T>(query: string, params?: Record<string, any>): Promise<T> {
  const response = await fetch("/api/sanity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      params: params || {},
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch from Sanity: ${response.statusText}`)
  }

  return response.json()
}


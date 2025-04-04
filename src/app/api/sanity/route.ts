import { NextResponse } from "next/server"
import { createClient } from "@sanity/client"

// Initialize the Sanity client
const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_TOKEN, // Only needed for private datasets
  useCdn: true,
})

export async function POST(request: Request) {
  try {
    const { query, params } = await request.json()

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    // Execute the Sanity query
    const result = await sanityClient.fetch(query, params || {})

    // Return the results
    return NextResponse.json(result)
  } catch (error) {
    console.error("Sanity error:", error)
    return NextResponse.json({ error: "Error fetching from Sanity" }, { status: 500 })
  }
}


import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { endpoint, method = "GET", body } = await request.json()

    if (!endpoint) {
      return NextResponse.json({ error: "Missing required endpoint parameter" }, { status: 400 })
    }

    // Get Calendly API key from environment variables
    const calendlyApiKey = process.env.CALENDLY_API_KEY

    if (!calendlyApiKey) {
      return NextResponse.json({ error: "Calendly API key not configured" }, { status: 500 })
    }

    // Make the request to Calendly's API
    const response = await fetch(`https://api.calendly.com${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${calendlyApiKey}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    const data = await response.json()

    // Return the Calendly API response
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Calendly error:", error)
    return NextResponse.json({ error: "Error communicating with Calendly" }, { status: 500 })
  }
}


import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    const { title, priceInCents, successUrl, cancelUrl } = await request.json()

    if (!title || !priceInCents || !successUrl || !cancelUrl) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: title,
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    // Return the session URL to redirect the user
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}


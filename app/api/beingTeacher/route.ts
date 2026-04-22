import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY!)
const PRICE_ID = "price_1TKSx6LqBmsSIuootlebGUHA"

export async function POST(req: Request) {
    const { userId } = await auth()
    try {
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: PRICE_ID,
                    quantity: 1,
                },
            ],
            metadata: {
                type: "teacher_subscription",
                userId
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/academy/teacher`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/academy/being-teacher`,
        })

        return Response.json({ url: session.url })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }

}
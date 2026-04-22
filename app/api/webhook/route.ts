import Stripe from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { updateMetadata } from "@/actios/changeRole";

export async function POST(req: Request) {
    console.info("[WEBHOOK INICIALITING]");
    console.log("[WEBHOOK INICIALITING]");

    const body = await req.text()
    const headerList = await headers()

    const signature = headerList.get("stripe-signature") as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch {
        return NextResponse.json({ message: "Webhook Error" }, { status: 400 })
    }finally{
        console.log("[WEBHOOK FINALLY]");
    }

    const session = event.data.object as Stripe.Checkout.Session

    const userId = session?.metadata?.userId
    const courseId = session?.metadata?.courseId
    const coursePrice = session?.metadata?.price
    const type = session?.metadata?.type
    const price = coursePrice ? Number(coursePrice.replace(',', '.')) : 0


    if (event.type === "checkout.session.completed") {
        if (type === "teacher_subscription") {

            if (!userId) {
                return NextResponse.json({ message: "Missing userId" }, { status: 400 })
            }

            await updateMetadata(userId)

            return NextResponse.json({ message: "Role updating" }, { status: 200 })
        }

        if (!userId || !courseId || !coursePrice) {
            return NextResponse.json({ message: "Webhook Error missin metadata" }, { status: 400 })
        }

        const existingPurchase = await prisma.purchase.findUnique({
            where: {
                userId_courseId: {
                    userId,
                    courseId
                }
            }
        })

        if (!existingPurchase) {
            await prisma.purchase.create({
                data: {
                    userId,
                    courseId,
                    price
                }
            })
        } else {
            return NextResponse.json({ message: `Webhook error: Unhandle event type ${event.type}` }, { status: 200 })
        }
    }

    return NextResponse.json({ message: "WebHook Done!" }, { status: 200 })
}
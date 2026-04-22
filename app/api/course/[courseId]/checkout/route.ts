import prisma from "@/lib/prisma"
import { stripe } from "@/lib/stripe"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import Stripe from "stripe"

interface Params {
    params: Promise<{ courseId: string }>
}

export async function POST(req: Request, { params }: Params) {
    const { userId } = await auth()
    const { courseId } = await params

    const user = await currentUser()

    if (!userId || !user) {
        return NextResponse.json({ message: "Unathorized" }, { status: 404 })
    }

    try {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
                isPublished: true
            },
            include: {
                chapters: {
                    orderBy: {
                        position: "asc"
                    }
                }
            }
        })

        if (!course) {
            return NextResponse.json({ message: "CURSE_NOT_FOUND" }, { status: 404 })
        }

        const purchase = await prisma.purchase.findUnique({
            where: {
                userId_courseId: {
                    userId,
                    courseId
                }
            }
        })

        if (purchase) {
            return NextResponse.json({ message: "ALRREADY_PURCHASED" }, { status: 409 })
        }

        const priceCourse = course.price ? Number(course.price.replace(",", ".")) : 0

        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                price_data: {
                    currency: "EUR",
                    product_data: {
                        name: course.title,
                    },
                    unit_amount: Math.round(priceCourse * 100)
                },
                quantity: 1,
            },
        ];

        let stripeCustomer = await prisma.stripeCustomer.findUnique({
            where: {
                userId
            },
            select: {
                stripeCustomerId: true
            }
        })

        if (!stripeCustomer) {
            const customer = await stripe.customers.create({
                email: user.emailAddresses[0].emailAddress
            })

            stripeCustomer = await prisma.stripeCustomer.create({
                data: {
                    userId,
                    stripeCustomerId: customer.id
                }
            })
        }

        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomer.stripeCustomerId,
            line_items,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/academy/courses/${course.slug}/${course.chapters[0].id}?success=1`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/academy/courses/${course.slug}?cancelled=1`,
            metadata: {
                courseId: course.id,
                userId,
                price: course.price ? course.price.toString() : "0"
            }
        })
        return NextResponse.json({ message: session.url }, { status: 200 },)
    } catch (error) {
        console.log("COURSE_CHECKOUT", error);
        return NextResponse.json({ message: "[STRIPE_COURSE_CHECKOUT]" }, { status: 500 })
    }

}
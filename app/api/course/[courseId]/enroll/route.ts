import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

interface Params {
    params: Promise<{ courseId: string }>
}

export async function POST(req: Request, { params }: Params) {
    const { userId } = await auth()
    const { courseId } = await params

    if (!userId) {
        return new NextResponse("Unathorized", { status: 401 })
    }
    try {
        const existingPurchase = await prisma.purchase.findUnique({
            where: {
                userId_courseId: {
                    userId,
                    courseId
                }
            }
        })

        if (existingPurchase) {
            return new NextResponse("Already enrolled", { status: 409 })
        }

        await prisma.purchase.create({
            data: {
                userId,
                courseId,
                price: 0
            }
        })

        return NextResponse.json({ message: "Enrolled" }, { status: 201 })
    } catch (error) {
        console.log("ENRROLE COURSE", error);
        return new NextResponse("Internal server error", { status: 500 })
    }
}
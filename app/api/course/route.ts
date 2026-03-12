import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { userId } = await auth()
        const { courseName, slug } = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const course = await prisma.course.create({
            data: {
                userID: userId,
                title: courseName,
                slug: slug
            }
        })

        return NextResponse.json(course)
    } catch (error) {
        console.log("POST COURSE", error);
        return new NextResponse('[POST-COURSE] Internal Error', { status: 500 })
    }
}
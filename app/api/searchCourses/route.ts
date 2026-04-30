import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const courses = await prisma.course.findMany({
            select: {
                slug: true,
                title: true
            }
        })

        return NextResponse.json(courses, { status: 200 })

    } catch (error) {
        return NextResponse.json([], { status: 500 })
    }
}
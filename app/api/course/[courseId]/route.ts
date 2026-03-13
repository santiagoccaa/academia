import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{ courseId: string }>
}

export async function DELETE(req: Request, { params }: Params) {
    try {
        const { userId } = await auth()
        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const { courseId } = await params

        const course = await prisma.course.delete({
            where: {
                id: courseId,
                userID: userId
            }
        })

        return NextResponse.json(course)
    } catch (error) {
        console.log(error);
        console.log('[Delete COURSE]', { status: 500 });

    }
}
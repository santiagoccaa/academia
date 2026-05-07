import { Prisma } from "@/app/generated/prisma/client"

export type CoursesCardHome = Prisma.CourseGetPayload<{
    select: {
        id: true,
        category: true,
        title: true,
        createdAt: true,
        userID: true,
        price: true,
        imageUrl: true,
        description: true
        slug: true

        _count: {
            select: {
                purchases: true,
                feedback: true
            }
        }
    }
}> & {
    avgStars: number
}
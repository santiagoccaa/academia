import { Prisma } from "@/app/generated/prisma/client"

export type CoursesCardHome = Prisma.CourseGetPayload<{
    select: {
        id: true
        category: true
        title: true
        createdAt: true
        userId: true
        price: true
        imageUrl: true
        description: true
        slug: true
        _count: {
            select: {
                purchases: true,
                feedback: true
            }
        }
        feedback: {
            select: {
                stars: true
            }
        }
    }
}> & {
    avgStars: number
}
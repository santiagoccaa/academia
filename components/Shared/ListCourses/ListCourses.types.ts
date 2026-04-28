import { Chapter, Course, Prisma } from "@/app/generated/prisma/client"

export type CourseWithExtras = Prisma.CourseGetPayload<{
    include: {
        chapters: true,
        _count: {
            select: {
                purchases: true
            }
        },
        feedback: {
            select: {
                stars: true
            }
        }
    }
}> & {
    avgStars: number
}

export type ListCoursesProps = {
    title?: string
    courses: CourseWithExtras[] | null
}
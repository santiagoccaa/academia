import { Chapter, Course, Prisma } from "@/app/generated/prisma/client"

export type CourseWithExtras = Prisma.CourseGetPayload<{
    include: {
        chapters: true,
        _count: {
            select: {
                purchases: true
            }
        }
    }
}>

export type ListCoursesProps = {
    title?: string
    courses: CourseWithExtras[] | null
}
import prisma from "@/lib/prisma"

export const getTeacherId = async (courseSlug: string): Promise<string | null> => {
    try {
        const teacherId = await prisma.course.findUnique({
            where: {
                slug: courseSlug
            },
            select: {
                userID: true
            }
        })

        return teacherId?.userID ?? null
    } catch (error) {
        return null
    }
}
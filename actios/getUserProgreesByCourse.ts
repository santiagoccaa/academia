import prisma from "@/lib/prisma"

export const getUserProgreesByCourse = async (courseId: string, userId: string): Promise<number> => {
    try {
        const purchase = await prisma.purchase.findFirst({
            where: {
                userId,
                courseId
            }
        })

        if (!purchase) {
            return 0
        }

        const totalChapters = await prisma.chapter.count({
            where: {
                courseId
            }
        })

        if (!totalChapters) {
            return 0
        }

        const completedChapters = await prisma.userProgress.count({
            where: {
                userId,
                isCompleted: true,
                chapter: {
                    courseId
                }
            }
        })

        const progressPercentaje = Math.round(
            (completedChapters / totalChapters) * 100
        )

        return progressPercentaje
    } catch (error) {
        console.log("GET USER PROGRESS BY COURSE");
        return 0
    }
}
import { FeedbackCourse } from "@/app/generated/prisma/client"
import prisma from "@/lib/prisma"

export const getFedbackCourse = async (userId: string, courseId: string): Promise<FeedbackCourse | null> => {
    try {
        const feedback = await prisma.feedbackCourse.findUnique({
            where: {
                userId_courseId: {
                    courseId,
                    userId
                }
            }
        })

        return feedback
    } catch (error) {
        return null
    }
} 
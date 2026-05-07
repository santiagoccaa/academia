import prisma from "@/lib/prisma"
import { CoursesCardHome } from "./coursesCardHome.types"

export const coursesCardHome = async (): Promise<CoursesCardHome[] | null> => {
    try {
        const courses = await prisma.course.findMany({
            take: 9,
            where: {
                isPublished: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                category: true,
                title: true,
                createdAt: true,
                userID: true,
                price: true,
                imageUrl: true,
                description: true,
                slug: true,
                _count: {
                    select: {
                        purchases: true,
                        feedback: true
                    }
                },
                feedback: {
                    select: {
                        stars: true
                    }
                }
            }
        })

        const coursesWithAvg = courses.map(course => {
            const avgStars = course.feedback.length > 0
                ? course.feedback.reduce((acc, f) => acc + f.stars, 0) / course.feedback.length
                : 0

            return {
                ...course,
                avgStars: Math.round(avgStars * 10) / 10
            }
        })

        return coursesWithAvg
    } catch (error) {
        return null
    }
}
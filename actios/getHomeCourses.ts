import { CourseWithExtras } from "@/components/Shared/ListCourses/ListCourses.types";
import prisma from "@/lib/prisma";

export const getHomeCourses = async (): Promise<CourseWithExtras[] | null> => {
    try {
        const courses = await prisma.course.findMany({
            where: {
                isPublished: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                chapters: {
                    where: {
                        isPublised: true
                    }
                },
                _count: {
                    select: {
                        purchases: true
                    }
                },
                feedback: {
                    orderBy: {
                        createdAt: "asc"
                    },
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
        console.log('[GET_HOME_COURSES_ERROR]');
        return null
    }
}
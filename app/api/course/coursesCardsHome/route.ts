import { CoursesCardHome } from "@/actios/courses"
import { getIsPurchasedCourse } from "@/actios/getIsPurchasedCourse"
import prisma from "@/lib/prisma"
import { apiResponse, ApiResponse } from "@/types/apiResponse/types"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(
    req: Request
): Promise<NextResponse<ApiResponse<CoursesCardHome[]>>> {
    try {

        const { userId } = await auth()

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
                userId: true,
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
                },
                courseAuthor: {
                    select: {
                        firstName: true,
                        lastName: true,
                        imageUrl: true
                    }
                }
            }
        })

        const coursesWithAvg = await Promise.all(
            courses.map(async (course) => {
                const avgStars = course.feedback.length > 0
                    ? course.feedback.reduce((acc, f) => acc + f.stars, 0) / course.feedback.length
                    : 0

                const { feedback, ...courseRestFeedback } = course

                let purchaseCourse = false

                if (userId) {
                    purchaseCourse = await getIsPurchasedCourse(
                        userId,
                        course.id,
                        course.userId
                    )
                }

                const courseCompletedInformation = {
                    ...courseRestFeedback,
                    purchaseCourse
                }

                return {
                    ...courseCompletedInformation,
                    avgStars: Math.round(avgStars * 10) / 10
                }
            })
        )

        return apiResponse<CoursesCardHome[]>({
            data: coursesWithAvg,
            message: "success",
            status: 200
        })
    } catch (error) {
        console.log("[GET HOME COURSES]",error);
        
        return apiResponse<CoursesCardHome[]>({
            data: null,
            message: "Internal server error",
            error: error,
            status: 500
        }, { status: 500 })
    }
}
import { CoursesCardHome } from "@/actios/courses"
import prisma from "@/lib/prisma"
import { apiResponse, ApiResponse } from "@/types/apiResponse/types"
import { NextResponse } from "next/server"

export async function GET(
    req: Request
): Promise<NextResponse<ApiResponse<CoursesCardHome[]>>> {
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

        const coursesWithAvg = courses.map(course => {
            const avgStars = course.feedback.length > 0
                ? course.feedback.reduce((acc, f) => acc + f.stars, 0) / course.feedback.length
                : 0

            const { feedback, ...courseRestFeedback } = course

            return {
                ...courseRestFeedback,
                avgStars: Math.round(avgStars * 10) / 10
            }
        })

        return apiResponse<CoursesCardHome[]>({
            data: coursesWithAvg,
            message: "success",
            status: 200
        })
    } catch (error) {
        return apiResponse<CoursesCardHome[]>({
            data: null,
            message: "Internal server error",
            status: 500
        }, { status: 500 })
    }
}
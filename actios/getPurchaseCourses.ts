import { Chapter, Course } from "@/app/generated/prisma/client";
import { CourseWithExtras } from "@/components/Shared/ListCourses/ListCourses.types";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const getPurchasesCoureses = async (): Promise<CourseWithExtras[] | null> => {
    const user = await currentUser()

    if (!user?.id) {
        throw new Error("No existe el usuario")
    }

    try {
        const purchaseCourses = await prisma.course.findMany({
            where: {
                OR: [
                    {
                        userID: user.id
                    },
                    {
                        purchases: {
                            some: {
                                userId: user.id
                            }
                        }
                    }
                ],
                isPublished: true
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

        const coursesWithAvg = purchaseCourses.map(course => {
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
        console.log(error);
        return []
    }
}
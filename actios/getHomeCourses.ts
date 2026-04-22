import { Chapter, Course } from "@/app/generated/prisma/client";
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
                }
            }
        })

        return courses
    } catch (error) {
        console.log('[GET_HOME_COURSES_ERROR]');
        return null
    }
}
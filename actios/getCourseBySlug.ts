import { Chapter, Course } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export const getCourseBySlug = async (slug: string): Promise<Course & { chapters: Chapter[] } | null> => {
    try {
        const course = prisma.course.findUnique({
            where: {
                slug,
                isPublished: true
            },
            include: {
                chapters: {
                    where: {
                        isPublised: true
                    },
                    orderBy: {
                        position: "asc"
                    }
                }
            }
        })

        return course
    } catch (error) {
        console.log("GET_COURSE_BY_SLUG", error);
        return null
    }
}
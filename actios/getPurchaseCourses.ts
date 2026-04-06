import { Chapter, Course } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const getPurchasesCoureses = async (): Promise<(Course & { chapters: Chapter[] })[] | null> => {
    const user = await currentUser()

    if (!user?.id) {
        throw new Error("No existe el usuario")
    }

    try {
        const purchaseCourses = await prisma.course.findMany({
            where: {
                purchases: {
                    some: {
                        userId: user.id
                    }
                },
                isPublished: true
            },
            include: {
                chapters: {
                    where: {
                        isPublised: true
                    }
                }
            }
        })

        return purchaseCourses
    } catch (error) {
        console.log(error);
        return []
    }
}
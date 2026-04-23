import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server";
import { error } from "console";

export const getIsPurchasedCourse = async (userId: string, courseId: string): Promise<boolean> => {

    const user = await auth()
    const teacherId = user.userId

    try {
        if (teacherId === userId) {
            return true
        }

        const purchase = await prisma.purchase.findFirst({
            where: {
                userId,
                courseId
            }
        })

        return !!purchase
    } catch {
        console.log("[GET_IS_PURCHASE_COURSE]", error);
        return false
    }
}
import prisma from "@/lib/prisma"
import { error } from "console";


export const getIsPurchasedCourse = async (userId: string, courseId: string): Promise<boolean> => {
    try {
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
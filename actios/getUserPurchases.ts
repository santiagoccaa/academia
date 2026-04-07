import prisma from "@/lib/prisma"
import { es } from 'date-fns/locale'
import { format } from "date-fns"

export const getUserPurchases = async (userId: string) => {
    try {
        const purchases = await prisma.purchase.findMany({
            where: {
                userId
            }, orderBy: {
                createdAt: "asc"
            }, include: {
                course: {
                    select: {
                        id: true,
                        title: true,
                        price: true
                    }
                }
            }
        })

        const formattedPurchases = purchases.map((purchase) => ({
            ...purchase,
            cretedAtFormated: format(purchase.createdAt, "dd/MM/yyyy", {
                locale: es
            })
        }))

        return formattedPurchases
    } catch (error) {
        console.log("GET_USER_PURCHASES", error);
        return []
    }
}
import { Chapter } from "@/app/generated/prisma/client"

export type CardCourseProps = {
    imageUrl: string | null
    title: string
    description: string | null
    price: string | null
    slug: string
    category: string | null
    chapters: Chapter[]
    userID: string
    createdAt: Date
}
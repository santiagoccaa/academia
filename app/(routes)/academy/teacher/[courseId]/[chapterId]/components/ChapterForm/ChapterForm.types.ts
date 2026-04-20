import { Chapter } from "@/app/generated/prisma/client"

export type ChapterFormProps = {
    courseId: string
    chapter: Chapter | null
}
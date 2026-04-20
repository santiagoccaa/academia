import { Chapter } from "@/app/generated/prisma/client"

export type ChapterTitleFormProps = {
    courseId: string,
    chapter: Chapter
}
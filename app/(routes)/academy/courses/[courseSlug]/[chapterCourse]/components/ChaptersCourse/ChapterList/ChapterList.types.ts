import { Chapter, UserProgress } from "@/app/generated/prisma/client"

export type ChapterListProps = {
    chapters: Chapter[] | null
    courseSlug: string
    currentChapter: string
    userProgress: UserProgress[]
}
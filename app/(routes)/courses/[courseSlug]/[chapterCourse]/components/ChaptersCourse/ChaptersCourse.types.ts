import { Chapter, UserProgress } from "@/app/generated/prisma/client"

export type ChaptersCourseProps = {
    chapters: Chapter[] | null
    courseSlug: string
    chapterCourse: string
    userProgress: UserProgress[]
}
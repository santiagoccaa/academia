import { Chapter, Course, UserProgress } from "@/app/generated/prisma/client"

export type ProgressCourseProps = {
    userProgress: UserProgress[]
    chapterCourseId: string
    infoCourse: Course & { chapters: Chapter[] }
}
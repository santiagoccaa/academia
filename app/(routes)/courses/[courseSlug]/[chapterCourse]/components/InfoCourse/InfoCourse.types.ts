import { Chapter, Course, UserProgress } from "@/app/generated/prisma/client";

export type InfoCourseProps = {
    infoCourse: Course & { chapters: Chapter[] }
    chapterCourseId: string
    userProgress: UserProgress[]
    purchaseCourse: boolean
    videoUrl: string | null | undefined
}
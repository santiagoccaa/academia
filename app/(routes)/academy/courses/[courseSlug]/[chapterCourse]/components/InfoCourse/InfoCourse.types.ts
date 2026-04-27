import { Chapter, Course, FeedbackCourse, UserProgress } from "@/app/generated/prisma/client";

export type InfoCourseProps = {
    infoCourse: Course & { chapters: Chapter[], feedback?: FeedbackCourse[] }
    chapterCourseId: string
    userProgress: UserProgress[]
    purchaseCourse: boolean
    videoUrl: string | null | undefined
}
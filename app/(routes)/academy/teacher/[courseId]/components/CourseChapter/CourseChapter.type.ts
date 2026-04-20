import { Chapter } from "@/app/generated/prisma/client"

export type CourseChapterProps ={
    idCourse: string
    chapters: Chapter[] | null
}
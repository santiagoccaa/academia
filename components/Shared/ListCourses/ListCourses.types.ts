import { Chapter, Course } from "@/app/generated/prisma/client"

export type ListCoursesProps ={
    title:string
    courses: (Course & {chapters: Chapter[]})[] | null
}
import { Chapter, Course } from "@/app/generated/prisma/client"

export type CoursesListProps = {
    courses: (Course & { chapters: Chapter[], progress: number })[]
    userName: string
}
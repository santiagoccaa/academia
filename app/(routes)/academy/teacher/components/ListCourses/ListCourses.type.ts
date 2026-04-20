import { Course } from "@/app/generated/prisma/client"

export type ListCoursesProps = {
    courses: Course[]
}
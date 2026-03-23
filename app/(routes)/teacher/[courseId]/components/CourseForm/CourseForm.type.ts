import { Chapter, Course } from "@/app/generated/prisma/client"

export type CourseFormProps = {
    course: CourseWithRelations
}

type CourseWithRelations = Course & { chapters: Chapter[] }

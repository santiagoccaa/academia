import { Chapter, Course } from "@/app/generated/prisma/client"

export type HeroBlockCourseProps = {
    course: Course & { chapters: Chapter[] }
    purchase: boolean
}
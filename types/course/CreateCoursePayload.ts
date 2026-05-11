/**
 * Info for created new course
 * Use in: /api/course/route.ts
 */

export type CreateCoursePayload = {
    title: string
    slug: string
}
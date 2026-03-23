import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { CourseForm, HeaderCourse } from "./components"

interface Params {
    params: Promise<{ courseId: string }>
}

export default async function CoursePage({ params }: Params) {

    const { courseId } = await params

    const { userId } = await auth()

    if (!userId) {
        return <p>No tienes permisos para ver este curso</p>
    }

    const course = await prisma.course.findUnique({
        where: {
            id: courseId,
            userID: userId
        },
        include: {
            chapters: true
        }
    })

    if (!course) {
        return <p>Este curso no existe.</p>
    }
    return (
        <div className="m-6">
            <HeaderCourse idCourse={course.id} isPublished={course.isPublished} />
            <CourseForm course={course} />
        </div>
    )
}
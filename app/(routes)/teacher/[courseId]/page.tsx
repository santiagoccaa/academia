import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { CourseForm, CourseImage, CoursePrice, HeaderCourse } from "./components"

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

            <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4">
                <CourseImage idCourse={course.id} imageCourse={course.imageUrl} />
                <CoursePrice idCourse={course.id} priceCourse={course.price} />
            </div>

            <p>course chaters</p>
        </div>
    )
}
import { currentUser } from "@clerk/nextjs/server"
import { Header, ListCourses } from "./components"
import prisma from "@/lib/prisma"
import { Test } from "./components/Test"

export default async function TeacherPage() {
    const user = await currentUser()
    if (!user) return

    const courses = await prisma.course.findMany({
        where: {
            userID: user.id
        }
    })

    return (
        <div>
            <Header />
            <ListCourses courses={courses} />

            <div className="h-20 p-4 bg-violet-300">
                <Test />
            </div>
        </div>
    )
}

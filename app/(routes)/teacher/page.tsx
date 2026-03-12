import { currentUser } from "@clerk/nextjs/server"
import { Header } from "./components"
import prisma from "@/lib/prisma"

export default async function TeacherPage() {
    const user = await currentUser()
    if (!user) return

    const courses = await prisma.course.findMany({
        where: {
            userID: user.id
        }
    })

    console.log("cursor",courses);

    return (
        <div>
            <Header />
        </div>
    )
}

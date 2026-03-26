import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { ChapterForm } from "./components"

interface Params {
    params: Promise<{ courseId: string, chapterId: string }>
}


export default async function ChapterPage({ params }: Params) {

    const { courseId, chapterId } = await params

    const { userId } = await auth()

    if (!userId) {
        return <p>No tienes permiso para ver este capitulo</p>
    }

    const chapter = await prisma.chapter.findUnique({
        where: {
            id: chapterId,
            courseId
        }
    })

    if (!chapter) {
        return <p>Este capitulo no existe</p>
    }
    return (
        <div className="m-6">
            <ChapterForm courseId={courseId} chapter={chapter} />
        </div>
    )
}
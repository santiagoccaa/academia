import { getCourseBySlug } from "@/actios/getCourseBySlug"
import { getIsPurchasedCourse } from "@/actios/getIsPurchasedCourse"
import { getUserProgress } from "@/actios/getUserProgress"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ChaptersCourse, InfoCourse } from "./components"

interface Params {
    params: Promise<{ courseSlug: string, chapterCourse: string }>
}

export default async function ChapterCoursePage({ params }: Params) {

    const { chapterCourse, courseSlug } = await params

    const user = await currentUser()

    if (!user) {
        return redirect("/")
    }

    const infoCourse = await getCourseBySlug(courseSlug)

    const userProgress = await getUserProgress()

    if (!infoCourse) {
        return redirect(`/courses/${courseSlug}`)
    }

    const isPurchaseCourse = await getIsPurchasedCourse(user.id, infoCourse.id)

    const videoUrl = infoCourse.chapters.find((chapter) => chapter.id === chapterCourse)?.videoUrl

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] gap-4">
                <InfoCourse
                    chapterCourseId={chapterCourse}
                    infoCourse={infoCourse}
                    purchaseCourse={isPurchaseCourse}
                    userProgress={userProgress}
                    videoUrl={videoUrl}
                />

                <ChaptersCourse
                    chapters={infoCourse.chapters}
                    courseSlug={courseSlug}
                    chapterCourse={chapterCourse}
                    userProgress={userProgress}
                />
            </div>
        </div>
    )
}

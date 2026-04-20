import { getCourseBySlug } from "@/actios/getCourseBySlug"
import { BreadCrumbCourse, CourseContent, HeroBlockCourse } from "./components"
import { redirect } from "next/navigation"
import { getPurchaseCourseById } from "@/actios/getPurchaseCourseById"
import { currentUser } from "@clerk/nextjs/server"

interface Params {
    params: Promise<{ courseSlug: string }>
}

export default async function CourseSlugPage({ params }: Params) {

    const user = await currentUser()
    if (!user) {
        redirect("/")
    }

    const { courseSlug } = await params
    const infoCourse = await getCourseBySlug(courseSlug)

    if (!infoCourse) {
        redirect("/")
    }

    const { title, id, chapters } = infoCourse

    const purchaseCourse = await getPurchaseCourseById(user.id, id)

    return (
        <div className="max-w-6xl mx-auto ">
            <div className="my-4 mx-6 border rounded-lg bg-white p-6">
                <BreadCrumbCourse title={title} />
                <HeroBlockCourse course={infoCourse} purchase={purchaseCourse} />
            </div>

            <div className="my-4 mx-6 border rounded-lg bg-white p-6">
                <CourseContent chapters={chapters} />
            </div>
        </div>
    )
}

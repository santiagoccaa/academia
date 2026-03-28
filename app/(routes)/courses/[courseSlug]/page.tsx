import { getCourseBySlug } from "@/actios/getCourseBySlug"
import { BreadCrumbCourse, HeroBlockCourse } from "./components"
import { redirect } from "next/navigation"
import { getPurchaseCourseById } from "@/actios/getPurchaseCourseById"

interface Params {
    params: Promise<{ courseSlug: string }>
}

export default async function CourseSlugPage({ params }: Params) {
    const { courseSlug } = await params
    const infoCourse = await getCourseBySlug(courseSlug)

    if (!infoCourse) {
        redirect("/")
    }

    const { title, userID, id } = infoCourse

    const purchaseCourse = await getPurchaseCourseById(userID, id)

    return (
        <div className="max-w-6xl mx-auto ">
            <div className="my-4 mx-6 border rounded-lg bg-white p-6">
                <BreadCrumbCourse title={title} />
                <HeroBlockCourse course={infoCourse} purchase={purchaseCourse} />
            </div>
        </div>
    )
}

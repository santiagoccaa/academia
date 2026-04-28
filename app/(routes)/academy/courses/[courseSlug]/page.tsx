import { getCourseBySlug } from "@/actios/getCourseBySlug"
import { BreadCrumbCourse, CourseContent, HeroBlockCourse } from "./components"
import { redirect } from "next/navigation"
import { getPurchaseCourseById } from "@/actios/getPurchaseCourseById"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { StarRating } from "@/components/Shared"

interface Params {
    params: Promise<{ courseSlug: string }>
}

export default async function CourseSlugPage({ params }: Params) {

    const client = await clerkClient();

    const user = await currentUser()
    if (!user) {
        redirect("/")
    }

    const { courseSlug } = await params
    const infoCourse = await getCourseBySlug(courseSlug)

    if (!infoCourse) {
        redirect("/")
    }

    const { title, id, chapters, feedback } = infoCourse

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
            {feedback &&
                <div className="my-4 mx-6 border rounded-lg bg-white p-6">
                    {feedback.map(async (item, index) => {
                        const user = await client.users.getUser(item.userId)
                        return (
                            <div key={index} className="py-2 border-b space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 aspect-square rounded-full relative overflow-hidden">
                                        <Image src={user.imageUrl} fill alt={user.firstName || 'teacher'} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-800 capitalize">{user.firstName} {user.lastName}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <StarRating rating={item.stars} />
                                    <span className="text-xs font-light text-gray-600">{item.createdAt.toLocaleDateString()}</span>
                                </div>
                                <p className="text-sm font-light text-gray-700">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

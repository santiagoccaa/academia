import { getPurchasesCoureses } from "@/actios/getPurchaseCourses"
import { ListCourses } from "@/components/Shared"

export default async function MyCoursesPage() {

    const courses = await getPurchasesCoureses()

    return (
        <ListCourses title="academy.myCourses" courses={courses} />
    )
}

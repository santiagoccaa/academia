import { getHomeCourses } from "@/actios/getHomeCourses"
import { ListCourses } from "@/components/Shared"

export default async function CoursesPage() {
  const listCourses = await getHomeCourses()
  return (
    <div>
      <ListCourses courses={listCourses} title="Todos los cursos" />
    </div>
  )
}

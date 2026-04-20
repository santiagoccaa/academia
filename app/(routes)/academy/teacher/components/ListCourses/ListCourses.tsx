import { CourseCard } from "./CourseCard"
import { ListCoursesProps } from "./ListCourses.type"

export const ListCourses = ({ courses }: ListCoursesProps) => {

    if (courses.length === 0) {
        return (
            <div className=" my-4 mx-6">
                <p>No hay cursos creados...</p>
            </div>
        )
    }
    return (
        <div className="flex flex-col my-4 mx-6 rounded-lg bg-white p-4 gap-10">
            {
                courses.map((course) => (
                    <div key={course.id}>
                        <CourseCard course={course} />
                        <div className="border-t border-gray-200 w-full mt-4" />
                    </div>
                ))
            }
        </div>
    )
}

export default ListCourses
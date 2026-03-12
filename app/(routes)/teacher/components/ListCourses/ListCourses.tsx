import { ListCoursesProps } from "./ListCourses.type"

export const ListCourses = ({ courses }: ListCoursesProps) => {

    if(courses.length === 0){
        return (
            <p>No hay cursos creados...</p>
        )
    }
    return (
        <div className="flex flex-col my-4 mx-6 rounded-lg bg-white p-4 gap-10">
            {
                courses.map((courses) =>(
                    <div key={courses.id}>
                        <p>{courses.title}</p>
                        <div className="border-t border-gray-200 w-full mt-4" />
                    </div>
                ))
            }
        </div>
    )
}

export default ListCourses
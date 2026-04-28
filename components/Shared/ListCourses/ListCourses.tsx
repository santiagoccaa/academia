import { ListCoursesProps } from './ListCourses.types'
import { CardCourse } from '../CardCourse'

export const ListCourses = ({ courses, title }: ListCoursesProps) => {

    return (
        <div className=''>
            <div className='my-4 mx-6 border rounded-lg bg-white p-6'>
                <h2 className='text-2xl font-normal'>{title}</h2>
                <div className='border-t py-2'>
                    {courses && courses.length > 0 ? (
                        <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
                            {courses.map((course, index) => (
                                <CardCourse key={index} {...course} />
                            ))}
                        </div>
                    ) : (
                        <p className='text-gray-500 text-center mt-4'>No hay cursos disponibles por el momento.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListCourses
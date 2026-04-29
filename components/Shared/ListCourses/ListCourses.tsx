import { CardCourse } from '../CardCourse'
import { FilterCourse } from '../FilterCourse'
import { ListCoursesProps } from './ListCourses.types'
import { useTranslations } from "next-intl"

export const ListCourses = ({ courses, title }: ListCoursesProps) => {

  const t = useTranslations()

    const nameCourses = courses?.map(course => {
        const names = course.title
        const slug = course.slug

        return {
            names,
            slug
        }
    })

    return (
        <div className=''>
            <div className='my-4 mx-6 border rounded-lg bg-white p-6'>
                <div className='w-full flex items-center justify-between pb-2'>
                    <h2 className='text-2xl font-normal'>{t(title)}</h2>
                    {nameCourses && <FilterCourse filter={nameCourses} />} 
                </div>
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
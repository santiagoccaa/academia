import Link from 'next/link'
import { ListCoursesProps } from './ListCourses.types'
import Image from 'next/image'
import { IconBadge } from '../IconBadge'
import { Book, ChartNoAxesColumn } from 'lucide-react'
import { ProgressCourse } from '../ProgressCourse'
import { CardCourse } from '../CardCourse'

export const ListCourses = ({ courses, title }: ListCoursesProps) => {
    return (
        <div className=''>
            <div className='my-4 mx-6 border rounded-lg bg-white p-6'>
                <h2 className='text-2xl font-normal'>{title}</h2>
                <div className='border-t py-2'>
                    {courses && courses.length > 0 ? (
                        <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
                            {courses.map(({ id, imageUrl, title, level, price, slug, category, chapters, description }) => (
                                <CardCourse
                                    key={id}
                                    category={category}
                                    chapters={chapters}
                                    description={description}
                                    imageUrl={imageUrl}
                                    title={title}
                                    price={price}
                                    slug={slug}
                                />
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
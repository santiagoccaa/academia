"use client"

import { getUserProgreesByCourse } from '@/actios/getUserProgreesByCourse'
import { ProgressCourseProps } from './ProgressCourse.types'
import { Progress } from '@/components/ui/progress'
import { formatPrice } from '@/lib/formatPrice'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export const ProgressCourse = ({ courseId, price, totalChapters }: ProgressCourseProps) => {

    const { user } = useUser()
    
    if (!user) {
        return <p className='text-xs mt-2'>Not Signed in</p>
    }

    const [progressCourse, setProgressCourse] = useState<number>(0)

    useEffect(() => {
        const fetchProgress = async () => {
            if (user.id) {
                const progress = await getUserProgreesByCourse(courseId, user.id)
                setProgressCourse(progress)
            }
        }

        fetchProgress()
    }, [])
    return (
        <div className='mt-5'>
            {
                totalChapters > 0 && progressCourse > 0 ? (
                    <div>
                        <Progress value={progressCourse} className='*:bg-violet-300' />
                        <p className='text-xs mt-1'>{progressCourse}% Completado</p>
                    </div>
                ) :
                    (
                        <h4>{formatPrice(price)}</h4>
                    )
            }
        </div>
    )
}

export default ProgressCourse
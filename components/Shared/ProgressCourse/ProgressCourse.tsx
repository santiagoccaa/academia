"use client"

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

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const fetchProgress = async () => {
            const res = await fetch(`/api/progress/${courseId}`)
            const data = await res.json()
            setProgress(data.progress)
        }

        fetchProgress()
    }, [])

    return (
        <div className='mt-5'>
            {
                totalChapters > 0 && progress > 0 ? (
                    <div>
                        <Progress value={progress} className='*:bg-violet-300' />
                        <p className='text-xs mt-1'>{progress}% Completado</p>
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
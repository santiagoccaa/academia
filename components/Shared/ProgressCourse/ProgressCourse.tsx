"use client"

import { ProgressCourseProps } from './ProgressCourse.types'
import { Progress } from '@/components/ui/progress'
import { formatPrice } from '@/lib/formatPrice'
import { useUser } from '@clerk/nextjs'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const ProgressCourse = ({ courseId, price, totalChapters }: ProgressCourseProps) => {
    const t = useTranslations()

    const { user } = useUser()

    const [progress, setProgress] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const res = await fetch(`/api/progress/${courseId}`)
                const data = await res.json()
                setProgress(data.progress)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchProgress()
    }, [])

    if (!user) {
        return <p className='text-xs mt-2'>Not Signed in</p>
    }

    if (loading) {
        return <p className='text-sm mt-2'>Cargando...</p>
    }
    return (
        <div className='mt-5'>
            {
                totalChapters > 0 && progress > 0 ? (
                    <div>
                        <Progress value={progress} className='*:bg-violet-300' />
                        <p className='text-xs mt-1'>{progress}% {t('common.filled')}</p>
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
import { currentUser } from '@clerk/nextjs/server'
import { ProgressCourseProps } from './ProgressCourse.types'
import { Progress } from '@/components/ui/progress'
import { formatPrice } from '@/lib/formatPrice'
import { getUserProgreesByCourse } from '@/actios/getUserProgreesByCourse'

export const ProgressCourse = async ({ courseId, price, totalChapters }: ProgressCourseProps) => {

    const user = await currentUser()
    if (!user) {
        return <p className='text-xs mt-2'>Not Signed in</p>
    }

    const progress = await getUserProgreesByCourse(courseId, user.id)
    
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
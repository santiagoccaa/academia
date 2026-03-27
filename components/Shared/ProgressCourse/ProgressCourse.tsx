import { currentUser } from '@clerk/nextjs/server'
import { ProgressCourseProps } from './ProgressCourse.types'
import { getUserProgreesByCourse } from '@/actios/getUserProgreesByCourse'
import { Progress } from '@/components/ui/progress'
import { formatPrice } from '@/lib/formatPrice'

export const ProgressCourse = async ({ courseId, price, totalChapters }: ProgressCourseProps) => {

    const user = await currentUser()
    if (!user) {
        return <p className='text-xs mt-2'>Not Signed in</p>
    }

    const progressCourse = await getUserProgreesByCourse(user.id, courseId)
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
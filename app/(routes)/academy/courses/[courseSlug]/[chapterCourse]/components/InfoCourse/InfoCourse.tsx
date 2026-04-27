import { InfoCourseProps } from './InfoCourse.types'
import { Lock } from 'lucide-react'
import { VideoCourse } from './VideoCourse'
import { ProgressCourse } from './ProgressCourse'
import { FeedbackUserCourse } from '../FeedbackCourse'

export const InfoCourse = ({ chapterCourseId, infoCourse, purchaseCourse, userProgress, videoUrl }: InfoCourseProps) => {

    const { title, category, description, id, feedback } = infoCourse

    return (
        <div className='w-full relative'>
            {!purchaseCourse && (
                <div className='absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md gap-y-2 h-full z-30 rounded-md text-secondary'>
                    <Lock className='w-8 h-8' />
                    <p className='text-sm'>Capitulo bloqueado, compra el curso para desbloquear</p>
                </div>
            )}

            {videoUrl && (
                <VideoCourse videoUrl={videoUrl} />
            )}

            <ProgressCourse
                userProgress={userProgress}
                chapterCourseId={chapterCourseId}
                infoCourse={infoCourse}
            />

            <div className='mt-4 bg-white rounded-md p-6 shadow-md'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>{title}</h2>
                <div className='w-fit mb-4 px-2 py-1 bg-primary text-white rounded-full text-xs shadow-md'>{category}</div>
                <p className='text-gray-600 text-sm'>{description}</p>
            </div>

            <FeedbackUserCourse id={id} feedback={feedback && feedback[0]} />
        </div>
    )
}

export default InfoCourse
import { VideoCourseProps } from './VideoCourse.types'

export const VideoCourse = ({ videoUrl }: VideoCourseProps) => {
    return (
        <video src={videoUrl} controls className='w-full rounded-md shadow-md'>

        </video>
    )
}

export default VideoCourse

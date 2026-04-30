import { useTranslations } from 'next-intl'
import { ChapterList } from './ChapterList'
import { ChaptersCourseProps } from './ChaptersCourse.types'

export const ChaptersCourse = ({ chapterCourse, chapters, courseSlug, userProgress }: ChaptersCourseProps) => {

    const t = useTranslations()

    return (
        <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200 h-fit'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>{t('common.chapters')}</h2>
            <ChapterList 
                chapters={chapters}
                courseSlug={courseSlug}
                currentChapter={chapterCourse}
                userProgress={userProgress}
            />
        </div>
    )
}

export default ChaptersCourse   
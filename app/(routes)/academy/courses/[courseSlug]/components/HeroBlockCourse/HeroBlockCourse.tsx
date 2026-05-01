import { HeroBlockCourseProps } from './HeroBlockCourse.types'
import { IconBadge } from '@/components/Shared'
import { Calendar, ChartNoAxesColumn, Timer } from 'lucide-react'
import { formatPrice } from '@/lib/formatPrice'
import { PurchaseButtons } from './PurchaseButtons'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { formatDuration } from '@/utils'

export const HeroBlockCourse = ({ course, purchase }: HeroBlockCourseProps) => {

  const t = useTranslations()

  const { description, price, level, imageUrl, updateAt, slug, chapters, title, id, userID } = course

  const duration = chapters.reduce((acc, chapter) => {
    return acc + (chapter.duration ?? 0)
  }, 0)

  const formatted = formatDuration(duration)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
      <div>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-balance mt-2'>{description}</p>

        <div className='flex flex-col gap-3 my-4 text-gray-600'>
          <IconBadge icon={Timer} text={formatted} />
          <IconBadge icon={Calendar} text={`${t('infoCourse.lastUpdate')}: ${new Date(updateAt).toLocaleDateString("es-ES")}`} />
          <IconBadge icon={ChartNoAxesColumn} text={level ? t(`common.${level.toLocaleLowerCase()}`) : ''} />
        </div>

        {!purchase && <h2 className='text-xl font-semibold mb-4'>{!price ? t('common.free') : formatPrice(price)}</h2>}
        <PurchaseButtons purchase={purchase} slug={slug} chapters={chapters} price={price} id={id} userID={userID} />
      </div>

      <Image
        src={imageUrl || '/image-default-course.webp'}
        alt={title}
        width={500}
        height={400}
        className='rounded-md'
      />
    </div>
  )
}

export default HeroBlockCourse
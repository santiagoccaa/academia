
import { HeroBlockCourseProps } from './HeroBlockCourse.types'
import { IconBadge } from '@/components/Shared'
import { Calendar, ChartNoAxesColumn, Timer } from 'lucide-react'
import { formatPrice } from '@/lib/formatPrice'
import { PurchaseButtons } from './PurchaseButtons'
import Image from 'next/image'

export const HeroBlockCourse = ({ course, purchase }: HeroBlockCourseProps) => {

  const { description, price, level, imageUrl, updateAt, slug, chapters, title, id } = course

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
      <div>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-balance mt-2'>{description}</p>

        <div className='flex flex-col gap-3 mt-5 text-gray-600'>
          <IconBadge icon={Timer} text='70h 40m' />
          <IconBadge icon={Calendar} text={`Ultima actualizacion: ${new Date(updateAt).toLocaleDateString("es-ES")}`} />
          <IconBadge icon={ChartNoAxesColumn} text={level || ''} />

        </div>

        <h2 className='text-xl font-semibold my-4'>{formatPrice(price)}</h2>
        <PurchaseButtons purchase={false} slug={slug} chapters={chapters} price={price} id={id} />
      </div>

      <Image
        src={imageUrl || 'image-default-course'}
        alt={title}
        width={500}
        height={400}
        className='rounded-md'
      />
    </div>
  )
}

export default HeroBlockCourse
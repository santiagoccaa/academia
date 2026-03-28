"use client"

import { HeroBlockCourseProps } from './HeroBlockCourse.types'
import { IconBadge } from '@/components/Shared'
import { Calendar, Timer } from 'lucide-react'
import { formatPrice } from '@/lib/formatPrice'
import { Button } from '@/components/ui/button'

export const HeroBlockCourse = ({ course, purchase }: HeroBlockCourseProps) => {

  const { description, price, id, level, imageUrl, updateAt, slug, chapters, title } = course

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
      <div>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-balance mt-2'>{description}</p>

        <div className='flex flex-col gap-3 mt-5 text-gray-600'>
          <IconBadge icon={Timer} text='70h 40m' />
          <IconBadge icon={Calendar} text={`Ultima actualizacion: ${new Date(updateAt).toLocaleDateString("es-ES")}`} />
        </div>

        <h2 className='text-xl font-semibold my-4'>{formatPrice(price)}</h2>
        {purchase ? (
          <Button className='hover:bg-violet-400 text-white font-semibold'>
            Ver curso
          </Button>
        ) :
          (
            <Button>
              Comprar curso
            </Button>
          )}
      </div>
    </div>
  )
}

export default HeroBlockCourse
import { IconBadgeProps } from './IconBadge.types'

export const IconBadge = ({ icon: Icon, text }: IconBadgeProps) => {
  return (
    <div className='flex items-center text-xs gap-2'>
      <div className='w-6 h-6 flex items-center justify-center bg-violet-400 rounded-full'>
        <Icon className='w-4 h-4 text-white' />
      </div>
      <span className='text-slate-500'>{text}</span>
    </div>
  )
}

export default IconBadge
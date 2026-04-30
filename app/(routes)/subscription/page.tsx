import { PageContainer } from '@/components/Shared/PageContainer'
import { CardPricing } from '../academy/being-teacher/components'
import { Button } from '@/components/ui/button'
import { Decorador } from '../(root)/components'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function SubscriptionPage() {

    const t = useTranslations('subscriptionPage')

    return (
        <div className="relative w-full min-h-screen overflow-hidden text-black">

            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
                {/* Shape 1 */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl"></div>

                {/* Shape 2 */}
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>

                {/* Shape 3 */}
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent opacity-10 rounded-full blur-2xl"></div>

                {/* Gradiente suave */}
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-purple-900/20 to-transparent"></div>
            </div>
            <PageContainer>
                <div className="relative z-20 px-6 overflow-hidden py-8 min-h-screen flex justify-between">
                    <Decorador className="top-20" />
                    <div className='relative w-1/2'>
                        <div className='mb-10'>
                            <Link href="/" className='rounded-full text-md flex items-center gap-1 group font-medium'>
                                <div className='w-6 h-6 flex items-center justify-center rounded-full bg-primary group-hover:-translate-x-1 duration-300'>
                                    <ArrowLeft color='white' size={20} />
                                </div>
                                Academy
                            </Link>
                        </div>
                        <h2 className="text-5xl font-bold mb-2">
                            {t('title1')} <span className="text-primary">Academy</span>  {t('title3')}
                        </h2>
                        <p className="text-gray-700 max-w-md mt-4">
                            {t('description')}
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <CardPricing />
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

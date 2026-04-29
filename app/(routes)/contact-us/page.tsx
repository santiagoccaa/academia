"use client"

import { PageContainer } from '@/components/Shared/PageContainer'
import { Formulario } from './components'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ContactUsPage() {
    const t = useTranslations('contactUsPage')
    return (
        <div className='bg-linear-to-b from-accent via-white to-white relative overflow-hidden'>

            <img src='/general/boxLeft.png' alt='box left' width={200} height={200} className='absolute bottom-0 left-0 w-40 h-40 ' />
            <img src='/general/boxRight.svg' alt='box right' className='absolute bottom-0 right-0 w-40 h-40' />

            <PageContainer>
                <div className='min-h-screen  flex items-center justify-center'>
                    <div className='shadow-lg rounded-sm w-full max-w-4xl h-fit p-4 pt-6 text-center'>
                        <h1 className='text-primary text-2xl font-medium uppercase'>{t('title')}</h1>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='w-full md:w-1/2'>
                                <Formulario />
                            </div>
                            <div className='w-full md:w-1/2 text-left p-8 space-y-4'>
                                <h2 className='text-md font-medium'>Academia LMS</h2>
                                <div className='flex items-center gap-2'>
                                    <Mail />
                                    <h2 className='text-md font-light'>academialms@gmail.com</h2>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Phone />
                                    <h2 className='text-md font-light'>+57 2857 2857461</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

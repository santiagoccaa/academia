"use client"

import { Chapter } from '@/app/generated/prisma/client'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface PurchaseButtonsProps {
    purchase: boolean
    slug: string
    chapters: Chapter[]
    price: string | null
    id: string
}

export const PurchaseButtons = ({ purchase, slug, chapters, price, id }: PurchaseButtonsProps) => {

    const router = useRouter()

    const [isLoading, setIsloading] = useState(false)

    const enrollCourse = async () => {
        setIsloading(true)
        if (price === 'Gratis') {
            try {
                await axios.post(`/api/course/${id}/enroll`)
                toast("Inscripcion exitosa")
                router.push(`/courses/${slug}/${chapters[0].id}`)
            } catch (error) {
                toast.error("Ocurrio un error al momento de intentar suscribirte")
            } finally {
                setIsloading(false)
            }
        }
    }

    const redirectToCourse = () => {
        router.push(`/courses/${slug}/${chapters[0].id}`)
    }
    return (
        <>
            {
                purchase ? (
                    <Button
                        className='hover:bg-violet-400 text-white font-semibold'
                        disabled={isLoading}
                        onClick={redirectToCourse}
                    >
                        Ver curso
                    </Button>
                ) :
                    (
                        <Button
                            className='hover:bg-violet-400 text-white font-semibold'
                            disabled={isLoading}
                            onClick={enrollCourse}
                        >
                            Inscribirse
                        </Button>
                    )
            }
        </>
    )

}

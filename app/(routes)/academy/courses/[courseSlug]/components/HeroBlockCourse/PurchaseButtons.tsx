"use client"

import { Chapter } from '@/app/generated/prisma/client'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface PurchaseButtonsProps {
    purchase: boolean
    slug: string
    chapters: Chapter[]
    price: string | null
    id: string
    userID: string
}

export const PurchaseButtons = ({ purchase, slug, chapters, price, id, userID }: PurchaseButtonsProps) => {

    const { userId } = useAuth()

    const router = useRouter()

    const [isLoading, setIsloading] = useState(false)

    const enrollCourse = async () => {

        setIsloading(true)
        if (price === 'Gratis') {
            try {
                await axios.post(`/api/course/${id}/enroll`)
                router.push(`/academy/courses/${slug}/${chapters[0].id}`)
                toast("Inscripcion exitosa")
            } catch (error) {
                toast.error("Ocurrio un error al momento de intentar suscribirte")
            } finally {
                setIsloading(false)
            }
        } else {
            try {
                const res = await axios.post(`/api/course/${id}/checkout`)
                window.location.assign(res.data.message)
            } catch (error) {
                toast("Error al inscribirse")
            } finally {
                setIsloading(false)
            }
        }
    }

    const autor = userID === userId

    return (
        <>
            {
                purchase || autor ? (
                    <Button
                        className='hover:bg-primary text-white font-semibold'
                        asChild
                    >
                        <Link href={`/academy/courses/${slug}/${chapters[0].id}`}>
                            Ver curso
                        </Link>
                    </Button>
                ) : (

                    <Button
                        className='hover:bg-primary text-white font-semibold'
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

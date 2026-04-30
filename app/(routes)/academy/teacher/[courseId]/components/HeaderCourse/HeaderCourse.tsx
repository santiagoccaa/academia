"use client"

import { useRouter } from "next/navigation"
import { HeaderCourseProps } from "./HeaderCourse.type"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react"
import axios from "axios"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

export const HeaderCourse = ({ idCourse, isPublished }: HeaderCourseProps) => {

    const t = useTranslations()

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const onPublish = async (state: boolean) => {
        setIsLoading(true)
        try {
            axios.patch(`/api/course/${idCourse}`, { isPublished: state })
            router.refresh()
            toast(state ? 'Curso publicado' : 'Curso oculto')
        } catch {
            router.refresh()
            toast('Ups, algo ha salido mal')
        }
        setIsLoading(false)
    }

    const onRemoveCourse = async () => {
        axios.delete(`/api/course/${idCourse}`)
        router.push('/teacher')
        toast('Curso eliminado correctamente')
    }

    return (
        <div className="mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <Button onClick={() => router.push("/teacher")}>
                    <MoveLeft className="h-4 w-4" /> {t('editCourse.header.button')}
                </Button>

                <div className="flex gap-2 items-center">
                    {
                        isPublished ?
                            <Button
                                variant="outline"
                                disabled={isLoading}
                                onClick={() => onPublish(false)}
                            >
                                {t('common.unpublish')} <EyeOff />
                            </Button>
                            :
                            <Button
                                disabled={isLoading}
                                onClick={() => onPublish(true)}
                            >
                                {t('common.post')} <Eye />
                            </Button>
                    }

                    <Button variant="destructive" onClick={onRemoveCourse}>
                        <Trash />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderCourse

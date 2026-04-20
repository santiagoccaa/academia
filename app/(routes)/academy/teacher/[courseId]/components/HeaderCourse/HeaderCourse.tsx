"use client"

import { useRouter } from "next/navigation"
import { HeaderCourseProps } from "./HeaderCourse.type"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react"
import axios from "axios"
import { toast } from "sonner"

export const HeaderCourse = ({ idCourse, isPublished }: HeaderCourseProps) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const onPublish = async (state: boolean) => {
        setIsLoading(true)
        try {
            axios.patch(`/api/course/${idCourse}`, { isPublished: state })

            toast(state ? 'Curso publicado' : 'Curso oculto')
            router.refresh()
        } catch {
            toast('Ups, algo ha salido mal')
            router.refresh()
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
                    <MoveLeft className="h-4 w-4" /> Volver a todos los cursos
                </Button>

                <div className="flex gap-2 items-center">
                    {
                        isPublished ?
                            <Button
                                variant="outline"
                                disabled={isLoading}
                                onClick={() => onPublish(false)}
                            >
                                Despublicar <EyeOff />
                            </Button>
                            :
                            <Button
                                disabled={isLoading}
                                onClick={() => onPublish(true)}
                            >
                                Publicar <Eye />
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

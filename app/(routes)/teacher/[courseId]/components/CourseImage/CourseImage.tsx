"use client"

import { FileImage, Pencil } from "lucide-react"
import { TitleBlock } from "../TitleBlock"
import { CourseImageProps } from "./CourseImage.type"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UploadButton } from "@/utils/uploadthing"
import { toast } from "sonner"
import axios from "axios"

export const CourseImage = ({ idCourse, imageCourse }: CourseImageProps) => {

    const [isEditing, setIsEditing] = useState(false)
    const [image, setImage] = useState(imageCourse)

    const onChangeImage = async (imageUrl: string) => {
        try {
            axios.patch(`/api/course/${idCourse}`, {
                imageUrl
            })
            toast("Imagen actualizada correctamente")
        } catch (error) {
            toast.error("No se pudo actualizar la imagen")
        }
    }
    return (
        <div className="p-4 rounded-lg bg-white h-fit ">
            <TitleBlock icon={FileImage} title="Imagen del curso" />

            {
                isEditing ?
                    <div className="bg-slate-300 p-4 mt-2 rounded-lg">
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                onChangeImage(res[0]?.ufsUrl)
                                setImage(res[0]?.ufsUrl)
                                setIsEditing(false)
                            }}
                            onUploadError={() => {
                                toast.error('Ha ocurrido un error')
                            }}
                        />
                    </div>
                    :
                    <Image
                        src={image || '/image-default-course.webp'}
                        alt="curso image"
                        width={500}
                        height={250}
                        className="w-full h-full rounded-md"
                    />
            }

            <Button
                className="w-full mt-4"
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
            >
                <Pencil className="h-4 w-4" />
                Editar imagen
            </Button>
        </div>
    )
}

export default CourseImage
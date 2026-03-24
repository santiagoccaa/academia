"use client"

import { FileImage, Pencil } from "lucide-react"
import { TitleBlock } from "../TitleBlock"
import { CourseImageProps } from "./CourseImage.type"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const CourseImage = ({ idCourse, imageCourse }: CourseImageProps) => {

    const [isEditing, setIsEditing] = useState(false)
    return (
        <div className="p-4 rounded-lg bg-white h-fit ">
            <TitleBlock icon={FileImage} title="Imagen del curso" />

            {
                isEditing ?
                    <p>Uploadthing</p>
                    :
                    <Image
                        src={imageCourse || '/image-default-course.webp'}
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
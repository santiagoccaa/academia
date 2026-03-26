"use client"

import { Pencil, Video } from "lucide-react"
import { TitleBlock } from "../../../../components"
import { ChapterVideoFormProps } from "./ChapterVideoForm.types"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { UploadButton } from "@/utils/uploadthing"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "sonner"

export const ChapterVideoForm = ({ chapterId, courseId, videoUrl }: ChapterVideoFormProps) => {

    const router = useRouter()
    const [onEditVideo, setOnEditVideo] = useState(false)

    const onSubmit = async (url: string) => {
        try {
            await axios.patch(`/api/course/${courseId}/chapter/${chapterId}`, {
                videoUrl: url
            })

            toast("Video actualizado con exito")
            router.refresh()
        } catch{
            toast.error("Algo salio mal")
        }
    }

    return (
        <div className="mt-6 p-6 bg-white rounded-md">
            <TitleBlock title="Añade o modifica el video" icon={Video} />

            {videoUrl ?
                (
                    <video src={videoUrl} controls className="rounded-md max-w-96" />
                )
                :
                (
                    <p>No hay video</p>
                )
            }

            <div className="mt-4 p-2 rounded-md border">
                <Button variant={"secondary"} onClick={() => setOnEditVideo(true)}>
                    {onEditVideo ? "Selecciona el video" : "Editar video"}
                    <Pencil className="w-4 h-4" />
                </Button>

                {
                    onEditVideo && (
                        <UploadButton
                            className="w-full bg-slate-200 rounded-mdp-2 mt-2"
                            endpoint="chapterVideo"
                            onClientUploadComplete={(url) => {
                                if (url) {
                                    onSubmit(url[0].serverData.url)
                                }
                            }}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ChapterVideoForm
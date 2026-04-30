"use client"

import { Button } from "@/components/ui/button"
import { ChapterFormProps } from "./ChapterForm.types"
import { ArrowLeft, Cog, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { TitleBlock } from "../../../components"
import axios from "axios"
import { toast } from "sonner"
import { ChapterTitleForm } from "./ChapterTitleForm"
import { ChapterVideoForm } from "./ChapterVideoForm"
import { useTranslations } from "next-intl"

export const ChapterForm = ({ chapter, courseId }: ChapterFormProps) => {

    const t = useTranslations()

    const router = useRouter()
    if (!chapter) {
        return null
    }

    const onPublis = async (state: boolean) => {
        try {
            axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
                isPublised: state
            })
            router.refresh()
            toast(state ? "Capitulo publicado" : "Capitulo oculto")
        } catch (error) {
            toast("Algo ha salido mal")
        }
    }

    const onRemoveChapter = async () => {
        try {
            axios.delete(`/api/course/${courseId}/chapter/${chapter.id}`)
            router.push(`/academy/teacher/${courseId}`)
            toast("Capitulo eliminado con existo")
        } catch (error) {
            toast("Ocurrio un error al momento de intenter eliminar el capitulo")
        }
    }

    return (
        <>
            <div className="p-6 bg-white rounded-md">
                <Button className="mb-4" variant="outline" onClick={() => router.push(`/academy/teacher/${courseId}`)}>
                    <ArrowLeft />
                    {t('editCourse.chapterForm.buttonHeader')}
                </Button>
            </div>
            <div className="p-6 my-4 bg-white rounded-md flex justify-between items-center">
                <TitleBlock title="editCourse.chapterForm.title" icon={Cog} />
                <div className="flex items-center gap-2">
                    {chapter.isPublised
                        ?
                        (
                            <Button variant={"outline"} onClick={() => onPublis(false)}>
                                {t('common.hide')}
                            </Button>
                        )
                        :
                        (
                            <Button onClick={() => onPublis(true)}>
                                {t('common.post')}
                            </Button>
                        )
                    }

                    <Button variant={"destructive"} onClick={onRemoveChapter}>
                        <Trash />
                    </Button>
                </div>
            </div>

            <ChapterTitleForm courseId={courseId} chapter={chapter} />

            <ChapterVideoForm chapterId={chapter.id} courseId={courseId} videoUrl={chapter.videoUrl} />
        </>
    )
}

export default ChapterForm
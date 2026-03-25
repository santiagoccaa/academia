"use client"

import { ListCheck, PlusCircle } from "lucide-react"
import { TitleBlock } from "../TitleBlock"
import { CourseChapterProps } from "./CourseChapter.type"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FormChaterName } from "./FormChaterName"

export const CourseChapter = ({ chapters, idCourse }: CourseChapterProps) => {

    const [chapterList, setChapterList] = useState(chapters ?? [])
    const [showInputChapter, setShowInputChapter] = useState(false)

    return (
        <div className="p-6 bg-white rounded-md h-fit relative">
            <TitleBlock title="Capitulos del curso" icon={ListCheck} />

            <div className="flex gap-2 items-center justify-between mb-3">
                <p>Capitulos completos</p>
                <Button variant="outline" size="sm" onClick={() => setShowInputChapter(true)}>
                    <PlusCircle className="w-4 h-4" />
                    Crear capitulo
                </Button>
            </div>

            {showInputChapter && <FormChaterName setShowInputChapter={setShowInputChapter} idCourse={idCourse} />}

            {
                chapterList?.map((chapter, index) => (
                    <p key={index} className="">{chapter.title}</p>
                ))
            }

            4:06:44
        </div>
    )
}

export default CourseChapter
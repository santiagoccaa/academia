import { Chapter } from "@/app/generated/prisma/client"

export type FormChaterNameProps = {
    idCourse: string
    setShowInputChapter: React.Dispatch<React.SetStateAction<boolean>>
    setChapterList: React.Dispatch<React.SetStateAction<Chapter[]>>
    chapters: Chapter[]
}
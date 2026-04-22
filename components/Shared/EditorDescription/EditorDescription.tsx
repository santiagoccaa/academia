"use client"

import { useMemo } from "react"
import { EditorDescriptionProps } from "./EditorDescription.types"
import dynamic from "next/dynamic"
import 'react-quill-new/dist/quill.snow.css'

export const EditorDescription = ({ onChange, value }: EditorDescriptionProps) => {

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill-new'), { ssr: false }), [])
    return (
        <ReactQuill theme="snow" value={value} onChange={onChange} />
    )
}
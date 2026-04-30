"use client"

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import axios from "axios"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface NameSlug {
    title: string
    slug: string
}

export const Search = () => {

    const router = useRouter()
    const t = useTranslations()

    const [names, setNames] = useState<NameSlug[] | []>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getNames = async () => {
            try {
                const res = await axios.get('/api/searchCourses')
                setNames(res.data)
            } finally {
                setLoading(false)
            }

        }
        getNames()
    }, [])

    return (
        <Combobox items={names}>
            <ComboboxInput placeholder={t('academy.searchHome')} className="w-70" />
            <ComboboxContent>
                <ComboboxEmpty>{t('academy.notFound')}</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem
                            key={item.slug}
                            value={item.title}
                            onClick={() => router.push(`/academy/courses/${item.slug}`)}
                        >
                            {loading ? t('common.loading') : item.title}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox >
    )
}

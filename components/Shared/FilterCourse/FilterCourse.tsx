"use client"

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { FilterCourseProps } from "./FilterCourse.types"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"


export function FilterCourse({ filter }: FilterCourseProps) {
    const t = useTranslations()

    const router = useRouter()
    return (
        <Combobox items={filter}>
            <ComboboxInput placeholder={t('academy.search')} />
            <ComboboxContent>
                <ComboboxEmpty>{t('academy.notFound')}</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem
                            key={item.slug}
                            value={item.names}
                            onClick={() => router.push(`/academy/courses/${item.slug}`)}
                        >
                            {item.names}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox >
    )
}
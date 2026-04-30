"use client"

import { DollarSign } from "lucide-react"
import { TitleBlock } from "../TitleBlock"
import { CoursePriceProps } from "./CoursePrice.type"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

export const CoursePrice = ({ idCourse, priceCourse }: CoursePriceProps) => {

    const t = useTranslations()

    const [price, setPrice] = useState<string | undefined>(priceCourse || "Gratis")

    const onChangePrice = async () => {
        try {
            axios.patch(`/api/course/${idCourse}`, {
                price
            })

            toast("Precio actualizaco correctamente")
        } catch (error) {
            toast("Ups... algo salio mal")
        }
    }
    return (
        <div className="p-6 bg-white rounded-mt h-filt">
            <TitleBlock title="editCourse.courseForm.titlePrice" icon={DollarSign} />

            <Select value={price} onValueChange={setPrice} >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona el precio del curso" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" align="start">
                    <SelectGroup>
                        <SelectLabel>
                            {t('editCourse.courseForm.titlePrice')}
                        </SelectLabel>
                        <SelectItem value="Gratis">
                            {t('common.free')}
                        </SelectItem>
                        <SelectItem value="19.99">
                            19.99$
                        </SelectItem>
                        <SelectItem value="29.99">
                            29.99$
                        </SelectItem>
                        <SelectItem value="39.99">
                            39.99$
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
                <Button onClick={onChangePrice} disabled={!price} className="mt-3">
                    {t('editCourse.courseForm.buttonPrice')}
                </Button>
            </Select>
        </div>
    )
}

export default CoursePrice
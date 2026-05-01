"use client"

import { Cog } from "lucide-react"
import { TitleBlock } from "../TitleBlock"
import { CourseFormProps } from "./CourseForm.type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formSchema } from "./CourseForm.form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from "axios"
import { toast } from "sonner"
import { useState } from "react"
import { countCharacteres } from "@/utils/countCharacteres"
import { useTranslations } from "next-intl"

export const CourseForm = ({ course }: CourseFormProps) => {

    const t = useTranslations()

    const [charactersDescription, setCharactersDescription] = useState(course.description?.length)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: course.title || "",
            slug: course.slug || "",
            description: course.description || "",
            category: course.category || "",
            level: course.level || ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            if (!form.formState.isDirty) {
                return
            }
            axios.patch(`/api/course/${course.id}`, values)
            form.reset(values)

            toast(t('alerts.alert12'))
        } catch (error) {
            toast.error(t('alerts.error'))
        }
    }

    return (
        <div className="py-6 bg-white rounded-md">
            <TitleBlock title="editCourse.courseForm.title" icon={Cog} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('editCourse.courseForm.formTitle')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Curso de ReactJS" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {t('editCourse.courseForm.msTitle')}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input placeholder="curso-de-react-js" disabled {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {t('editCourse.courseForm.msSlug')}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        {t('editCourse.courseForm.formCategory')}
                                    </FormLabel>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona una categoria" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent
                                            position="popper"
                                        >
                                            <SelectGroup>
                                                <SelectItem value="Frontend">Frontend</SelectItem>
                                                <SelectItem value="Backend">Backend</SelectItem>
                                                <SelectItem value="Full Stack">Full Stack</SelectItem>
                                                <SelectItem value="Infraestructura">Infraestructura</SelectItem>
                                                <SelectItem value="Diseño UX/UI">Diseño UX/UI</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="level"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('common.level')}</FormLabel>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona el nivel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent
                                            position="popper"
                                        >
                                            <SelectGroup>
                                                <SelectItem value="Principiante">{t('common.principiante')}</SelectItem>
                                                <SelectItem value="Intermedio">{t('common.intermedio')}</SelectItem>
                                                <SelectItem value="Avanzado">{t('common.avanzado')}</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        {t('editCourse.courseForm.formDescription')}
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Descripcion del curso"
                                            className="resize-none"
                                            {...field}

                                            onChange={(e) => {
                                                const value = e.target.value
                                                setCharactersDescription(countCharacteres(value));
                                                field.onChange(e);
                                            }}
                                            maxLength={600}
                                        >
                                        </Textarea>
                                    </FormControl>
                                    <FormDescription>
                                        {charactersDescription} / 600 {t('common.characters')}
                                    </FormDescription>
                                    <FormDescription>
                                        {t('editCourse.courseForm.msDescription')}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" disabled={!form.formState.isDirty}>{t('editCourse.courseForm.button')}</Button>
                </form>
            </Form>
        </div>
    )
}

export default CourseForm
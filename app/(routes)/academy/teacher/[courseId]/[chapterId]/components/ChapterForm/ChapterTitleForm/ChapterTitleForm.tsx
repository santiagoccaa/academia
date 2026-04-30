"use client"

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel,
    FormDescription,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ChapterTitleFormProps } from './ChapterTitleForm.types'
import { formSchema } from "./ChapterTitleForm.form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { EditorDescription } from "@/components/Shared/EditorDescription"
import { useTranslations } from "next-intl"

export const ChapterTitleForm = ({ chapter, courseId }: ChapterTitleFormProps) => {

    const t = useTranslations()

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: chapter.title || "",
            description: chapter.description || "",
            isFree: chapter.isFree || false
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
                title: values.title,
                description: values.description,
                isFree: values.isFree
            })
            router.refresh()
            toast("Capitulo modificado")
        } catch (error) {
            console.log(error);
            toast.error("Algo ha ido mal")
        }
    }

    return (
        <div className='rounded-md bg-white'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-start">
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('editCourse.chapterForm.formName')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Introduccion..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isFree"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>{t('editCourse.chapterForm.check')}</FormLabel>
                                        <FormDescription>
                                            {t('editCourse.chapterForm.message')}
                                        </FormDescription>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={!form.formState.isValid} className="mt-4 w-full">{t('common.save')}</Button>
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('editCourse.chapterForm.formDescription')}</FormLabel>
                                <FormControl>
                                    <EditorDescription  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div />
                </form>
            </Form>
        </div>
    )
}

export default ChapterTitleForm
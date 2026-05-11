"use client"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./FormCreateCourse.form"
import { z } from "zod"
import axios from 'axios'
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { CreateCoursePayload } from "@/types/course"

export const FormCreateCourse = () => {

    const t = useTranslations()
    
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: ""
        },
    })

    const onSubmit = async (values: CreateCoursePayload) => {

        try {
            const course = await axios.post('/api/course', values)
            router.push(`/academy/teacher/${course.data.id}`)
            toast(t('alerts.alert18'))
        } catch (error) {
            console.log(error);
            toast.error(t('alerts.error'))
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre del curso</FormLabel>
                            <FormControl>
                                <Input placeholder="Curso de NextJS" {...field} autoComplete="off" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug del curso</FormLabel>
                            <FormControl>
                                <Input placeholder="curso-nextjs" {...field} autoComplete="off" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">{t('common.create')}</Button>
            </form>
        </Form>
    )
}
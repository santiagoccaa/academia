import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./FormChaterName.form"
import { FormChaterNameProps } from "./FormChaterName.type"
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios'
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useState } from "react"

export const FormChaterName = ({ idCourse, setShowInputChapter, setChapterList, chapters }: FormChaterNameProps) => {

    const t = useTranslations()
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        try {
            const res = await axios.post(`/api/course/${idCourse}/chapter`, {
                title: values.title
            })

            setChapterList([...chapters, res.data])
            toast(t('alerts.alert11'))
        } catch (error) {
            console.log(error);
            toast.error(t('alerts.error'))
        } finally {
            setShowInputChapter(false)
            setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Ej: Introduccion a la programacion" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={!form.formState.isValid || loading}>{t('common.save')}</Button>
            </form>
        </Form>
    )
}

export default FormChaterName
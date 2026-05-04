"use client "

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"
import { formSchema } from "./formulario.form"
import { useTranslations } from "next-intl"
import emailjs from "@emailjs/browser"
import { useState } from "react"

export const Formulario = () => {

    const [loading, setLoading] = useState(false)
    const t = useTranslations('contactUsPage.form')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
            title: "",
            name: ""
        },
    })

    const sendEmail = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
                {
                    user_name: values.name,
                    user_email: values.title,
                    message: values.message,
                },
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_ID!
            )

            return toast(t('alerts.success'))
        } catch (error) {
            console.log('EMAILJS FAILED...', error);
            return toast(t('alerts.error'))
        } finally {
            setLoading(false)
            form.reset()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-4">
                <h3 className="mb-4 text-lg font-medium text-gray-800 text-left">{t('subtitle')}</h3>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('name.title')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('name.placeholder')} {...field} className="bg-white" />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('email.title')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('email.placeholder')} {...field} className="bg-white" />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder={t('description')} {...field} className="bg-white" />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <div />
                <Button type="submit" className="mt-4 w-full cursor-pointer" disabled={loading}>{t('button')}</Button>
            </form>
        </Form>
    )
}

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

export const Formulario = () => {
    const t = useTranslations('contactUsPage.form')


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            email: "",
            name: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="mb-4 text-lg font-medium text-gray-800 text-left">Leave us a message</h3>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('name.title')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('name.placeholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('email.title')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('email.placeholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder={t('description')} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div />
                <Button type="submit" className="mt-4 w-full cursor-pointer">{t('button')}</Button>
            </form>
        </Form>
    )
}

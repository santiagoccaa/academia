"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Star } from "lucide-react"
import { useForm } from "react-hook-form"
import z from "zod"
import axios from "axios"
import { toast } from "sonner"
import { formSchema } from "./FeedbackCourse.form"
import React from "react"

interface FormFedbackProps {
    id: string
    stars?: number
    description?: string
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
    setDescription: React.Dispatch<React.SetStateAction<string>>
    setStarts: React.Dispatch<React.SetStateAction<number>>
}

export const FormFedback = ({ id, description, stars, setEdit, setStarts, setDescription }: FormFedbackProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            stars: stars || 0,
            description: description || "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { description, stars } = values
        try {
            await axios.post(`/api/course/${id}/feedback`, { description, stars })
            toast("Tu comentario fue enviado")
        } catch (error) {
            toast("Algo salio mal")
        } finally {
            setDescription(description)
            setStarts(stars)
            setEdit(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>¿Que te parecio este curso?</h2>
                <FormField
                    control={form.control}
                    name="stars"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex gap-4 mb-4">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => field.onChange(item)}
                                            className="cursor-pointer"
                                        >
                                            {item <= field.value ? (
                                                <Star key={item} fill="#20B486" strokeWidth={0} size={30} />
                                            ) : (
                                                <Star key={item} size={30} strokeWidth={1} />
                                            )}
                                        </button>
                                    ))}
                                </div>
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
                                <Textarea
                                    maxLength={500}
                                    className="max-h-40"
                                    placeholder="Deja tu comentario sobre el curso"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button className="mt-6" type="submit">
                    Guardar comentario
                </Button>
            </form>
        </Form>
    )
}

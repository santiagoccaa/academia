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
import { useRouter } from "next/navigation"

export const CourseForm = ({ course }: CourseFormProps) => {

    const router = useRouter()

    const [charactersDescription, setCharactersDescription] = useState(0)

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
            axios.patch(`/api/course/${course.id}`, values)
            toast('Curso actualizado correctamente')
            router.refresh()
        } catch (error) {
            toast.error('Ups, algo salio mal')
        }
    }

    return (
        <div className="p-6 bg-white rounded-md">
            <TitleBlock title="Configuracion del curso" icon={Cog} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Titulo del curso</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Curso de ReactJS" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Esto es lo que el usuario vera como titulo del curso
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
                                    <FormLabel>Url del curso</FormLabel>
                                    <FormControl>
                                        <Input placeholder="curso-de-react-js" disabled {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Es unica y no se puede modificar
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
                                    <FormLabel>Categoria</FormLabel>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona una categoria" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent
                                            position="item-aligned"
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
                                    <FormLabel>Level</FormLabel>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona el nivel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent
                                            position="item-aligned"
                                        >
                                            <SelectGroup>
                                                <SelectItem value="Principiante">Principiante</SelectItem>
                                                <SelectItem value="Intermedio">Intermedio</SelectItem>
                                                <SelectItem value="Avanzado">Avanzado</SelectItem>
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
                                    <FormLabel>Descripcion</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Descripcion del curso"
                                            className="resize-none"
                                            {...field}

                                            onChange={(e) => {
                                                const value = e.target.value
                                                setCharactersDescription(value.length);
                                                field.onChange(e);
                                            }}
                                            maxLength={600}
                                        >
                                        </Textarea>
                                    </FormControl>
                                    <FormDescription>
                                        {charactersDescription} / 500 caracteres
                                    </FormDescription>
                                    <FormDescription>
                                        Pon la descripcion completa del curso
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Guardar informacion basica</Button>
                </form>
            </Form>
        </div>
    )
}

export default CourseForm
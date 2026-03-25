import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./FormChaterName.form"
import { FormChaterNameProps } from "./FormChaterName.type"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios'
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const FormChaterName = ({ idCourse, setShowInputChapter }: FormChaterNameProps) => {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            axios.post(`/api/course/${idCourse}/chapter`, {
                title: values.title
            })
            toast("Capitulo creado")
            setShowInputChapter(false)

            router.refresh()
        } catch (error) {
            console.log(error);
            toast.error("Hubo un error al momento de crear el capitulo")
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
                <Button type="submit" disabled={!form.formState.isValid}>Crear</Button>
            </form>
        </Form>
    )
}

export default FormChaterName
"use client"

import { Button } from "@/components/ui/button"
import { ActionsProps } from "./Actions.type"
import { Edit, Trash } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "sonner"

export const Actions = ({ courseId }: ActionsProps) => {
    const router = useRouter()

    const onEdit = () => {
        router.push(`/academy/teacher/${courseId}`)
    }

    const onDelete = () => {
        axios.delete(`/api/course/${courseId}`)
        toast("Curso eliminado correctamente")
        router.refresh()
    }

    return (
        <div className="flex flex-col gap-2 items-center w-full max-w-42">
            <Button className="w-full" onClick={onEdit}>
                Editar <Edit className="w-4 h-4" />
            </Button>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full text-red-500 border-red-500 hover:bg-red-100 hover:text-red-500">Eliminar <Trash className="w-4 h-4" /></Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esto borrara el curso y todos sus datos.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Eliminar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default Actions
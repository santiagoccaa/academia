"use client"

import { Button } from "@/components/ui/button"
import { DowloadCertificateProps } from "./DowloadCertificate.types"
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
import { Download } from "lucide-react"
import html2canvas from 'html2canvas-pro'
import { useRef } from "react"
import { Certificate } from "./Certificate"

export const DowloadCertificate = ({ titleCourse, userName }: DowloadCertificateProps) => {

    const cerRef = useRef<HTMLDivElement>(null)

    const handleDonwload = async () => {
        if (!cerRef.current) {
            return null
        }

        const canvas = await html2canvas(cerRef.current, { scale: 1 })

        const link = document.createElement("a")
        link.download = `certificado-${titleCourse}.png`
        link.href = canvas.toDataURL("image/png")
        link.click()
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="text-white bg-primary hover:bg-primary duration-300">Descargar certificado <Download className="w-4 h-4 ml-2" /> </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-full max-w-225!">
                <AlertDialogHeader>
                    <AlertDialogTitle>Descarga tu Certificado</AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <Certificate ref={cerRef} titleCourse={titleCourse} userName={userName} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDonwload}>Descargar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DowloadCertificate

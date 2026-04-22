"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import axios from "axios"
import { useUser } from "@clerk/nextjs"

export const CardPricing = () => {

    const { user } = useUser()

    const handleRoleUser = async () => {

        try {
            const res = await axios.post('/api/beingTeacher')
            window.location.assign(res.data.url)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Card className="max-w-96 mx-auto shadow-xl border">
            <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold">
                    Plan Profesor
                </CardTitle>
                <div>
                    <p className="text-5xl font-extrabold">$10</p>
                    <span className="text-xs text-muted-foreground">
                        USD / 30 dias
                    </span>
                </div>

                <Button
                    className="w-full py-5 text-lg cursor-pointer"
                    onClick={handleRoleUser}
                >
                    Activar plan
                </Button>

                <CardDescription>
                    Convierte tu conocimiento en ingresos y crea tu propia academia.
                </CardDescription>

            </CardHeader>

            <CardContent>
                <ul className="space-y-3 border-t pt-4">
                    {[
                        "Sube todos los cursos que quieras",
                        "Llega a estudiantes de todo el mundo",
                        "Recibe el 90% de las ganancias",
                        "Publica y actualiza en cualquier momento",
                        "Construye tu marca personal",
                        "Genera ingresos recurrentes",
                        "Control total sobre tu contenido",
                        "Soporte técnico",
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default CardPricing
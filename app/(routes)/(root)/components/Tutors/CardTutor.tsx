import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

interface TutorProps {
    name: string
    job: string
    description: string
}

export const CardTutor = (infoTutor: TutorProps) => {
    const { description, job, name } = infoTutor

    return (
        <Card className="text-center rounded-xs bg-gray-200 w-60">
            <CardHeader>
                <div className="w-full flex justify-center" >
                    <div className="w-12 aspect-square rounded-full bg-violet-400" />
                </div>
                <h3 className="text-sm font-bold text-gray-800">{name}</h3>
                <span className="text-violet-400 text-sm font-medium">{job}</span>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm text-gray-600 font-light">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-center gap-2">
                <Twitter strokeWidth={1} color="gray" />
                <Linkedin strokeWidth={1} color="gray" />
            </CardFooter>
        </Card>
    )
}

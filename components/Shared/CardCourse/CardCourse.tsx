import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Star } from "lucide-react"
import Image from "next/image"

export const CardCourse = () => {
    return (
        <Card>
            <CardHeader className="relative">
                <div className="absolute top-2 right-8 bg-white gap-1 text-xs font-light text-gray-400 flex items-center p-1 rounded-sm shadow-md">
                    <Clock size={15} /> 9 hr 12 mins
                </div>
                <Image src={"/courses/figma.png"} width={200} height={200} alt="image courses" className="w-full" />
            </CardHeader>
            <CardContent className="space-y-2">
                <span className="text-xs font-medium text-primary">Design</span>
                <h3 className="text-xl text-gray-600 font-bold">Figma UI UX Design</h3>
                <p className="text-xs font-light text-gray-400">Use Figma to get a job in UI Design, User Interface, User Experience design.</p>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-light text-primary">4.3</span>
                    <div className="flex items-center gap-1">
                        <Star size={10} />
                        <Star size={10} />
                        <Star size={10} />
                        <Star size={10} />
                        <Star size={10} />
                    </div>
                    <span className="text-xs font-light text-gray-400">(16,325)</span>
                </div>
            </CardContent>

            <CardFooter className="justify-between items-end">
                <div className="flex items-center gap-2">
                    <div className="w-8 aspect-square rounded-full bg-primary" />
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-800">Janne Cooper</span>
                        <span className="text-xs font-light text-gray-400">2025 Create</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-primary">$17.85</h3>
            </CardFooter>
        </Card>
    )
}

export default CardCourse

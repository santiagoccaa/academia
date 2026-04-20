import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Star } from "lucide-react"
import Image from "next/image"
import { CardCourseProps } from "./cardCourse.types"
import { DEFAULT_IMAGE_COURSE } from "@/const/images"
import { formatPrice } from "@/lib/formatPrice"

export const CardCourse = ({ category, chapters, description, imageUrl, price, slug, title }: CardCourseProps) => {
    return (
        <Card>
            <CardHeader className="relative">
                <div className="absolute top-2 right-8 bg-white gap-1 text-xs font-light text-gray-400 flex items-center p-1 rounded-sm shadow-md">
                    <Clock size={15} /> 9 hr 12 mins
                </div>
                <div className="relative w-full h-60">
                    <Image src={imageUrl || DEFAULT_IMAGE_COURSE} fill alt="image courses" className="w-full" />
                </div>
            </CardHeader>
            <CardContent className="space-y-2">
                <span className="text-xs font-medium text-primary">{category}</span>
                <h3 className="text-xl text-gray-600 font-bold">{title}</h3>
                <p className="text-xs font-light text-gray-400 line-clamp-3">{description}</p>
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
                <h3 className="text-xl font-bold text-primary">{formatPrice(price)}</h3>
            </CardFooter>
        </Card>
    )
}

export default CardCourse

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowUpRight, Clock, Star } from "lucide-react"
import Image from "next/image"
import { CardCourseProps } from "./cardCourse.types"
import { DEFAULT_IMAGE_COURSE } from "@/const/images"
import { formatPrice } from "@/lib/formatPrice"
import { clerkClient } from "@clerk/nextjs/server"
import Link from "next/link"

export const CardCourse = async ({ category, chapters, description, imageUrl, price, userID, title, createdAt, slug }: CardCourseProps) => {

    const client = await clerkClient();
    const duration = chapters.reduce((acc, chapter) => {
        return acc + (chapter.duration ?? 0)
    }, 0)

    const formatDuration = (seconds: number) => {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60

        return `${h}h ${m}m ${s}s`
    }

    const formatted = formatDuration(duration)

    const user = await client.users.getUser(userID)

    return (
        <Card>
            <CardHeader className="relative">

                <div className="relative w-full h-50 rounded-sm overflow-hidden">
                    <Image src={imageUrl || DEFAULT_IMAGE_COURSE} fill alt="image courses" className="w-full" />

                    <div className="absolute top-1 right-1 bg-white gap-1 text-xs font-light text-gray-400 flex items-center p-1 rounded-sm shadow-md z-20">
                        <Clock size={15} /> {formatted}
                    </div>
                </div>

            </CardHeader>
            <CardContent className="space-y-2">
                <span className="text-xs font-medium text-primary">{category}</span>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl text-gray-600 font-bold">{title}</h3>
                    <Link href={`/academy/courses/${slug}`}>
                        <ArrowUpRight />
                    </Link>
                </div>
                <p className="text-xs font-light text-gray-400 line-clamp-3">{description}</p>

                <div className="flex items-center gap-2 mt-2">
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
                    <div className="w-10 aspect-square rounded-full relative overflow-hidden">
                        <Image src={user.imageUrl} fill alt={user.firstName || 'teacher'} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-800">{user.firstName}</span>
                        <span className="text-xs font-light text-gray-400 text-right">{createdAt.toLocaleDateString()} Created</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-primary">{formatPrice(price)}</h3>
            </CardFooter>
        </Card>
    )
}

export default CardCourse

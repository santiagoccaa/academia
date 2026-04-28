import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowUpRight, Clock } from "lucide-react"
import Image from "next/image"
import { DEFAULT_IMAGE_COURSE } from "@/const/images"
import { formatPrice } from "@/lib/formatPrice"
import { clerkClient } from "@clerk/nextjs/server"
import Link from "next/link"
import { formatDuration } from "@/utils"
import { CourseWithExtras } from "../ListCourses/ListCourses.types"
import { StarRating } from "../StarRating"
import { getPurchaseCourseById } from "@/actios/getPurchaseCourseById"

export const CardCourse = async (course: CourseWithExtras) => {

    const client = await clerkClient();
    const { _count, chapters, userID, imageUrl, category, description, slug, createdAt, title, price, avgStars, feedback, id } = course

    const duration = chapters.reduce((acc, chapter) => {
        return acc + (chapter.duration ?? 0)
    }, 0)

    const formatted = formatDuration(duration)

    const user = await client.users.getUser(userID)

    const purschase = await getPurchaseCourseById(userID, id)

    return (
        <Link href={`/academy/courses/${slug}`} className="group">
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
                        <h3 className="text-xl text-gray-800 font-bold w-full truncate line-clamp-1">{title}</h3>
                        <span className="">
                            <ArrowUpRight />
                        </span>
                    </div>
                    <h2 className="text-xs font-medium text-primary">Creado: <span className="text-gray-400 font-light">{createdAt.toLocaleDateString()}</span></h2>

                    <p className="text-xs font-light text-gray-400 line-clamp-3">{description}</p>

                    <div className="flex items-end gap-2 mt-2">
                        <span className="text-xs font-medium text-primary">{avgStars}</span>
                        <div className="flex items-center gap-1">
                            <StarRating rating={avgStars} />
                        </div>
                        <span className="text-xs font-light text-gray-400">{feedback.length}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <h2 className="text-xs font-medium text-primary">Inscritos: <span className="text-gray-400 font-light">{_count.purchases}</span></h2>
                    </div>

                </CardContent>
                <CardFooter className="justify-between items-end">
                    <div className="flex items-center gap-2">
                        <div className="w-10 aspect-square rounded-full relative overflow-hidden">
                            <Image src={user.imageUrl} fill alt={user.firstName || 'teacher'} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-800 capitalize">{user.firstName}</span>
                            <span className="text-xs font-bold text-gray-800 capitalize">{user.lastName}</span>
                        </div>
                    </div>
                    {purschase ? (
                        <h3 className="bg-accent text-primary font-semibold text-xs p-1 rounded-md">Inscrito</h3>
                    ) : (
                        <h3 className="text-xl font-bold text-primary">{formatPrice(price)}</h3>
                    )}
                </CardFooter>
            </Card>
        </Link>
    )
}

export default CardCourse

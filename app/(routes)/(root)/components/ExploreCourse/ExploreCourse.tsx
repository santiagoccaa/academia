import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { getHomeCourses } from "@/actios/getHomeCourses"
import { CardCourse } from "@/components/Shared"
import Link from "next/link"

export const ExploreCourse = async () => {

    const t = useTranslations('homePage.exploreCourses')

    const courses = await getHomeCourses()

    return (
        <PageContainer>
            <div className='flex flex-col my-8 '>
                <h2 className='text-sm font-medium text-primary'>{t('title')}</h2>
                <p className='text-3xl font-medium text-gray-800 max-w-xl'>
                    {t('subtitle2')}
                </p>
                <p className="text-sm text-gray-500">
                    {t('subtitle')}
                </p>
            </div>

            <PageContainer>
                <Carousel>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {courses?.map((course, index) => (
                            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                                <CardCourse {...course} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </PageContainer>

            <div className="flex justify-center mt-8">
                <Button className="shadow-md" asChild>
                    <Link href={"/acadey/courses"}>
                        {t('button')}
                    </Link>
                </Button>
            </div>
        </PageContainer>
    )
}

export default ExploreCourse
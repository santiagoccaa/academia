import { CardCourse } from "@/components/Shared"
import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export const ExploreCourse = async () => {

    const t = useTranslations('homePage.exploreCourses')

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse /> */}
            </div>
            <div className="flex justify-center mt-8">
                <Button className="shadow-md">
                    {t('button')}
                </Button>
            </div>
        </PageContainer>
    )
}

export default ExploreCourse
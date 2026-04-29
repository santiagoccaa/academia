import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const Features = () => {
    const t = useTranslations('aboutUsPage.features')
    return (
        <PageContainer>
            <div className="flex h-fit lg:py-8">
                <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
                    <div className="w-80 h-80 rounded-sm shadow-sm relative bg-gray-low">
                        <div className="absolute left-1/2 -translate-x-1/2 top-5 w-70 h-80">
                            <Image src={"/aboutUs/decoration.png"} alt="decoration" fill />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                    <h2 className="text-primary text-sm font-bold">{t('title')}</h2>
                    <h2 className="text-gray-800 font-medium text-3xl">
                        {t('subtitle')}
                    </h2>

                    <p className="text-sm font-light text-gray-600">
                        {t('description')}
                    </p>

                    <p className="text-sm font-light text-gray-600">
                        {t('description1')}
                    </p>

                    <Button className="rounded-full w-fit text-sm">
                        {t('button')} <ArrowRight />
                    </Button>
                </div>
            </div>
        </PageContainer>
    )
}

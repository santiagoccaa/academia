import { PageContainer } from "@/components/Shared/PageContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
    const t = useTranslations('aboutUsPage.hero')
    return (
        <PageContainer>
            <div className="flex min-h-screen">
                <div className="w-full lg:w-1/2 flex flex-col flex-1 justify-center gap-4">
                    <h1 className="text-4xl text-primary md:text-6xl lg:text-5xl font-bold">
                        {t('title')}
                    </h1>
                    <h2 className="text-3xl text-gray-800 font-medium">
                        <span className="text-[#FF9B26] uppercase">
                            {t('subtitle1')} {" "}
                        </span>
                        {t('subtitle2')}
                    </h2>
                    <p className="text-sm text-gray-600 mt-10 lg:mt-0">
                        {t('description')}
                    </p>

                    <Button className="rounded-full w-fit text-sm mt-10 lg:mt-4">
                        {t('button')} <ArrowRight />
                    </Button>
                </div>

                <div className="hidden w-full lg:w-1/2 lg:flex items-center justify-center">
                    <div className="w-80 aspect-square rounded-sm bg-gray-low relative">
                        <div className="w-60 h-40 rounded-md overflow-hidden absolute -top-5 -right-5">
                            <Image src={"/aboutUs/image1.png"} alt="salon de clase" fill />
                        </div>

                        <div className="w-60 h-40 rounded-md overflow-hidden absolute -bottom-5 -left-5">
                            <Image src={"/aboutUs/image2.png"} alt="salon de clase" fill />
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

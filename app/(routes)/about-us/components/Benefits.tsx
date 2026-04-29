import { PageContainer } from "@/components/Shared/PageContainer"
import { useTranslations } from "next-intl"

const benefits = [
    {
        title: "card1",
        description: "card1"
    },
    {
        title: "card2",
        description: "card2"
    },
    {
        title: "card3",
        description: "card3"
    },
    {
        title: "card4",
        description: "card4"
    },
    {
        title: "card5",
        description: "card5"
    },
    {
        title: "card6",
        description: "card6"
    },
]

export const Beenefits = () => {
    const t = useTranslations('aboutUsPage.benefits')
    return (
        <PageContainer>
            <div className="flex flex-col items-center text-center gap-4 my-16">
                <h2 className="text-sm font-bold text-primary">{t('title')}</h2>
                <h2 className="text-3xl text-gray-800 font-medium max-w-2xl">
                    {t('subtitle')}
                </h2>
                <p className="text-sm text-gray-600 max-w-xl">
                    {t('description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-8">
                    {benefits.map(({ title, description }, index) => (
                        <div key={index} className={`w-full h-48 rounded-sm hover:shadow-md transition-all duration-300 border shadow text-left p-2 space-y-4 flex flex-col justify-center ${index % 2 !== 0 ? 'bg-white' : 'bg-[#F7FDF9] '}`}>
                            <div className="relative">
                                <div className={`w-8 h-4 ${index % 2 === 0 ? 'rotate-45' : '-rotate-45'} bg-accent absolute top-2 left-0`} />
                                <span className="text-2xl text-primary relative font-bold">0{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">{t(`cards.${title}.title`)}</h3>
                            <p className="text-sm text-gray-600">
                                {t(`cards.${description}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    )
}
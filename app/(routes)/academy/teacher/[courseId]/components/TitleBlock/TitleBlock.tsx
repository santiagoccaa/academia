import { useTranslations } from "next-intl"
import { TitleBlockProps } from "./TitleBlock.type"

export const TitleBlock = ({ title, icon: Icon }: TitleBlockProps) => {

    const t = useTranslations()
    return (
        <div className="flex items-center mb-6 gap-1">
            <div className="p-2 rounded-full bg-primary">
                <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
                {t(title)}
            </h3>
        </div>
    )
}

export default TitleBlock   
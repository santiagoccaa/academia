"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import axios from "axios"
import { useTranslations } from "next-intl"

export const CardPricing = () => {

    const t = useTranslations('subscriptionPage')

    const handleRoleUser = async () => {

        try {
            const res = await axios.post('/api/beingTeacher')
            window.location.assign(res.data.url)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Card className="max-w-80 mx-auto h-fit relative shadow-xl border">
            <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold">
                    {t('card.title')}
                </CardTitle>
                <div>
                    <p className="text-5xl font-extrabold">$10</p>
                    <span className="text-xs text-muted-foreground">
                        USD / 30 {t('card.days')}
                    </span>
                </div>

                <Button
                    className="w-full py-5 text-lg cursor-pointer"
                    onClick={handleRoleUser}
                >
                    {t('card.button')}
                </Button>
            </CardHeader>

            <CardContent>
                <ul className="space-y-3 border-t pt-4">
                    {[
                        "item1",
                        "item2",
                        "item3",
                        "item4",
                        "item5",
                        "item6",    
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            {t(`card.${item}`)}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

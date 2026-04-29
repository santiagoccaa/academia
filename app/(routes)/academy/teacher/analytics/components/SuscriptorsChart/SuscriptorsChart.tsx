"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { SuscriptorsChartProps } from "./SuscriptorsChart.types"
import axios from "axios"
import { useTranslations } from "next-intl"
export const description = "A bar chart"

const chartConfig = {
    desktop: {
        label: "Usuarios",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig


export const SuscriptorsChart = () => {

    const t = useTranslations('academy.graph1')

    const [data, setData] = useState<SuscriptorsChartProps[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchSuscribers = async () => {
            try {
                const res = await axios('/api/analytics/totalSuscriptors')
                setData(res.data)
            } catch (error) {
                console.log("SUSCRIPTORES NOT FOUND", error);
            } finally {
                setIsLoading(false)
            }
        }

        fetchSuscribers()
    }, [])


    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('subs')}</CardTitle>
                <CardDescription>{t('subtitle')}</CardDescription>
            </CardHeader>
            {isLoading ? (
                <div className="text-sm text-muted-foreground h-36 flex items-center justify-center">
                    {t('loading')}
                </div>
            )
                : (
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={data}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="users" fill="var(--color-desktop)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                )}
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    {t('footer1')} ** <TrendingUp className="h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    )
}

export default SuscriptorsChart
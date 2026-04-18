import { PageContainer } from "@/components/Shared/PageContainer"
import { CardServices } from "./CardServices"
import { ChartNetwork, Computer, LucideIcon, SquareCode } from "lucide-react"
import { ReactNode } from "react"
import { Graph, Mockup } from "@/components/Icons"
import { Html } from "@/components/Icons/Html"

export interface AcademyService {
    title: string
    description: string
    icon: ReactNode
    href: string
    color: string
}

const academyServices: AcademyService[] = [
    {
        title: "Interaction Design",
        description: "Lessons on design that cover the most recent developments.",
        icon: <Mockup size="30" color="#4AC8AE" />,
        href: "/",
        color: "bg-accent"
    },
    {
        title: "UX Design Course",
        description: "Classes in development that cover the most recent advancements in web.",
        icon: <Html size="30" color="#4883FF" />,
        href: "/",
        color: "bg-[#E0EAFF]"
    },
    {
        title: "User Interface Design",
        description: "User Interface Design courses that cover the most recent  trends",
        icon: <Graph size="30" color="#C11574" />,
        href: "/",
        color: "bg-[#FCE7F6]"
    },
]

export const Services = () => {
    return (
        <PageContainer>
            <div className='flex flex-col items-center text-center my-8 '>
                <h2 className='text-sm font-medium text-primary'>Our Services</h2>
                <p className='text-2xl md:text-3xl font-medium text-gray-800 max-w-xl mb-8'>
                    Fostering a playful & engaging learning environment
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
                    {academyServices.map((service, index) => (
                        <CardServices key={index} {...service} />
                    ))}
                </div>
            </div>
        </PageContainer>
    )
}

export default Services

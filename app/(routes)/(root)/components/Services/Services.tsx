import { PageContainer } from "@/components/Shared/PageContainer"
import { CardServices } from "./CardServices"
import { ChartNetwork, Computer, LucideIcon, SquareCode } from "lucide-react"

export interface AcademyService {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color:string
}

const academyServices: AcademyService[] = [
    {
        title: "Interaction Design",
        description: "Lessons on design that cover the most recent developments.",
        icon: Computer,
        href: "/",
        color:"text-violet-400 bg-violet-100"
    },
    {
        title: "UX Design Course",
        description: "Classes in development that cover the most recent advancements in web.",
        icon: SquareCode ,
        href: "/",
        color:"text-blue-400 bg-blue-100"
    },
    {
        title: "User Interface Design",
        description: "User Interface Design courses that cover the most recent  trends",
        icon: ChartNetwork ,
        href: "/",
        color:"text-pink-400 bg-pink-100"
    },
]

export const Services = () => {
    return (
        <PageContainer>
            <div className='flex flex-col items-center text-center my-8 '>
                <h2 className='text-sm font-medium text-violet-500'>Our Services</h2>
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

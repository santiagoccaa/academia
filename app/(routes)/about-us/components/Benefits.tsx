import { PageContainer } from "@/components/Shared/PageContainer"

const benefits = [
    {
        title: "Standardization",
        description: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are"
    },
    {
        title: "Reduced Costs",
        description: "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning"
    },
    {
        title: "More Customization",
        description: "ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different"
    },
    {
        title: "Affordable Pricing",
        description: "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning"
    },
    {
        title: "Learner Satisfaction",
        description: "If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad"
    },
    {
        title: "Multimedia Materials",
        description: "One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for"
    },
]

export const Beenefits = () => {
    return (
        <PageContainer>
            <div className="flex flex-col items-center text-center gap-4 my-16">
                <h2 className="text-sm font-bold text-primary">Our Benefits</h2>
                <h2 className="text-3xl text-gray-800 font-medium max-w-2xl">
                    By Joining WEEKENS UX Platform, One Can Avail a Lot Of Benefits.
                </h2>
                <p className="text-sm text-gray-600 max-w-xl">
                    Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-8">
                    {benefits.map(({ title, description }, index) => (
                        <div key={index} className={`w-full h-48 rounded-sm hover:shadow-md transition-all duration-300 border shadow text-left p-2 space-y-4 flex flex-col justify-center ${index % 2 !== 0 ? 'bg-white' : 'bg-[#F7FDF9] '}`}>
                            <div className="relative">
                                <div className={`w-8 h-4 ${index % 2 === 0 ? 'rotate-45' : '-rotate-45'} bg-accent absolute top-2 left-0`} />
                                <span className="text-2xl text-primary relative font-bold">0{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                            <p className="text-sm text-gray-600">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    )
}
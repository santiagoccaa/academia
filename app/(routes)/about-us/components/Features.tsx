import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const Features = () => {
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
                    <h2 className="text-primary text-sm font-bold">Features</h2>
                    <h2 className="text-gray-800 font-medium text-3xl">
                        We are always working to provide you best of the features in all aspects.
                    </h2>

                    <p className="text-sm font-light text-gray-600">
                        At WEEKENDUX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.
                    </p>

                    <p className="text-sm font-light text-gray-600">
                        You will find every little thing on the internet in just a click of hand, but here we admire that without knowledge and practice the internet may even also fail you in your life.
                    </p>

                    <Button className="rounded-full w-fit text-sm">
                        Learn More <ArrowRight />
                    </Button>
                </div>
            </div>
        </PageContainer>
    )
}

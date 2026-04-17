import { PageContainer } from "@/components/Shared/PageContainer";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Laptop, Lightbulb, LoaderCircle, Speech, UserPen } from "lucide-react";
import Image from "next/image";
import { STUDENT_HOME } from "@/const/images";
import { Navbar } from "../Navbar";
import { Decorador } from "../Decorador";
import { CollaBoration } from "./CollaBoration";

const items = [
    {
        icon: Speech,
        name: "Public Speaking",
        color: "text-yellow-500"
    },
    {
        icon: BriefcaseBusiness,
        name: "Career-Oriented",
        color: "text-orange-500"
    },
    {
        icon: Lightbulb,
        name: "Creative Thinking",
        color: "text-purple-500"
    }
]

export const Hero = () => {
    return (
        <div className="relative bg-linear-to-t from-accent via-white to-white overflow-hidden">
            <Decorador className="top-20 lg:top-1/2 lg:-translate-y-1/2 -left-40 lg:left-0" />
            <Decorador className="bottom-20 -right-30 lg:bottom-0 lg:right-0 lg:flex" />
            {/* <ExploreCourse /> */}
            <Navbar />
            <PageContainer>
                <div className="h-fit min-h-screen flex flex-col">
                    <div className="flex flex-1 lg:min-h-screen items-center relative lg:pt-10">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 relative flex flex-col">
                            {/* Title */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                                    Up your <span className="text-primary">Skills</span> to <span className="text-primary">Advance</span> your <span className="text-primary">Career</span> path
                                </h2>

                                {/* Description */}
                                <p className="text-sm text-gray-600 my-4">
                                    Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.
                                </p>

                                <div className="flex gap-8 mt-4">
                                    <Button size="lg" className="hover:shadow-xl">
                                        Get Started
                                    </Button>

                                    <Button className="bg-accent text-primary hover:text-white transition-colors duration-300" size="lg">
                                        Get free trial
                                    </Button>
                                </div>
                            </div>
                            {/* Item icons */}
                            <div className="flex justify-between mt-8 py-4">
                                {items.map(({ icon: Icon, name, color }, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <Icon className={`w-8 h-8 ${color}`} />
                                        <span className="text-sm text-gray-500">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-1/2 hidden lg:flex items-center justify-center h-full">
                            <div className="relative">
                                <div className="w-8 aspect-square rounded-full bg-primary absolute left-0 bottom-10" />
                                <div className="w-4 aspect-square rounded-full bg-primary absolute left-10 bottom-0" />

                                <div className="w-100 aspect-square border border-primary rounded-full absolute bottom-4 right-4" />
                                <div className="w-100 h-100 rounded-full bg-primary relative overflow-hidden">
                                    <div className="w-70 h-80 absolute bottom-0 left-1/2 -translate-x-1/2">
                                        <Image src={STUDENT_HOME} alt="student" fill />
                                    </div>
                                </div>

                                <div className="absolute top-0 -right-12 w-30 py-2 rounded-lg bg-white border border-primary shadow-2xl flex flex-col justify-end items-center gap-2">
                                    <LoaderCircle className="w-20 h-20 text-primary" />
                                    <h3 className="text-2xl font-bold">5k+</h3>
                                    <span className="text-sm text-gray-400">Online Courses</span>
                                </div>

                                <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-44 py-1 px-2  rounded-lg bg-white border border-primary shadow-2xl flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-primary">
                                        <Laptop className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">2k+</h3>
                                        <span className="text-sm text-gray-400">Video Courses</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-8 -right-4 w-fit py-1 px-2 rounded-lg bg-white border border-primary shadow-2xl flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-primary">
                                        <UserPen className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-400">Tutors</span>
                                        <h3 className="text-2xl font-bold">250+</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CollaBoration />
                </div>
            </PageContainer>
        </div>
    )
}

export default Hero
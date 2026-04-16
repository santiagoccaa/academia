"use client"

import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LOGO } from "@/const/images"
import { ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Nav {
    name: string
    url: string
}

const nav: Nav[] = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About Us",
        url: "/about-us"
    },
    {
        name: "Courses",
        url: "/courses"
    },
    {
        name: "Contact Us",
        url: "contact-us"
    }
]

export const Navbar = () => {

    const pathName = usePathname()

    return (
        <div className="absolute left-0 top-0 w-full z-10">
            <PageContainer>
                <div className="flex items-center justify-between py-2 w-full">
                    <div className="flex items-center gap-4">
                        <div className="relative w-20 h-16">
                            <Image src={LOGO} fill alt="Logo" />
                        </div>
                        <div className="relative">
                            <Input placeholder="Want to learn?" className="pl-7 pr-28 border" />
                            <Search className="absolute text-gray-300 top-1/2 -translate-y-1/2 left-2 w-4 h-4" />
                            <Button className="absolute top-1/2 -translate-y-1/2 right-2 h-8 text-xs bg-violet-100 text-violet-400 hover:text-white transition-colors duration-300">
                                Explore <ChevronDown className="w-3 h-2" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <nav>
                            <ul className="flex items-center gap-4">
                                {nav.map(({ url, name }) => (
                                    <li key={"name"} className={`text-sm font-medium hover:text-violet-400 duration-300 transition-colors ${pathName === name && 'text-violet-400'}`}>
                                        <Link href={url}>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-2">
                            <Button variant="ghost">
                                Sign In
                            </Button>
                            <Button>
                                Create free account
                            </Button>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

export default Navbar
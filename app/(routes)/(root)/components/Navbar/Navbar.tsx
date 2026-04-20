"use client"

import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LOGO } from "@/const/images"
import { ChevronDown, Menu, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ABOUT_US, CONTACT_US, COURSES, HOME } from "@/const/routes"

interface Nav {
    name: string
    url: string
}

const nav: Nav[] = [
    {
        name: "Home",
        url: HOME
    },
    {
        name: "About Us",
        url: ABOUT_US
    },
    {
        name: "Courses",
        url: COURSES
    },
    {
        name: "Contact Us",
        url: CONTACT_US
    }
]

export const Navbar = () => {

    const pathName = usePathname()

    const allowedRoutes = [HOME, ABOUT_US, CONTACT_US]

    if (!allowedRoutes.includes(pathName)) {
        return
    }

    return (
        <div className="absolute lg:block w-full z-10">
            <PageContainer>
                <div className="flex items-center justify-between py-2 w-full">
                    <div className="flex items-center justify-between w-full lg:w-fit gap-4">
                        <div className="relative w-20 h-16">
                            <Image src={LOGO} fill alt="Logo" sizes='80px' />
                        </div>
                        <div className="hidden lg:block relative">
                            <Input placeholder="Want to learn?" className="pl-7 pr-28 border" />
                            <Search className="absolute text-gray-300 top-1/2 -translate-y-1/2 left-2 w-4 h-4" />
                            <Button className="absolute top-1/2 -translate-y-1/2 right-2 h-8 text-xs bg-accent text-primary hover:text-white transition-colors duration-300">
                                Explore <ChevronDown className="w-3 h-2" />
                            </Button>
                        </div>
                        <div className="block lg:hidden">
                            <Sheet>
                                <SheetTrigger>
                                    <Menu />
                                </SheetTrigger>
                                <SheetContent showCloseButton={false}>
                                    <SheetClose className="p-4 text-2xl">
                                        <X />
                                    </SheetClose>
                                    <SheetTitle className="sr-only">Menu</SheetTitle>
                                    <nav className="flex py-12 justify-center">
                                        <ul className="flex flex-col gap-8 text-left">
                                            {nav.map(({ url, name }, index) => (
                                                <li key={index} className={`text-xl relative font-medium hover:text-primary duration-300 transition-colors ${pathName === url && 'text-primary border-b font-bold border-primary'}`}>
                                                    <Link href={url}>
                                                        {name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <SheetFooter className="flex justify-center items-center">
                                        <div className="relative w-20 h-16">
                                            <Image src={LOGO} fill alt="Logo" sizes='80px' />
                                        </div>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-8">
                        <nav>
                            <ul className="flex items-center gap-4">
                                {nav.map(({ url, name }, index) => (
                                    <li key={index} className={`text-sm font-medium hover:text-primary duration-300 transition-colors ${pathName === url && 'text-primary'}`}>
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
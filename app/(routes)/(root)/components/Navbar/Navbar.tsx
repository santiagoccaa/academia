"use client"

import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"
import { LOGO } from "@/const/images"
import { ArrowRight, Menu, X } from "lucide-react"
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
import LanguageSelector from "@/components/Shared/LenguajeSelector/LenguajeSelector"
import { useTranslations } from "next-intl"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { Search } from "./Search"

interface Nav {
    name: string
    url: string
}

const nav: Nav[] = [
    {
        name: "home",
        url: HOME
    },
    {
        name: "aboutUs",
        url: ABOUT_US
    },
    {
        name: "courses",
        url: COURSES
    },
    {
        name: "contactUs",
        url: CONTACT_US
    }
]

export const Navbar = () => {

    const pathName = usePathname()
    const t = useTranslations("homePage.navbar")

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
                            {/* <Search /> */}
                        </div>
                        <LanguageSelector />

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
                                                        {t("input.title")}
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
                                            {t(`nav.${name}`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <SignedIn>
                            <Button asChild>
                                <Link href={"/academy/courses"}>
                                    Academy
                                    <ArrowRight />
                                </Link>
                            </Button>
                        </SignedIn>
                        <SignedOut>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" asChild>
                                    <Link href={"/sign-in"}>
                                        {t("auth.signIn")}
                                    </Link>
                                </Button>
                                <Button asChild>
                                    <Link href={"/sign-in"}>
                                        {t("auth.free")}
                                    </Link>
                                </Button>
                            </div>
                        </SignedOut>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

export default Navbar
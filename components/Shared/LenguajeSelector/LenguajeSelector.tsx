'use client';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import setLangCookie from "@/i18n/setLangCookie";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

const languajes = ["es", "en"]

export const LanguageSelector = () => {
    const lang = useLocale();

    const handleSelectLang = (lang: string) => {
        setLangCookie(lang);
    };
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-full shadow-none" ><Languages size={25} /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => handleSelectLang("es")}>Es</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleSelectLang("en")}>En</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default LanguageSelector;

"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { routes, routesTeacher } from "./appSidebar.data"
import { ArrowBigUpDash, CodeXml } from "lucide-react"
import { useUser } from "@clerk/nextjs"

export function AppSidebar() {
    const { user } = useUser()
    const { state } = useSidebar()

    const role = user?.publicMetadata?.role as string

    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="bg-white">
                <SidebarHeader>
                    <Link href={"/"} className="flex flex-row items-center gap-2">
                        <div className="p-1 rounded-full text-white bg-violet-400">
                            <CodeXml className="w-6 h-6" />
                        </div>
                        {
                            state === 'expanded' && <span className="text-xl font-semibold text-gray-800 tracking-wide">Academy</span>
                        }
                    </Link>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Plataforma
                    </SidebarGroupLabel>
                    <SidebarMenu className="space-y-2">
                        {
                            routes.map((route) => (
                                <SidebarMenuItem key={route.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={route.url}>
                                            <div className="p-1 rounded-lg text-white bg-violet-400">
                                                <route.icon className="w-4 h-4" />
                                            </div>
                                            {state === "expanded" && <span>{route.title}</span>}
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                    <SidebarMenu className="mt-4 space-y-2">
                        <SidebarGroupLabel>
                            Profesor:
                        </SidebarGroupLabel>

                        <SidebarMenuItem>
                            <SidebarMenuSub>

                                {role !== "teacher" ? (
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton href={"/being-teacher"} className="hover:bg-muted transition">
                                            <div className="p-1 rounded-lg text-black bg-amber-400">
                                                <ArrowBigUpDash className="w-4 h-4" />
                                            </div>
                                            Ser Profesor
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ) : (
                                    routesTeacher.map((routeTeacher) => (
                                        <SidebarMenuSubItem key={routeTeacher.title}>
                                            <SidebarMenuSubButton href={routeTeacher.url} className="hover:bg-muted transition">
                                                <div className="p-1 rounded-lg text-white bg-slate-400">
                                                    <routeTeacher.icon className="w-4 h-4" />
                                                </div>
                                                {routeTeacher.title}
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))
                                )}
                            </SidebarMenuSub>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent >
        </Sidebar >
    )
}
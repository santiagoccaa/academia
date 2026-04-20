import React from 'react'
import { AppSidebar } from '../(root)/components'
import { SidebarProvider } from '@/components/ui/sidebar'
import Navbar from '@/components/Shared/Navbar/Navbar'

export default function ({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <div className='w-full'>
                    <Navbar />
                    {children}
                </div>
            </SidebarProvider>
        </div>
    )
}

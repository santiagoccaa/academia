"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { BellRing, LogIn, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname()
    const { user } = useUser()

    if(pathName.includes("/sign-in")){
        return
    }
    return (
        <div className='flex justify-between p-4 border-b bg-white h-16'>
            {user ? < SidebarTrigger /> : <div />}
            <div className='flex items-center gap-4'>
                <Button variant='outline'>
                    <BellRing />
                </Button>
                <SignedOut>
                    <SignInButton>
                        <Button>
                            <LogIn />
                            Iniciar sesion
                        </Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar

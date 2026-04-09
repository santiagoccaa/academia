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
                <div className='flex w-full max-w-sm items-center border-gray-300 rounded-lg px-2.5 py-0.5'>
                    <Search className='h-4 w-4 mr-2.5' />
                    <Input type='search' placeholder='Buscar...' className='w-full border-0' />
                </div>
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

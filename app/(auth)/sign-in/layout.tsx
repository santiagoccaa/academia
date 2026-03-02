import React, { ReactNode } from 'react'

interface LayoutAuth {
    children: ReactNode
}
export default function layout({ children }: LayoutAuth) {
    return (
        <div className='h-screen w-full'>
            <div className='flex h-full w-full items-center justify-center'>
                <div className='absolute  top-0 left-0 h-full w-full bg-linear-to-r from-amber-200 to-yellow-400 z-[-1]' />
                {children}
            </div>
        </div>
    )
}

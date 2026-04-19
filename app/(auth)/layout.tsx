import React from 'react'


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex justify-center h-screen'>
            <div className='w-1/2 bg-[url("/general/auth.png")] bg-cover bg-center relative flex flex-col items-center justify-center'>
                {/* <div className='w-full h-full absolute inset-0 bg-primary opacity-50' /> */}
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                {children}
            </div>
        </div>
    )
}

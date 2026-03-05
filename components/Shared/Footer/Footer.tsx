import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='py-4 px-6 border-t bg-white w-full'>
            <div className='flex justify-between items-center text-sm text-slate-500'>
                <p>{year} Santiago</p>
                <div className='flex gap-2 items-center'>
                    <Link href={"/"}>
                        Privacidad
                    </Link>
                    <Link href={"/"}>
                        Terminos de uso
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

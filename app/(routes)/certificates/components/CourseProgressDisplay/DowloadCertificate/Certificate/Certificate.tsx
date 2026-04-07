import { CertificateProps } from './Certificate.types'

export const Certificate = ({ ref, titleCourse, userName }: CertificateProps) => {
    return (
        <div
            ref={ref}
            className='w-full h-100 relative bg-[url("/certificado.jpg")] bg-contain bg-no-repeat bg-center text-black'>
                <p className='text-2xl top-[35%] right-[20%] absolute tracking-wide font-semibold '>{userName}</p>
        </div>
    )
}

export default Certificate

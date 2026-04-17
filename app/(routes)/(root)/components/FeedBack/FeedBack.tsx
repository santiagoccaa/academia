import { PageContainer } from '@/components/Shared/PageContainer'
import { LOGO } from '@/const/images'
import Image from 'next/image'

export const FeedBack = () => {
    return (
        <div className='bg-accent py-8 my-8'>
            <PageContainer>
                <div className='flex flex-col items-center gap-4 text-center'>
                    <Image src={LOGO} alt='logo' width={100} height={100} />
                    <h2 className='text-2xl font-bold text-gray-800 max-w-4xl'>Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.</h2>

                    <div className='mt-6'>
                        <div className="w-full flex justify-center mb-2">
                            <div className="w-14 aspect-square rounded-full relative">
                                <Image src={`/persons/person5.png`} fill alt={"image user"} />
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Jacob Jones</h3>
                        <span className="text-gray-600 text-sm font-light">Student, National University</span>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
export default FeedBack

import { PageContainer } from '@/components/Shared/PageContainer'
import { tutors } from './tutors.data'
import { CardTutor } from './CardTutor'

export const Tutors = () => {
    return (
        <PageContainer>
            <div className='flex flex-col my-8 items-center text-center'>
                <h2 className='text-sm font-medium text-primary'>Tutors</h2>
                <p className='text-2xl md:text-3xl font-medium text-gray-800 max-w-xl'>
                    Meet the Heroes
                </p>
                <p className="text-sm text-gray-500 max-w-xl">
                    On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.
                </p>
            </div>
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                {tutors.map((tutor, index) => (
                    <CardTutor key={index} {...tutor} />
                ))}
            </div>
        </PageContainer>
    )
}

export default Tutors

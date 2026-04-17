import { PageContainer } from '@/components/Shared/PageContainer'
import { CardBlog } from './CardBlog'
import { blogs } from './blog.data'

export const Blog = () => {
    return (
        <PageContainer>
            <div className='flex flex-col my-8'>
                <h2 className='text-sm font-medium text-violet-500'>Blog</h2>
                <p className='text-3xl font-medium text-gray-800 max-w-xl'>
                    Our recent blogs
                </p>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 mt-8'>
                    <div className='w-full lg:w-1/2 flex flex-col lg:flex-row space-y-8 lg:space-x-4'>
                        <CardBlog {...blogs[0]} />
                        <CardBlog {...blogs[1]} />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <CardBlog {...blogs[2]} />
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Blog
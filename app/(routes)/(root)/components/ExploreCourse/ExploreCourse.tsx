import { CardCourse } from "@/components/Shared"
import { PageContainer } from "@/components/Shared/PageContainer"
import { Button } from "@/components/ui/button"

export const ExploreCourse = async () => {

    return (
        <PageContainer>
            <div className='flex flex-col my-8 '>
                <h2 className='text-sm font-medium text-primary'>Explore Programs</h2>
                <p className='text-3xl font-medium text-gray-800 max-w-xl'>
                    Our Most Popular Class
                </p>
                <p className="text-sm text-gray-500">
                    Let's join our famous class, the knowledge provided will definitely be useful for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse /> */}
            </div>
            <div className="flex justify-center mt-8">
                <Button className="shadow-md">
                    Explore All Courses
                </Button>
            </div>
        </PageContainer>
    )
}

export default ExploreCourse
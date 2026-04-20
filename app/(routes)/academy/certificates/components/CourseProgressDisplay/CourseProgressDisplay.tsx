import { Progress } from "@/components/ui/progress"
import { CourseProgressDisplayProps } from "./CourseProgressDisplay.types"
import { DowloadCertificate } from "./DowloadCertificate"

export const CourseProgressDisplay = ({ progress, titleCourse, username }: CourseProgressDisplayProps) => {

    const showProgress = progress === 100
    return (
        <>
            {
                showProgress ? (
                    <DowloadCertificate titleCourse={titleCourse} userName={username} />
                ) : (
                    <>
                        <Progress value={progress} className="*:bg-violet-300" />
                        <p className="text-xs">{progress}% completado</p>
                    </>
                )
            }
        </>
    )
}

export default CourseProgressDisplay
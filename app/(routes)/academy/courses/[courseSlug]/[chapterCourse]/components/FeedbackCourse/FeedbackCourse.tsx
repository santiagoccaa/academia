"use client"

import { useState } from "react"
import { FormFedback } from "./components"
import { FeedbackCourse } from "@/app/generated/prisma/client"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface FeedbackCourseProps {
    id: string
    feedback?: FeedbackCourse | null
}

export const FeedbackUserCourse = ({ id, feedback }: FeedbackCourseProps) => {
    const [edit, setEdit] = useState(false)

    const [stars, setStars] = useState<number>(feedback?.stars ?? 0)
    const [description, setDescription] = useState<string>(feedback?.description ?? "")

    console.log("Nani", feedback);
    

    return (
        <div className='mt-4 bg-white rounded-md p-6 shadow-md'>
            {feedback &&
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Tu Calificacion</h2>
            }
            {!edit && feedback ? (
                <div>
                    <div className="flex gap-4 mb-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            item <= stars ? (
                                <Star key={item} fill="#20B486" strokeWidth={0} size={30} />
                            ) : (
                                <Star key={item} size={30} strokeWidth={1} />
                            )
                        ))}
                    </div>
                    <p className="text-sm font-light text-gray-600">{description}</p>

                    <Button className="mt-8" onClick={() => setEdit(true)}>
                        Editar comentario
                    </Button>
                </div>
            ) : (
                <FormFedback
                    id={id}
                    description={description}
                    stars={stars}
                    setEdit={setEdit}
                    setDescription={setDescription}
                    setStarts={setStars}
                />
            )}
        </div>
    )
}

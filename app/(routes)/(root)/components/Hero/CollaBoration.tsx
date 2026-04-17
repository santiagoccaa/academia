import { CODECOV, DUOLINGO, MAGIC, TESTING } from "@/const/images"
import Image from "next/image"

export const collabotarions = [
  {
    image: DUOLINGO
  },
  {
    image: CODECOV
  },
  {
    image: TESTING
  },
  {
    image: MAGIC
  },
]

export const CollaBoration = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between relative'>
      <div className="absolute top-0 left-40 w-4 aspect-square rounded-full bg-violet-500" />
      <div>
        <h3 className="text-2xl text-violet-500 font-bold">
          250+
        </h3>
        <span className="text-xl font-medium text-gray-600">Collaboration</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {collabotarions.map(({ image }, index) => (
          <div key={index} className="w-40 h-20 relative">
            <Image src={image} alt={image} fill />
          </div>
        ))}
      </div>
    </div>
  )
}

import { coursesCardHome } from "@/actios/courses"

export default async function TestPage() {

  const courses = await coursesCardHome()

  console.log("cursor", courses);

  return (
    <div>TestPage</div>
  )
}

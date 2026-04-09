import { getHomeCourses } from "@/actios/getHomeCourses";
import { ExploreCourse } from "./components";
import { ListCourses } from "@/components/Shared";

export default async function Home() {

  const listCourses = await getHomeCourses()

  return (
    <div>
      <ExploreCourse />
      <ListCourses courses={listCourses} title="Top cursos" />
    </div>
  );
}

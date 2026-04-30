import { useTranslations } from "next-intl";
import { Blog, ExploreCourse, FeedBack, Hero, Services, Tutors } from "./components";

export default function Home() {
  const t = useTranslations()
  return (
    <>
      <Hero />
      <Services />
      <ExploreCourse />
      <Tutors />
      <FeedBack />
      <Blog />
    </>
  );
}

import { useTranslations } from "next-intl";
import { Blog, ExploreCourse, FeedBack, Hero, Services, Tutors } from "./components";
import LanguageSelector from "@/components/Shared/LenguajeSelector/LenguajeSelector";

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

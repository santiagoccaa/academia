import { Blog, ExploreCourse, FeedBack, Hero, Services, Tutors } from "./components";

export default function Home() {
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

import { Blog, ExploreCourse, FeedBack, Footer, Hero, Services, Tutors } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ExploreCourse />
      <Tutors />
      <FeedBack />
      <Blog />
      <Footer />
    </>
  );
}

import Hero from "../sections/Hero";
import About from "../sections/About";
import FeaturedWork from "../sections/FeaturedWork";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <FeaturedWork />
    </PageTransition>
  );
}
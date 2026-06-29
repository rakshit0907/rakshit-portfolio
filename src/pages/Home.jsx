import Hero from "../sections/Hero";
import About from "../sections/About";
import TechStack from "../sections/TechStack";
import FeaturedWork from "../sections/FeaturedWork";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <TechStack />
      <FeaturedWork />
    </PageTransition>
  );
}
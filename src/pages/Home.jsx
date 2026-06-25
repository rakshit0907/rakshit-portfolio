import Hero from "../sections/Hero";
import FeaturedWork from "../sections/FeaturedWork";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedWork />
    </PageTransition>
  );
}
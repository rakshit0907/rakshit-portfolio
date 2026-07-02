import Hero from "../sections/Hero";
import About from "../sections/About";
import FeaturedWork from "../sections/FeaturedWork";
import PageTransition from "../components/PageTransition";
import TransitionScene from "../sections/TransitionScene";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <TransitionScene />
      <div className="h-screen bg-black" />
      <FeaturedWork />
    </PageTransition>
  );
}
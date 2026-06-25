import Hero from "../sections/Hero";
import FeaturedWork from "../sections/FeaturedWork";
import AboutPreview from "../sections/AboutPreview";
import SkillsPreview from "../sections/SkillsPreview";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedWork />
      <AboutPreview />
      <SkillsPreview />
    </PageTransition>
    
  );
}
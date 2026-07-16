import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
import FeaturedWork from "../sections/FeaturedWork";
import SkillsPreview from "../sections/SkillsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedWork />
    </>
  );
}
import AboutBackground from "../components/about/AboutBackground";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutJourney from "../components/about/AboutJourney";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutTech from "../components/about/AboutTech";
import AboutCurrent from "../components/about/AboutCurrent";
import AboutCTA from "../components/about/AboutCTA";
import useAboutParallax from "../hooks/useAboutParallax";
export default function About() {
  useAboutParallax();
  return (
    <section className="relative bg-black text-white">
      <AboutBackground />
      <AboutHero />
      <AboutStory />
      <AboutJourney />
      <AboutPhilosophy />
      <AboutTech />
      <AboutCurrent />
      <AboutCTA /> 

    </section>
  );
}
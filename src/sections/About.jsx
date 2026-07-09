import AboutBackground from "../components/about/AboutBackground";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutJourney from "../components/about/AboutJourney";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutTech from "../components/about/AboutTech";
import AboutCurrent from "../components/about/AboutCurrent";
import AboutCTA from "../components/about/AboutCTA";
import useAboutExperience from "../hooks/useAboutExperience";
import useAboutParallax from "../hooks/useAboutParallax";

export default function About() {
  useAboutExperience();
  useAboutParallax();

  return (
    <section className="relative bg-transparent text-white overflow-hidden">
      <AboutBackground />

      <AboutHero />

      {/* Story panel overlaps the end of Hero by 18vh, so the two sections feel connected instead of cut apart */}
      <div className="-mt-[18vh] relative z-20">
        <AboutStory />
      </div>

      <AboutJourney />
      <AboutPhilosophy />
      <AboutTech />
      <AboutCurrent />
      <AboutCTA />
    </section>
  );
}
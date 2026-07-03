import Experience from "../experience/Experience";
import HeroContent from "../components/hero/HeroContent";
import HeroScrollIndicator from "../components/hero/HeroScrollIndicator";
import useHeroPin from "../hooks/useHeroPin";
import HeroBackground from "../components/hero/HeroBackground";
export default function Hero() {
  useHeroPin();

  return (
    <section className="hero-section relative h-screen overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0">
        <Experience />
      </div>

      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
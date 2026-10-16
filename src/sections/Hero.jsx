import HeroBackground from "../components/hero/HeroBackground";
import HeroArchitecture from "../components/hero/HeroArchitecture";
import HeroContent from "../components/hero/HeroContent";
import HeroScrollIndicator from "../components/hero/HeroScrollIndicator";
import useHeroTextAnimation from "../hooks/useHeroTextAnimation";

export default function Hero() {
  useHeroTextAnimation();

  return (
    <section
      id="hero"
      className="hero-section relative h-screen overflow-hidden"
    >
      <HeroBackground />
      <HeroArchitecture />
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
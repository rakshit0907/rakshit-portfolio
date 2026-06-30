import HeroScene from "../experience/scene/HeroScene";
import HeroContent from "../components/hero/HeroContent";
import HeroScrollIndicator from "../components/hero/HeroScrollIndicator";
import useHeroPin from "../hooks/useHeroPin";

export default function Hero() {
  useHeroPin();

  return (
    <section
      className="
      hero-section
      relative
      h-screen
      "
    >
      <div className="hero-scene absolute inset-0">
        <HeroScene />
      </div>

      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
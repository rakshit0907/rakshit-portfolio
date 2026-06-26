import HeroScene from "../experience/scene/HeroScene";
import HeroOverlay from "../components/HeroOverlay";
import HeroScrollIndicator from "../components/HeroScrollIndicator";
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
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <HeroOverlay />
      <HeroScrollIndicator />
    </section>
  );
}
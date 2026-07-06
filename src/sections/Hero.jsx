import HeroBackground from "../components/hero/HeroBackground";
import HeroArchitecture from "../components/hero/HeroArchitecture";
import HeroContent from "../components/hero/HeroContent";
import HeroScrollIndicator from "../components/hero/HeroScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
        hero-section
        relative
        h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Digital Architecture */}
      <HeroArchitecture />

      {/* Typography */}
      <HeroContent />

      {/* Scroll Indicator */}
      <HeroScrollIndicator />
    </section>
  );
}
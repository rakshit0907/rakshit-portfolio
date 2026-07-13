import HeroBackground from "../components/hero/HeroBackground";
import HeroArchitecture from "../components/hero/HeroArchitecture";
import HeroLabels from "../components/hero/HeroLabels";
import HeroContent from "../components/hero/HeroContent";
import HeroScrollIndicator from "../components/hero/HeroScrollIndicator";

export default function Hero() {
  return (
    <section id="hero"
      className="
        hero-section
        relative
        h-screen
        overflow-hidden
      "
    >
      <HeroBackground />
      <HeroArchitecture />
    
      <HeroLabels />
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
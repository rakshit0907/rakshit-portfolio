import HeroScene from "../components/HeroScene";
import useHeroPin from "../hooks/useHeroPin";
import { motion } from "framer-motion";
import useHeroTextAnimation from "../hooks/useHeroTextAnimation";
export default function Hero() {
    useHeroPin();
    useHeroTextAnimation();
  return (
    <section className="hero-section relative h-screen">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Text Overlay */}
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="hero-content text-center">
    
    <motion.h1
      initial={{
        opacity: 0,
        y: 80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="text-7xl font-bold"
    >
      Rakshit Pandey
    </motion.h1>

    <motion.p
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      className="text-zinc-400 mt-4 text-xl"
    >
      FullStack Developer
    </motion.p>

  </div>
</div>
    </section>
  );
}
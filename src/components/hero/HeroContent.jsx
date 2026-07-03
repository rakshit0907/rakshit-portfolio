import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end pb-20">

      <div className="max-w-5xl mx-auto w-full px-10">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-tagline uppercase tracking-[0.5em] text-cyan-300 text-sm mb-4"
        >
          FULL STACK ENGINEER
          CRAFTING MODERN DIGITAL EXPERIENCES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-title text-white font-black leading-none"
          style={{
            fontSize: "clamp(4rem,10vw,9rem)"
          }}
        >
          RAKSHIT
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hero-title-gradient font-black leading-none bg-gradient-to-r from-violet-400 via-cyan-300 to-white bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(4rem,10vw,9rem)"
          }}
        >
          PANDEY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1.7 }}
          className="hero-description max-w-xl mt-8 text-zinc-300 leading-8 text-lg"
        >
          Building immersive digital experiences with React,
          Three.js, Node.js and AI —
          where engineering meets design.
        </motion.p>

      </div>

    </div>
  );
}
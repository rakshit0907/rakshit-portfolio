import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          backdrop-blur-xl
          bg-white/5
          border border-white/10
          rounded-3xl
          px-14
          py-10
          shadow-2xl
          text-center
        "
      >
        <p className="uppercase tracking-[0.45em] text-xs text-cyan-300 mb-3">
          Full Stack Developer
        </p>

        <h1 className="text-7xl font-black text-white">
          Rakshit
        </h1>

        <h1 className="text-7xl font-black text-violet-400">
          Pandey
        </h1>

        <p className="mt-6 text-zinc-300 max-w-xl leading-8">
          Building immersive web experiences using React,
          Three.js and modern web technologies.
        </p>
      </motion.div>
    </div>
  );
}
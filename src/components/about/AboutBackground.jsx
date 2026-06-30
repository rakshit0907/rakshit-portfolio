import { motion } from "framer-motion";

export default function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Glow 1 */}

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 40, -40],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-violet-600/10
          blur-[180px]
        "
      />

      {/* Glow 2 */}

      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [20, -20, 20],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
    </div>
  );
}
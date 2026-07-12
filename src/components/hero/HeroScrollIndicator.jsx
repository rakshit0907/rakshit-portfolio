import { motion, useReducedMotion } from "framer-motion";

export default function HeroScrollIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
          Scroll
        </span>

        <div className="relative w-px h-16 overflow-hidden bg-zinc-800">
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    y: ["-100%", "100%"],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }
            }
            className="absolute w-full h-6 bg-zinc-200"
          />
        </div>
      </div>
    </motion.div>
  );
}
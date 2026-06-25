import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <div
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
        text-zinc-500
        text-sm
        tracking-[0.3em]
        uppercase
        "
      >
        Scroll
      </motion.div>
    </div>
  );
}
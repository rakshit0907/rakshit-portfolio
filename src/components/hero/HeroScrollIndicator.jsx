import { motion, useReducedMotion } from "framer-motion";

export default function HeroScrollIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div /* ...unchanged... */>
      <div className="flex flex-col items-center gap-4">
        <span className="uppercase text-[10px] tracking-[0.45em] font-medium" style={{ color: "var(--text-muted)" }}>
          SCROLL
        </span>
        <div className="relative w-px h-20 overflow-hidden" style={{ background: "var(--border)" }}>
          <motion.div
            animate={reduceMotion ? { y: "0%" } : { y: ["-100%", "100%"] }}
            transition={reduceMotion ? {} : { duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-8"
            style={{ background: "var(--accent)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
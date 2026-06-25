import { motion } from "framer-motion";
import useScrollProgress from "../hooks/useScrollProgress";

export default function HeroOverlay() {
  const progress = useScrollProgress();

  const opacity = 1 - progress * 1.5;
  const translateY = progress * 200;

  return (
    <div
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      pointer-events-none
      "
    >
      <motion.div
        style={{
          opacity: Math.max(opacity, 0),
          y: translateY,
        }}
        className="text-center"
      >
        <h1
          className="
          text-7xl
          md:text-8xl
          font-bold
          tracking-tight
          "
        >
          Rakshit Pandey
        </h1>

        <p
          className="
          mt-4
          text-zinc-400
          text-xl
          "
        >
          Creative Developer
        </p>
      </motion.div>
    </div>
  );
}
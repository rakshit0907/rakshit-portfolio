import { motion } from "framer-motion";
import useScrollProgress from "../../hooks/useScrollProgress";

// Thin accent line at the very top that fills as you scroll.
export default function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] pointer-events-none"
      style={{ scaleX, background: "var(--accent)" }}
    />
  );
}

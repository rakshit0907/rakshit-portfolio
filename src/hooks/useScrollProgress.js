import { useScroll, useSpring } from "framer-motion";

// Returns a smoothed MotionValue (0 -> 1) for how far down the page you are.
// It updates outside React, so scrolling causes no re-renders
// (the old version called setState on every scroll event).
export default function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
}

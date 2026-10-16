import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 28, mass: 0.9 });
  const springY = useSpring(y, { stiffness: 180, damping: 28, mass: 0.9 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || reduceMotion) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true); // no-op after the first call
    };

    const over = (e) => {
      const interactive = e.target?.closest?.(
        "a,button,[role='button'],input,textarea,.cursor-hover"
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion || !visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x,
          y,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          background: "#ffffff",
        }}
      />

      {/* The ring animates scale (GPU) instead of width/height/margin (layout). */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border"
        style={{
          x: springX,
          y: springY,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          borderColor: "#6F93BF",
        }}
        animate={{
          scale: hovering ? 1.75 : 1,
          opacity: hovering ? 0.9 : 0.45,
          rotate: hovering ? 180 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

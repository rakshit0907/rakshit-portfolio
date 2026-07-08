import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const isTouch = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    // Bail entirely on touch devices — no real cursor to replace
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current || reduceMotion) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e) => {
      const interactive = e.target.closest("a, button, [role='button'], input, textarea");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, visible, reduceMotion]);

  if (isTouch.current || reduceMotion || !visible) return null;

  return (
    <>
      {/* Dot — snaps instantly to real cursor position */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full"
        style={{
          x, y,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          background: "var(--text)",
        }}
      />

      {/* Ring — lags slightly behind via spring, scales on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full border"
        style={{
          x: springX,
          y: springY,
          borderColor: "var(--accent)",
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          marginLeft: hovering ? -28 : -16,
          marginTop: hovering ? -28 : -16,
          opacity: hovering ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

// Spring-driven tilt. Returns a `style` object to spread onto a framer
// `motion.*` element. Previously this wrote element.style.transform directly,
// which fought with framer's own transform (whileInView) and CSS transitions.
export default function useTilt(max = 7) {
  const ref = useRef(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const config = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(rx, config);
  const rotateY = useSpring(ry, config);

  const handleMouseMove = (e) => {
    if (!ref.current || e.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };

  const handleMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
    style: { rotateX, rotateY, transformPerspective: 1200 },
  };
}

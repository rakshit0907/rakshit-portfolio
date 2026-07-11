import {
  useEffect,
  useRef,
  useState,
} from "react";

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

  const isTouch = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 28,
    mass: 0.9,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 28,
    mass: 0.9,
  });

  useEffect(() => {
    isTouch.current =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch.current || reduceMotion) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      if (!visible) setVisible(true);
    };

    const over = (e) => {
      const interactive = e.target.closest(
        "a,button,[role='button'],input,textarea,.cursor-hover"
      );

      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduceMotion, visible]);

  const shouldHide = 
      reduceMotion ||
      !visible;
    if (shouldHide) return null;  

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

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border"
        style={{
          x: springX,
          y: springY,
          borderColor: "#6F93BF",
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          marginLeft: hovering ? -28 : -16,
          marginTop: hovering ? -28 : -16,
          opacity: hovering ? 0.9 : 0.45,
          rotate: hovering ? 180 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
}
import { useRef, useLayoutEffect } from "react";
import { gsap } from "../../utils/gsap";

export default function Reveal({
  children,
  direction = "up",
  distance = 80,
  duration = 1,
  delay = 0,
  start = "top 85%",
  once = true,
}) {
  const ref = useRef(null);

  // useLayoutEffect so the hidden start state is applied before first paint
  // (with useEffect the content flashed visible, then vanished, then animated).
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const from = { opacity: 0 };
      switch (direction) {
        case "left": from.x = -distance; break;
        case "right": from.x = distance; break;
        case "down": from.y = -distance; break;
        default: from.y = distance;
      }

      gsap.fromTo(ref.current, from, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        // Remove inline transform afterwards so the element isn't left on its
        // own compositor layer forever (dozens of these add up on mobile).
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: ref.current, start, once },
      });
    }, ref);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, start, once]);

  return <div ref={ref}>{children}</div>;
}

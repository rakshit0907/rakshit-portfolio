import { useRef, useEffect } from "react";
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

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(ref.current, { opacity: 1, x: 0, y: 0 });
        return;
      }

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
        scrollTrigger: { trigger: ref.current, start, once },
      });
    });

    return () => ctx.revert();
  }, [direction, distance, duration, delay, start, once]);

  return <div ref={ref} className="will-change-transform">{children}</div>;
}
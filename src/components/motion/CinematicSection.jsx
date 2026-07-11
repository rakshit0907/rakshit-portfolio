import { useRef } from "react";
import { gsap, ScrollTrigger } from "../../utils/gsap";
import { gsap } from "../../utils/gsap";

export default function CinematicSection({
  children,
  className = "",
  y = 120,
  scale = 0.96,
  scrub = 1.2,
}) {
  const section = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      section.current,
      {
        opacity: 0,
        y,
        scale,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 82%",
          end: "top 35%",
          scrub,
        },
      }
    );
  });

  return (
    <section
      ref={section}
      className={className}
    >
      {children}
    </section>
  );
}
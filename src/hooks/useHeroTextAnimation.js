import { useLayoutEffect } from "react";
import { gsap } from "../utils/gsap";

// As the hero scrolls away, its text drifts up and fades out.
// Wrapped in gsap.context so the ScrollTrigger is cleaned up on route change
// (the original version never killed it).
export default function useHeroTextAnimation() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-content", {
        y: -120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
}

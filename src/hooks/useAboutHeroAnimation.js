import { useLayoutEffect } from "react";
import { gsap } from "../utils/gsap";

export default function useAboutHeroAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".about-kicker", {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })

      .from(".about-title", {
        opacity: 0,
        y: 80,
        duration: 0.9,
      }, "-=0.2")

      .from(".about-subtitle", {
        opacity: 0,
        y: 80,
        duration: 0.9,
      }, "-=0.5");

    });

    return () => ctx.revert();
  }, []);
}
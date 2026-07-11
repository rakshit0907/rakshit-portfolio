import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useAboutParallax() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray("[data-speed]")
        .forEach((element) => {
          const speed =
            parseFloat(element.dataset.speed) || 0.2;

          gsap.to(element, {
            yPercent: -speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
}
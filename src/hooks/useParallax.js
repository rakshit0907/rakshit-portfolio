import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useParallax() {
  useEffect(() => {
    gsap.to(".about-image", {
      y: -100,

      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
}
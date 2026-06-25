import { useEffect } from "react";
import { gsap } from "../utils/gsap";

export default function useHeroTextAnimation() {
  useEffect(() => {
    gsap.to(".hero-content", {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
  }, []);
}
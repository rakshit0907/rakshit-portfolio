import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useHeroPin() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1,
        markers: true,
      },
    });

    // We'll add animations here next
    tl.to(".hero-tagline", {
  opacity: 0,
  y: -40,
  ease: "power2.out",
})

.to(
  ".hero-title",
  {
    opacity: 0.25,
    y: -60,
    ease: "power2.out",
  },
  "<"
)

.to(
  ".hero-title-gradient",
  {
    opacity: 0,
    y: -80,
    ease: "power2.out",
  },
  "<"
)

.to(
  ".hero-description",
  {
    opacity: 0,
    y: -30,
    ease: "power2.out",
  },
  "<"
);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
}
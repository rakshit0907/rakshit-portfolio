import { useLayoutEffect } from "react";
import { gsap } from "../utils/gsap";

export default function useAboutAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
        },
      });

      tl.from(".about-label", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })

        .from(
          ".about-heading",
          {
            opacity: 0,
            y: 80,
            duration: 1,
          },
          "-=0.2"
        )

        .from(
          ".about-text",
          {
            opacity: 0,
            x: -40,
            duration: 0.8,
          },
          "-=0.4"
        )

        .from(
          ".about-card",
          {
            opacity: 0,
            x: 60,
            duration: 0.9,
          },
          "-=0.6"
        );
    });

    return () => ctx.revert();
  }, []);
}
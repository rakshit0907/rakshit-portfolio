import { useLayoutEffect } from "react";
import { gsap } from "../utils/gsap";

export default function useTransitionScene() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-scene",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });

    tl.from(".scene-1", {
      opacity: 0,
      y: 120,
      duration: 1,
    })

      .to(".scene-1", {
        opacity: 0,
        y: -120,
        duration: 1,
      })

      .from(
        ".scene-2",
        {
          opacity: 0,
          scale: 0.92,
          y: 120,
        },
        "-=0.2"
      )

      .to(".scene-2", {
        opacity: 0,
        scale: 1.08,
        duration: 1,
      })

      .from(
        ".scene-3",
        {
          opacity: 0,
          y: 120,
        },
        "-=0.2"
      );
  }, []);
}
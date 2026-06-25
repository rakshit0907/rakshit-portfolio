import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useHeroPin() {
  useEffect(() => {
    console.log("Creating Hero Pin");
    const trigger = ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
      markers: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);
}
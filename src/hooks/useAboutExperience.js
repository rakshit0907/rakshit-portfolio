import { useLayoutEffect } from "react";
import { gsap } from "../utils/gsap";

export default function useAboutExperience() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------
      // HERO
      // -----------------------------

      gsap.to(".about-bg-title", {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".about-title", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".about-subtitle", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // -----------------------------
      // Every section fades naturally
      // -----------------------------

      gsap.utils
        .toArray("section")
        .forEach((section) => {
          if (section.classList.contains("about-hero")) return;

          gsap.from(section, {
            opacity: 0,
            y: 120,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
        });

      // -----------------------------
      // Giant background words drift
      // -----------------------------

      gsap.utils
        .toArray(".about-bg-title, .create-bg-title")
        .forEach((title) => {
          gsap.to(title, {
            yPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: title,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
    });

    return () => ctx.revert();
  }, []);
}
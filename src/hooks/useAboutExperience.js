import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useAboutExperience() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------
      // Hero Title
      // -------------------------

      const hero = document.querySelector(".about-hero");
      const bgTitle = document.querySelector(".about-bg-title");
      const title = document.querySelector(".about-title");
      const subtitle = document.querySelector(".about-subtitle");

      if (hero && bgTitle) {
        gsap.to(bgTitle, {
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (hero && title) {
        gsap.to(title, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (hero && subtitle) {
        gsap.to(subtitle, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // -------------------------
      // Reveal every section
      // -------------------------

      gsap.utils.toArray("section").forEach((section) => {
        if (section.classList.contains("about-hero")) return;

        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // -------------------------
      // Background Titles
      // -------------------------

      gsap.utils
        .toArray(".about-bg-title, .create-bg-title")
        .forEach((item) => {
          gsap.to(item, {
            yPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: item,
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
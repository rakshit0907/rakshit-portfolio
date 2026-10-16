import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useAboutExperience() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------
      // Hero Title
      // -------------------------

      const hero = document.querySelector(".about-hero");
      const title = document.querySelector(".about-title");
      const subtitle = document.querySelector(".about-subtitle");

      // (.about-bg-title is handled once, in the "Background Titles" loop
      // below. It used to be animated here too, so two scrubbed tweens were
      // fighting over the same element's yPercent - a source of jitter.)

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
            once: true,
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

      // Refresh once fonts/images have settled so trigger positions are right.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });

    return () => ctx.revert();
  }, []);
}
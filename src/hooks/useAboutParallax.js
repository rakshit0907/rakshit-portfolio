import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

export default function useAboutParallax() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".about-bg-title", {
                yPercent: -35,
                ease: "none",
                scrollTrigger: {
                    trigger: ".about-hero",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
            gsap.to(".create-bg-title", {
                yPercent: -25,
                ease: "none",
                scrollTrigger: {
                    trigger: ".about-cta",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
        return () => ctx.revert();
    }, []);
}
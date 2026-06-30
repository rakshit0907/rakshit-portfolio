import { useEffect } from "react";
import { gsap } from "../utils/gsap";

export default function useJourneyAnimation() {
    useEffect(() => {
        gsap.to(".journey-line", {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".journey-section",
                start: "top 70%",
                end: "bottom 80%",
                scrub: true,
            },
        });
    }, []);
}
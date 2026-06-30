import { useRef, useEffect } from "react";
import { gsap } from "../../utils/gsap";

export default function Reveal({
    children,
    y = 80,
    delay = 0,
}) {
    const ref = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    once: true,
                },
            }
        );
    }, [delay, y]);
    return <div ref={ref}>{children}</div>;
}
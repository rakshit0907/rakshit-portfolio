import { useEffect, useState } from "react";
import { ScrollTrigger } from "../utils/gsap";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "+=200%",
      scrub: true,

      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => trigger.kill();
  }, []);

  return progress;
}
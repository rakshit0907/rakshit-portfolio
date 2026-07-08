import { useEffect, useState } from "react";
import { ScrollTrigger } from "../utils/gsap";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => trigger.kill();
  }, []);

  return progress;
}
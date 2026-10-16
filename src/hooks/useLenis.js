import { useEffect } from "react";
import { startLenis, stopLenis } from "../lib/lenis";

export default function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // People who ask for reduced motion get native scrolling.
    if (reduceMotion) return;

    startLenis();
    return stopLenis;
  }, []);
}

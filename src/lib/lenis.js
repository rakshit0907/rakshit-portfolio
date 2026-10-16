import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// One shared Lenis instance so route changes, hooks and GSAP all talk to the
// same scroller (instead of fighting each other with window.scrollTo).
let lenis = null;
let tick = null;

export function startLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    smoothWheel: true,
    duration: 1.2,
  });

  lenis.on("scroll", ScrollTrigger.update);

  // Keep a reference so the *same* function can be removed on cleanup.
  tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function stopLenis() {
  if (!lenis) return;
  gsap.ticker.remove(tick);
  lenis.destroy();
  lenis = null;
  tick = null;
}

export function getLenis() {
  return lenis;
}

export function scrollToTopInstant() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true });
  } else {
    window.scrollTo(0, 0);
  }
}

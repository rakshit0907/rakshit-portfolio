import { scrollToTopInstant } from "../../lib/lenis";

// Kept for backwards compatibility. Scrolling to top now happens in
// AppRoutes once the old page has finished animating out
// (see onExitComplete), so the page doesn't jump mid-transition.
export default function ScrollToTop() {
  return null;
}

export { scrollToTopInstant };

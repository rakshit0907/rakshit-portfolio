import { lazy, Suspense, useCallback, useState } from "react";
import { createPortal } from "react-dom";

import CustomCursor from "./components/common/CustomCursor";
import Loader from "./components/common/Loader";
import AppRoutes from "./routes/AppRoutes";
import useLenis from "./hooks/useLenis";

// The 3D scene (three.js + r3f + postprocessing) is the heaviest part of the
// bundle. Loading it lazily lets the loader paint immediately.
const Experience = lazy(() => import("./experience/Experience"));

export default function App() {
  useLenis();

  // `revealed`: the page mounts underneath the loader as it starts fading,
  // so the hero text animates in *during* the fade instead of after it.
  const [revealed, setRevealed] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const handleReveal = useCallback(() => setRevealed(true), []);
  const handleFinish = useCallback(() => setLoaderGone(true), []);

  return (
    <>
      {createPortal(
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </div>,
        document.body
      )}

      {revealed && (
        <div style={{ position: "relative", zIndex: 10 }}>
          <AppRoutes />
        </div>
      )}

      {!loaderGone && (
        <Loader onReveal={handleReveal} onFinish={handleFinish} />
      )}

      <CustomCursor />
    </>
  );
}

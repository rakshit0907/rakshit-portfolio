// App.jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import CustomCursor from "./components/common/CustomCursor";
import Loader from "./components/common/Loader";
import AppRoutes from "./routes/AppRoutes";
import Experience from "./experience/Experience";
import useLenis from "./hooks/useLenis";

export default function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {createPortal(
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
          <Experience />
        </div>,
        document.body
      )}

      {!loaded ? (
        <Loader onFinish={() => setLoaded(true)} />
      ) : (
        <div className="relative z-10">
          <AppRoutes />
        </div>
      )}
      <CustomCursor />
    </>
  );
}
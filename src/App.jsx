import { useState } from "react";
import CustomCursor from "./components/common/CustomCursor";
import Loader from "./components/common/Loader";
import AppRoutes from "./routes/AppRoutes";
import Experience from "./experience/Experience";
import useLenis from "./hooks/useLenis";
import PageGlow from "./components/common/PageGlow";
import NoiseOverlay from "./components/common/NoiseOverlay";
import GridOverlay from "./components/common/GridOverlay";
export default function App() {
  useLenis();

  const [loaded, setLoaded] =
    useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
        <Experience />
      </div>  
  
      {!loaded ? (
        <Loader
          onFinish={() =>
            setLoaded(true)
          }
        />
      ) : (
        <div className="relative z-10">
    
          <AppRoutes />
        </div>
        
      )}
      <PageGlow />
      <GridOverlay />
      <NoiseOverlay />
      <CustomCursor />
    </>
  );
}
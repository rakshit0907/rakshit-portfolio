import { useState } from "react";
import CustomCursor from "./components/common/CustomCursor";
import Loader from "./components/common/Loader";
import AppRoutes from "./routes/AppRoutes";

import useLenis from "./hooks/useLenis";

export default function App() {
  useLenis();

  const [loaded, setLoaded] =
    useState(false);

  return (
    <>
      {!loaded ? (
        <Loader
          onFinish={() =>
            setLoaded(true)
          }
        />
      ) : (
        <>
          <CustomCursor />
          <AppRoutes />
        </>  
        
      )}
    </>
  );
}
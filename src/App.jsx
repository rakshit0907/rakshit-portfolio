import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import useLenis from "./hooks/useLenis";
import Projects from "./sections/Projects";
export default function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <Loader
          onFinish={() => setLoaded(true)}
        />
      ) : (
        <>
        <Hero />
        <About />
        <Projects />
        </>
      )}
    </>
  );
}
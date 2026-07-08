import CameraRig from "../camera/CameraRig";
import Lights from "../lighting/Lights";

import Background from "../atmosphere/Background";
import FloatingGlow from "../atmosphere/FloatingGlow";
import GradientFog from "../atmosphere/GradientFog";

import Core from "../core/Core";
import Instrument from "../core/Instrument";
import useScrollProgress from "../../hooks/useScrollProgress";

export default function Scene() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <Lights />
      <Background />
      <GradientFog />
      <FloatingGlow />

      <CameraRig scrollProgress={scrollProgress}>
        <Core />
        <Instrument />
      </CameraRig>
    </>
  );
}
import CameraRig from "../camera/CameraRig";
import Lights from "../lighting/Lights";

import Background from "../atmosphere/Background";
import FloatingGlow from "../atmosphere/FloatingGlow";
import GradientFog from "../atmosphere/GradientFog";

import Workspace from "../workspace/Workspace";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <CameraRig />

      <Lights />

      <Background />

      <GradientFog />

      <FloatingGlow />

      <Workspace />
    </>
  );
}
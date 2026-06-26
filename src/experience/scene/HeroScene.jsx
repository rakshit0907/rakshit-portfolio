import { Canvas } from "@react-three/fiber";

import CameraRig from "./CameraRig";
import Lights from "./Lights";
import Environment from "./Environment";

import Particles from "../particles/Particles";
import EnergyCore from "../core/EnergyCore";

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 50,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
      }}
    >
      {/* Scene */}
      <CameraRig />

      {/* Lights */}
      <Lights />

      {/* Environment (HDRI/Fog later) */}
      <Environment />

      {/* Background Particles */}
      <Particles />

      {/* Main Hero Object */}
      <EnergyCore />
    </Canvas>
  );
}
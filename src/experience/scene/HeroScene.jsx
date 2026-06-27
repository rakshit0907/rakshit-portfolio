import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CameraRig from "./CameraRig";
import Lights from "./Lights";
import Environment from "./Environment";

import Particles from "../particles/Particles";
import { Reactor } from "../reactor";

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
      <Reactor />
      <EffectComposer>
        <Bloom
        intensity={1.6}
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
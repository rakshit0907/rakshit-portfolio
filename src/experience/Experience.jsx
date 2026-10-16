import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import Scene from "./scene/Scene";
import BackgroundParticles from "./background/BackgroundParticles";

export default function Experience() {
  // Starts at 1.5x. If the device can't hold its frame rate,
  // PerformanceMonitor drops to 1x automatically (and recovers if it can).
  const [maxDpr, setMaxDpr] = useState(1.5);

  return (
    <Canvas
      dpr={[1, maxDpr]}
      camera={{
        position: [0, 1.6, 9],
        fov: 42,
        near: 0.1,
        far: 100,
      }}
      gl={{
        // The EffectComposer does its own multisampling, so native MSAA
        // on the default framebuffer would just be paid for twice.
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#050505", 1);
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <PerformanceMonitor
        onDecline={() => setMaxDpr(1)}
        onIncline={() => setMaxDpr(1.5)}
      />
      <BackgroundParticles />
      <Scene />
    </Canvas>
  );
}

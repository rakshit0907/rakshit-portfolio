import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";

export default function Experience() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 35,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <Scene />
    </Canvas>
  );
}
import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";
import PostProcessing from "./PostProcessing";
export default function Experience() {
  return (
    <Canvas
      dpr={[1,2]}
      camera={{
        position: [0, 1.6, 9],
        fov: 42,
        near: 0.1,
        far: 100,
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
      <PostProcessing />
    </Canvas>
  );
}
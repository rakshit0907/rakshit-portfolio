import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";
import PostProcessing from "./postprocessing/PostProcessing";
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
      gl={{
        antialias: true,
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
      <Scene />
    <PostProcessing /> 
    </Canvas>
  );
}
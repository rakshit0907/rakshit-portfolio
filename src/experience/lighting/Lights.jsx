import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[6, 6, 4]}
        intensity={2}
        color="#9cc8ff"
      />

      <pointLight
        position={[-6, 4, 6]}
        intensity={4}
        color="#5E81AC"
      />

      <pointLight
        position={[4, -3, 5]}
        intensity={2}
        color="#6F93BF"
      />

      <Environment preset="city" />
    </>
  );
}
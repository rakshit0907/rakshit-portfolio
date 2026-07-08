import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function EnergyPulse() {
  const mesh = useRef();

  useFrame((state) => {
    const s = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.08;

    mesh.current.scale.setScalar(s);
    mesh.current.material.opacity =
      0.08 + Math.sin(state.clock.elapsedTime * 2.4) * 0.03;
  });

  return (
    <mesh
      ref={mesh}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <ringGeometry args={[2.8, 3.05, 128]} />
      <meshBasicMaterial
        color="#6F93BF"
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}
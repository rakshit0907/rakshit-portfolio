import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function EnergyPulse() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const s =
      1 +
      Math.sin(state.clock.elapsedTime * 2.8) *
        0.08;

    ref.current.scale.setScalar(s);

    ref.current.material.opacity =
      0.08 +
      Math.sin(state.clock.elapsedTime * 2.8) *
        0.03;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.45, 64, 64]} />
      <meshBasicMaterial
        color="#6F93BF"
        transparent
        wireframe
        opacity={0.08}
      />
    </mesh>
  );
}
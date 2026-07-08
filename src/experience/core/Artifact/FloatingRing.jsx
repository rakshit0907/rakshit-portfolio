import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FloatingRing() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.002;

    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.25, 0.04, 64, 256]} />
      <meshStandardMaterial
        color="#7aa5ff"
        emissive="#6F93BF"
        emissiveIntensity={2}
        metalness={1}
        roughness={0.15}
      />
    </mesh>
  );
}
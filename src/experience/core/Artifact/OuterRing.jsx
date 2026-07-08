import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function OuterRing() {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.012;
    ref.current.rotation.x -= 0.004;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.65, 0.03, 48, 240]} />
      <meshStandardMaterial
        color="#6F93BF"
        emissive="#6F93BF"
        emissiveIntensity={5}
        metalness={1}
        roughness={0.05}
      />
    </mesh>
  );
}
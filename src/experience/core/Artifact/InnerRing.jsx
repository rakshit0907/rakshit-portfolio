import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function InnerRing() {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.z -= 0.022;
    ref.current.rotation.x += 0.009;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.82, 0.025, 48, 180]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1.2}
        metalness={1}
        roughness={0.15}
      />
    </mesh>
  );
}
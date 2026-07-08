import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ScanRings() {
  const rings = useRef();

  useFrame((state) => {
    rings.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.8;

    rings.current.rotation.y += 0.001;
  });

  return (
    <group ref={rings}>
      {[2.6, 3.3, 4.1].map((r) => (
        <mesh key={r} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.01, 12, 180]} />
          <meshBasicMaterial
            color="#6F93BF"
            transparent
            opacity={0.18}
          />
        </mesh>
      ))}
    </group>
  );
}
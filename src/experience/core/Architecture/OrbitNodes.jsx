import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function OrbitNodes() {
  const group = useRef();

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y += 0.0008;
  });

  const radius = 3.15;

  return (
    <group ref={group}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.28,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.032, 16, 16]} />
            <meshBasicMaterial
              color="#b8d7ff"
            />
          </mesh>
        );
      })}
    </group>
  );
}
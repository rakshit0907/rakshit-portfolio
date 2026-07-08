import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function OrbitNodes() {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.002;
  });

  return (
    <group ref={group}>
      {[...Array(14)].map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const radius = 3.5;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(i) * 0.6,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial
              color="#8b5cf6"
            />
          </mesh>
        );
      })}
    </group>
  );
}
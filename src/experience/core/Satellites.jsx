import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Satellites() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y = t * 0.18;

    group.current.children.forEach((mesh, i) => {
      mesh.position.y =
        Math.sin(t * 2 + i) * 0.12;

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.008;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 0.8,
              Math.sin(angle) * radius,
            ]}
          >
            <octahedronGeometry args={[0.14]} />

            <meshStandardMaterial
              color={i % 2 === 0 ? "#8B5CF6" : "#22D3EE"}
              metalness={1}
              roughness={0.08}
            />
          </mesh>
        );
      })}
    </group>
  );
}
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={group}>
      {Array.from({ length: 150 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
      ))}
    </group>
  );
}
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SegmentRing({
  radius = 1.8,
  segments = 18,
  color = "#8B5CF6",
  speed = 0.2,
  rotation = [0, 0, 0],
}) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      rotation[1] + state.clock.elapsedTime * speed;
  });

  return (
    <group ref={group} rotation={rotation}>
      {Array.from({ length: segments }).map((_, i) => {
        const angle = (i / segments) * Math.PI * 2;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              0,
              Math.sin(angle) * radius,
            ]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.18, 0.05, 0.08]} />

            <meshStandardMaterial
              color={color}
              metalness={1}
              roughness={0.18}
            />
          </mesh>
        );
      })}
    </group>
  );
}
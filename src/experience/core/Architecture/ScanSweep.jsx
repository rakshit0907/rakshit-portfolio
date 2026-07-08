import { useFrame } from "@react-three/fiber";
import { AdditiveBlending } from "three";
import { useRef } from "react";

export default function ScanSweep() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.elapsedTime;

    ref.current.position.y = -2 + ((t * 0.8) % 4);

    ref.current.material.opacity =
      0.08 + Math.sin(t * 8) * 0.03;
  });

  return (
    <mesh
      ref={ref}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <ringGeometry args={[0.2, 5.5, 128]} />

      <meshBasicMaterial
        color="#7DA2FF"
        transparent
        opacity={0.08}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
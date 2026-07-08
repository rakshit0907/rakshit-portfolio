import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function BackgroundParticles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(3500 * 3);

    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 45;
      arr[i + 1] = (Math.random() - 0.5) * 30;
      arr[i + 2] = (Math.random() - 0.5) * 30;
    }

    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.04}
        color="#7aa7ff"
        opacity={0.25}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
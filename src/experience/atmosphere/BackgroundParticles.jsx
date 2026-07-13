import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export default function BackgroundParticles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(1800 * 3);

    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 55;
      arr[i + 1] = (Math.random() - 0.5) * 34;
      arr[i + 2] = (Math.random() - 0.5) * 40;
    }

    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.015}
        color="#7ea4dc"
        opacity={0.11}
        depthWrite={false}
      />
    </Points>
  );
}
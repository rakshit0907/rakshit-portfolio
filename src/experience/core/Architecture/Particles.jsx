import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export default function Particles() {
  const positions = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 900; i++) {
      arr.push(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 14
      );
    }

    return new Float32Array(arr);
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}
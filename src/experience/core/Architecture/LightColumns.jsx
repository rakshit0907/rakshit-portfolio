import { useMemo } from "react";

export default function LightColumns() {
  const columns = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        x: (i - 5) * 2.2,
        z: -3 + Math.sin(i) * 4,
        h: 5 + Math.random() * 4,
      })),
    []
  );

  return (
    <>
      {columns.map((c, i) => (
        <mesh
          key={i}
          position={[c.x, c.h / 2 - 2, c.z]}
        >
          <cylinderGeometry args={[0.015, 0.015, c.h, 8]} />
          <meshBasicMaterial
            color="#6F93BF"
            transparent
            opacity={0.18}
          />
        </mesh>
      ))}
    </>
  );
}
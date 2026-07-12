import { Line } from "@react-three/drei";
import { useMemo } from "react";

export default function ArchitecturalFrame() {
  const size = 7;

  const grid = useMemo(() => {
    const lines = [];

    for (let i = -size; i <= size; i++) {
      lines.push([
        [-size, i, -2],
        [size, i, -2],
      ]);

      lines.push([
        [i, -size, -2],
        [i, size, -2],
      ]);
    }

    return lines;
  }, []);

  return (
    <group position={[0.7, 0, -2]}>
      {grid.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#5B7BA8"
          lineWidth={0.4}
          transparent
          opacity={0.06}
        />
      ))}
    </group>
  );
}
import { Line } from "@react-three/drei";

const points = [
  [-2.2, 0, 0],
  [-1.2, 0.4, 0.4],
  [0, 0, 0],
  [1.2, -0.4, -0.3],
  [2.2, 0, 0],
];

export default function EnergyLines() {
  return (
    <>
      <Line
        points={points}
        color="#6F93BF"
        lineWidth={1.4}
        transparent
        opacity={0.35}
      />

      <Line
        points={points.map(([x, y, z]) => [-x, y, z])}
        color="#8b5cf6"
        lineWidth={1}
        transparent
        opacity={0.25}
      />

      <Line
        points={points.map(([x, y, z]) => [z, x, y])}
        color="white"
        lineWidth={0.8}
        transparent
        opacity={0.15}
      />
    </>
  );
}
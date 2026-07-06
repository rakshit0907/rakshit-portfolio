import { Line } from "@react-three/drei";

export default function CoreConnections() {
  const lines = [
    [[-2.4, 0, 0], [2.4, 0, 0]],
    [[0, -2.4, 0], [0, 2.4, 0]],
    [[0, 0, -2.4], [0, 0, 2.4]],

    [[-2.4, -2.4, -2.4], [2.4, 2.4, 2.4]],
    [[2.4, -2.4, -2.4], [-2.4, 2.4, 2.4]],
    [[-2.4, 2.4, -2.4], [2.4, -2.4, 2.4]],
    [[2.4, 2.4, -2.4], [-2.4, -2.4, 2.4]],
  ];

  return (
    <group>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#7f7f7f"
          lineWidth={0.7}
        />
      ))}
    </group>
  );
}
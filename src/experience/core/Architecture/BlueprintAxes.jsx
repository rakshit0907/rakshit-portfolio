import { Line } from "@react-three/drei";

export default function BlueprintAxes() {
  return (
    <>
      <Line
        points={[
          [-8, 0, 0],
          [8, 0, 0],
        ]}
        color="#5E81AC"
        transparent
        opacity={0.12}
      />

      <Line
        points={[
          [0, 0, -8],
          [0, 0, 8],
        ]}
        color="#5E81AC"
        transparent
        opacity={0.12}
      />

      <Line
        points={[
          [0, -3, 0],
          [0, 3, 0],
        ]}
        color="#8b5cf6"
        transparent
        opacity={0.08}
      />
    </>
  );
}
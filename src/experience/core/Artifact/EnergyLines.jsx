import { Line } from "@react-three/drei";

export default function EnergyLines() {
  return (
    <>
      <Line
        points={[
          [-1.6, 0, 0],
          [1.6, 0, 0],
        ]}
        color="#6F93BF"
        lineWidth={1.2}
      />

      <Line
        points={[
          [0, -1.6, 0],
          [0, 1.6, 0],
        ]}
        color="#6F93BF"
        lineWidth={1.2}
      />

      <Line
        points={[
          [0, 0, -1.6],
          [0, 0, 1.6],
        ]}
        color="#9CC8FF"
        lineWidth={2}
      />
    </>
  );
}
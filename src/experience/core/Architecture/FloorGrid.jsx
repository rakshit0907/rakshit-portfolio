import { Line } from "@react-three/drei";

export default function FloorGrid() {
  const lines = [];

  const size = 40;
  const step = 2;

  // Horizontal
  for (let z = -20; z <= 20; z += step) {
    lines.push(
      <Line
        key={`h-${z}`}
        points={[
          [-size, -8, z],
          [size, -8, z],
        ]}
        color="#9fb7cf"
        transparent
        opacity={0.045}
        lineWidth={0.45}
      />
    );
  }

  // Vertical
  for (let x = -size; x <= size; x += step) {
    lines.push(
      <Line
        key={`v-${x}`}
        points={[
          [x, -8, -20],
          [x, -8, 20],
        ]}
        color="#9fb7cf"
        transparent
        opacity={0.045}
        lineWidth={0.45}
      />
    );
  }

  return <group>{lines}</group>;
}
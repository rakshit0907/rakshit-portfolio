import { Line } from "@react-three/drei";

export default function MechanicalCage() {
  const r = 2.35;
  const c = 0.45;

  return (
    <group>

      {/* TOP */}

      <Line
        points={[
          [-r + c, r, 0],
          [r - c, r, 0],
        ]}
        color="#7E9BC2"
        lineWidth={1}
      />

      {/* BOTTOM */}

      <Line
        points={[
          [-r + c, -r, 0],
          [r - c, -r, 0],
        ]}
        color="#7E9BC2"
        lineWidth={1}
      />

      {/* LEFT */}

      <Line
        points={[
          [-r, r - c, 0],
          [-r, -r + c, 0],
        ]}
        color="#7E9BC2"
        lineWidth={1}
      />

      {/* RIGHT */}

      <Line
        points={[
          [r, r - c, 0],
          [r, -r + c, 0],
        ]}
        color="#7E9BC2"
        lineWidth={1}
      />

      {/* Corner Cuts */}

      <Line
        points={[
          [-r + c, r, 0],
          [-r, r - c, 0],
        ]}
        color="#A9C9FF"
      />

      <Line
        points={[
          [r - c, r, 0],
          [r, r - c, 0],
        ]}
        color="#A9C9FF"
      />

      <Line
        points={[
          [-r + c, -r, 0],
          [-r, -r + c, 0],
        ]}
        color="#A9C9FF"
      />

      <Line
        points={[
          [r - c, -r, 0],
          [r, -r + c, 0],
        ]}
        color="#A9C9FF"
      />

    </group>
  );
}
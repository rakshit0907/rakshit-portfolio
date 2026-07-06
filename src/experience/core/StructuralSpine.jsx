import { Line } from "@react-three/drei";

export default function StructuralSpine() {
  return (
    <>
      <Line
        points={[
          [0, 0, -12],
          [0, 0, 5],
        ]}
        color="#d8d8d8"
        transparent
        opacity={0.35}
        lineWidth={1.2}
      />
    </>
  );
}
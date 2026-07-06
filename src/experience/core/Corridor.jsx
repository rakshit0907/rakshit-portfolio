import { Line } from "@react-three/drei";

const frames = [
  { size: 10, z: -12 },
  { size: 8, z: -8 },
  { size: 6, z: -4 },
  { size: 4.5, z: 0 },
  { size: 3, z: 4 },
];

export default function Corridor() {
  return (
    <>
      {frames.map((frame, index) => {
        const s = frame.size;

        const points = [
          [-s, -s, frame.z],
          [ s, -s, frame.z],
          [ s,  s, frame.z],
          [-s,  s, frame.z],
          [-s, -s, frame.z],
        ];

        return (
          <Line
            key={index}
            points={points}
            color="#d8d8d8"
            lineWidth={0.6}
            transparent
            opacity={0.15}
          />
        );
      })}
    </>
  );
}
import { Line } from "@react-three/drei";

const frames = [
  { size: 8, z: -5 },
  { size: 5.5, z: -1 },
  { size: 3, z: 2.5 },
];

export default function CoreFrames() {
  return (
    <>
      {frames.map((frame, i) => {
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
            key={i}
            points={points}
            color="#7ea9d9"
            lineWidth={0.6}
            transparent
            opacity={0.22}
          />
        );
      })}
    </>
  );
}
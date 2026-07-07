import { Line } from "@react-three/drei";

const frames = [
  {
    size: 8,
    position: [7, 2, -10],
  },
  {
    size: 6,
    position: [9, -1, -4],
  },
  {
    size: 4,
    position: [5, 3, 2],
  },
];

export default function FloatingFrames() {
  return (
    <>
      {frames.map((frame, i) => {
        const s = frame.size / 2;
        const [x, y, z] = frame.position;

        return (
          <group key={i} position={[x, y, z]}>

            {/* Top */}
            <Line
              points={[
                [-s, s, 0],
                [s, s, 0],
              ]}
              color="#d6dde6"
              transparent
              opacity={0.22}
              lineWidth={0.6}
            />

            {/* Left */}
            <Line
              points={[
                [-s, -s, 0],
                [-s, s, 0],
              ]}
              color="#d6dde6"
              transparent
              opacity={0.22}
              lineWidth={0.6}
            />

            {/* Small Bottom */}
            <Line
              points={[
                [-s, -s, 0],
                [-s * 0.25, -s, 0],
              ]}
              color="#d6dde6"
              transparent
              opacity={0.22}
              lineWidth={0.6}
            />

            {/* Small Right */}
            <Line
              points={[
                [s, s * 0.2, 0],
                [s, s, 0],
              ]}
              color="#d6dde6"
              transparent
              opacity={0.22}
              lineWidth={0.6}
            />

          </group>
        );
      })}
    </>
  );
}
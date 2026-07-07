import { Box } from "@react-three/drei";

const planes = [
  {
    position: [8, 5, -8],
    scale: [8, 0.03, 5],
  },
  {
    position: [10, -4, -2],
    scale: [10, 0.03, 4],
  },
  {
    position: [6, 2, 4],
    scale: [6, 0.03, 3],
  },
];

export default function FloatingPlanes() {
  return (
    <>
      {planes.map((plane, i) => (
        <Box
          key={i}
          position={plane.position}
          args={plane.scale}
        >
          <meshBasicMaterial
            color="#9bb7d1"
            transparent
            opacity={0.05}
          />
        </Box>
      ))}
    </>
  );
}
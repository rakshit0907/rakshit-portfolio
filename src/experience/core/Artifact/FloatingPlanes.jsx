import { Float } from "@react-three/drei";

export default function FloatingPlanes() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.15}
          floatIntensity={0.8}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4,
            ]}
          >
            <planeGeometry args={[0.25, 0.12]} />

            <meshBasicMaterial
              color="#9CC8FF"
              transparent
              opacity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
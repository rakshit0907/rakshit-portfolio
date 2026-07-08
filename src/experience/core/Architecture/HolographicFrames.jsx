import { Float } from "@react-three/drei";

export default function HolographicFrames() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.15}
          rotationIntensity={0.15}
          floatIntensity={0.2}
        >
          <mesh
            position={[
              (i - 2.5) * 1.7,
              0.4 + (i % 2) * 0.7,
              -2.5 - i * 0.6,
            ]}
            rotation={[0.3, i * 0.35, 0]}
          >
            <boxGeometry args={[1.4, 0.8, 0.02]} />
            <meshBasicMaterial
              color="#6F93BF"
              transparent
              opacity={0.12}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
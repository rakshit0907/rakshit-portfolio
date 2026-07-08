import { Float } from "@react-three/drei";

export default function OrbitNodes() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.1}
          floatIntensity={0.5}
          rotationIntensity={1}
        >
          <mesh
            position={[
              Math.cos((i / 10) * Math.PI * 2) * 2,
              (Math.random() - 0.5) * 1.2,
              Math.sin((i / 10) * Math.PI * 2) * 2,
            ]}
          >
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshStandardMaterial
              color="#9CC8FF"
              emissive="#6F93BF"
              emissiveIntensity={6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
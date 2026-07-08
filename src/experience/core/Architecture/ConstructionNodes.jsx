import { Float } from "@react-three/drei";

export default function ConstructionNodes() {
  return (
    <>
      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const radius = 5;

        return (
          <Float
            key={i}
            speed={0.8}
            floatIntensity={0.15}
            rotationIntensity={0.1}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                (i % 6) * 0.45 - 1,
                Math.sin(angle) * radius,
              ]}
            >
              <octahedronGeometry args={[0.06]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive="#6F93BF"
                emissiveIntensity={1}
              />
            </mesh>
          </Float>
        );
      })}
    </>
  );
}
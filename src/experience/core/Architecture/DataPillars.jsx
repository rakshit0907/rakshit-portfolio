import { Float } from "@react-three/drei";

export default function DataPillars() {
  return (
    <>
      {[...Array(14)].map((_, i) => (
        <Float
          key={i}
          speed={0.6}
          floatIntensity={0.15}
        >
          <mesh
            position={[
              Math.cos((i / 14) * Math.PI * 2) * 7,
              0,
              Math.sin((i / 14) * Math.PI * 2) * 7,
            ]}
          >
            <cylinderGeometry
              args={[0.04, 0.04, 3.5, 12]}
            />

            <meshBasicMaterial
              color="#5E81AC"
              transparent
              opacity={0.12}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
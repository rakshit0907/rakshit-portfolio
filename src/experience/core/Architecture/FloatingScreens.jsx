import { Float } from "@react-three/drei";

export default function FloatingScreens() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <Float
          key={i}
          speed={0.8 + i * 0.08}
          floatIntensity={0.3}
          rotationIntensity={0.18}
        >
          <mesh
            position={[
              Math.cos(i) * 5,
              Math.sin(i * 0.7) * 2,
              Math.sin(i) * 5,
            ]}
            rotation={[0, i * 0.6, 0]}
          >
            <planeGeometry args={[1.4, 0.85]} />

            <meshBasicMaterial
              color="#5E81AC"
              transparent
              opacity={0.09}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
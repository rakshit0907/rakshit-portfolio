import { Float } from "@react-three/drei";

export default function FloatingGlow() {
  const glows = Array.from({ length: 18 }, (_, i) => ({
    key: i,
    position: [
      (Math.random() - 0.5) * 24,
      (Math.random() - 0.5) * 16,
      -Math.random() * 18,
    ],
    scale: Math.random() * 1.8 + 0.5,
    color:
      Math.random() > 0.5
        ? "#6F93BF"
        : "#5E81AC",
  }));

  return (
    <>
      {glows.map((g) => (
        <Float
          key={g.key}
          speed={0.4 + Math.random()}
          rotationIntensity={0}
          floatIntensity={0.5}
        >
          <mesh position={g.position} scale={g.scale}>
            <sphereGeometry args={[0.18, 20, 20]} />
            <meshBasicMaterial
              color={g.color}
              transparent
              opacity={0.18}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
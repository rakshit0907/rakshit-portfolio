import { Float } from "@react-three/drei";

export default function FloatingPanels() {
  const panels = [...Array(8)];

  return (
    <>
      {panels.map((_, i) => {
        const angle = (i / panels.length) * Math.PI * 2;
        const radius = 2.2;

        return (
          <Float
            key={i}
            speed={1 + i * 0.08}
            rotationIntensity={0.3}
            floatIntensity={0.25}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                (i % 2 ? 0.5 : -0.5),
                Math.sin(angle) * radius,
              ]}
              rotation={[
                0,
                angle,
                Math.PI / 12,
              ]}
            >
              <boxGeometry args={[0.35, 0.7, 0.05]} />
              <meshStandardMaterial
                color="#121212"
                metalness={1}
                roughness={0.2}
                emissive="#6F93BF"
                emissiveIntensity={0.35}
              />
            </mesh>
          </Float>
        );
      })}
    </>
  );
}
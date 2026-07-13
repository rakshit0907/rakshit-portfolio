import { Float } from "@react-three/drei";

export default function OrbitNodes() {
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;

    return {
      x: Math.cos(angle) * 2.15,
      y: Math.sin(angle * 2) * 0.25,
      z: Math.sin(angle) * 2.15,
      scale: i % 3 === 0 ? 0.06 : 0.04,
      speed: 1 + i * 0.08,
    };
  });

  return (
    <>
      {nodes.map((node, i) => (
        <Float
          key={i}
          speed={node.speed}
          rotationIntensity={0.4}
          floatIntensity={0.45}
        >
          <mesh
            position={[node.x, node.y, node.z]}
            scale={node.scale}
          >
            <sphereGeometry args={[1, 24, 24]} />

            <meshStandardMaterial
              color="#D9EEFF"
              emissive="#8CC8FF"
              emissiveIntensity={4}
              roughness={0.15}
              metalness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
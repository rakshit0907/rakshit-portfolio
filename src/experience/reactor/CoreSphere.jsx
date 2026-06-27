import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function CoreSphere() {
  const core = useRef();

  useFrame((state) => {
    if (!core.current) return;

    const t = state.clock.elapsedTime;

    // Gentle breathing animation
    const scale = 1 + Math.sin(t * 2) * 0.04;

    core.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={core}>
      {/* Main Core */}
      <mesh>
        <sphereGeometry args={[0.42, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#8B5CF6"
          emissiveIntensity={15}
          metalness={1}
          roughness={0.05}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh scale={0.65}>
        <sphereGeometry args={[0.42, 64, 64]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={25}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
// experience/core/Instrument.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Torus, Sphere } from "@react-three/drei";

export default function Instrument() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const core = useRef();

  useFrame((state, delta) => {
    // Each ring spins at its own slow speed and axis — reads as one precise mechanism, not a spinning logo
    if (ring1.current) ring1.current.rotation.z += delta * 0.12;
    if (ring2.current) ring2.current.rotation.x += delta * 0.08;
    if (ring3.current) ring3.current.rotation.y += delta * 0.1;
    if (core.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.3}>
      <group position={[2.4, 0.4, -1]} rotation={[0.4, 0.6, 0.1]}>

        {/* Outer ring — structural, matte */}
        <Torus ref={ring1} args={[1.6, 0.04, 16, 100]}>
          <meshStandardMaterial color="#3a4552" metalness={0.7} roughness={0.35} />
        </Torus>

        {/* Middle ring — slightly emissive, the accent */}
        <Torus ref={ring2} args={[1.15, 0.05, 16, 100]} rotation={[Math.PI / 2.3, 0, 0]}>
          <meshStandardMaterial
            color="#5E81AC"
            emissive="#5E81AC"
            emissiveIntensity={0.6}
            metalness={0.6}
            roughness={0.25}
          />
        </Torus>

        {/* Inner ring — thin, fast, precise */}
        <Torus ref={ring3} args={[0.75, 0.02, 16, 100]} rotation={[0, Math.PI / 3, 0]}>
          <meshStandardMaterial color="#9fb7cf" metalness={0.8} roughness={0.2} />
        </Torus>

        {/* Glowing core */}
        <Sphere ref={core} args={[0.22, 32, 32]}>
          <meshStandardMaterial
            color="#5E81AC"
            emissive="#6F93BF"
            emissiveIntensity={1.4}
            toneMapped={false}
          />
        </Sphere>

        <pointLight color="#5E81AC" intensity={2.5} distance={4} decay={2} />
      </group>
    </Float>
  );
}
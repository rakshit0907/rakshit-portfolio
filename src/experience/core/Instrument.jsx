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

        <Torus ref={ring1} args={[1.6, 0.04, 16, 100]}>
          <meshStandardMaterial color="#8fa5bd" metalness={0.3} roughness={0.4} emissive="#3a4552" emissiveIntensity={0.3} />
        </Torus>

        <Torus ref={ring2} args={[1.15, 0.05, 16, 100]} rotation={[Math.PI / 2.3, 0, 0]}>
          <meshStandardMaterial color="#5E81AC" emissive="#5E81AC" emissiveIntensity={1.2} metalness={0.3} roughness={0.25} />
        </Torus>

        <Torus ref={ring3} args={[0.75, 0.02, 16, 100]} rotation={[0, Math.PI / 3, 0]}>
          <meshStandardMaterial color="#9fb7cf" metalness={0.3} roughness={0.2} emissive="#9fb7cf" emissiveIntensity={0.4} />
        </Torus>

        <Sphere ref={core} args={[0.22, 32, 32]}>
          <meshStandardMaterial color="#5E81AC" emissive="#6F93BF" emissiveIntensity={1.4} toneMapped={false} />
        </Sphere>

        <pointLight color="#5E81AC" intensity={2.5} distance={4} decay={2} />
      </group>
    </Float>
  );
}
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Core() {
  const nucleus = useRef();
  const glow = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    const pulse = 1 + Math.sin(t * 1.8) * 0.08;

    if (nucleus.current) {
      nucleus.current.scale.setScalar(pulse);
      nucleus.current.rotation.y += 0.01;
    }

    if (glow.current) {
      glow.current.scale.setScalar(pulse * 1.4);
    }
  });

  return (
    <>
      {/* Soft Outer Glow */}

      <mesh ref={glow}>
        <sphereGeometry args={[0.16, 32, 32]} />

        <meshBasicMaterial
          color="#ffe7b0"
          transparent
          opacity={0.08}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Bright Core */}

      <mesh ref={nucleus}>
        <sphereGeometry args={[0.075, 48, 48]} />

        <meshStandardMaterial
          color="#fff8ef"
          emissive="#ffe7c2"
          emissiveIntensity={3}
          metalness={0}
          roughness={0}
          toneMapped={false}
        />
      </mesh>

      {/* Tiny Inner Core */}

      <mesh>
        <sphereGeometry args={[0.025, 32, 32]} />

        <meshBasicMaterial
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>
    </>
  );
}
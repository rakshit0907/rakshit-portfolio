import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function EnergyCore() {
  const reactor = useRef();
  const halo = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    const pulse = 1 + Math.sin(t * 2) * 0.08;

    if (reactor.current) {
      reactor.current.scale.setScalar(pulse);
      reactor.current.rotation.y += 0.01;
    }

    if (halo.current) {
      halo.current.rotation.z -= 0.003;
      halo.current.scale.setScalar(1.1 + Math.sin(t * 2) * 0.03);
    }
  });

  return (
    <group>

      {/* Outer Glow */}

      <mesh ref={halo}>
        <sphereGeometry args={[0.16, 48, 48]} />

        <meshBasicMaterial
          color="#ffe8b5"
          transparent
          opacity={0.08}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Metallic Reactor */}

      <mesh ref={reactor}>
        <sphereGeometry args={[0.085, 48, 48]} />

        <meshStandardMaterial
          color="#fafafa"
          emissive="#ffe3a1"
          emissiveIntensity={2.5}
          metalness={0.15}
          roughness={0.05}
        />
      </mesh>

      {/* Bright Core */}

      <mesh>
        <sphereGeometry args={[0.025, 32, 32]} />

        <meshBasicMaterial
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>

      {/* Energy Ring */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.11, 0.004, 12, 120]} />

        <meshBasicMaterial
          color="#ffe2a2"
          transparent
          opacity={0.55}
          toneMapped={false}
        />
      </mesh>

    </group>
  );
}
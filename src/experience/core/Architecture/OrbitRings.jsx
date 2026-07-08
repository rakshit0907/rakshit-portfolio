import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function OrbitRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame(() => {
    ring1.current.rotation.z += 0.001;
    ring1.current.rotation.y += 0.0005;

    ring2.current.rotation.x -= 0.0014;
    ring2.current.rotation.z += 0.0008;

    ring3.current.rotation.y += 0.0016;
  });

  return (
    <>
      <mesh ref={ring1} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[2.2, 0.025, 32, 220]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.8}
        />
      </mesh>

      <mesh ref={ring2} rotation={[0, 1.4, 0]}>
        <torusGeometry args={[2.65, 0.02, 32, 220]} />
        <meshStandardMaterial
          color="#5E81AC"
          emissive="#5E81AC"
          emissiveIntensity={1.4}
        />
      </mesh>

      <mesh ref={ring3} rotation={[0.6, 0.5, 1]}>
        <torusGeometry args={[3.05, 0.015, 32, 220]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.25}
          transparent
          opacity={0.4}
        />
      </mesh>
    </>
  );
}
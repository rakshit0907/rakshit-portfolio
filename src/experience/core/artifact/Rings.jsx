import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Rings() {
  const outer = useRef();
  const middle = useRef();
  const inner = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (outer.current) {
      outer.current.rotation.z += delta * 0.10;
      outer.current.rotation.x = Math.sin(t * 0.45) * 0.18;
    }

    if (middle.current) {
      middle.current.rotation.y -= delta * 0.07;
      middle.current.rotation.z = Math.cos(t * 0.35) * 0.12;
    }

    if (inner.current) {
      inner.current.rotation.x += delta * 0.18;
      inner.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      {/* Primary Orbit */}

      <group ref={outer} rotation={[Math.PI / 2, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[1.05, 0.012, 24, 240]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.06}
            emissive="#ffffff"
            emissiveIntensity={0.05}
          />
        </mesh>
      </group>

      {/* Secondary Orbit */}

      <group ref={middle} rotation={[0, Math.PI / 2, 0.35]}>
        <mesh>
          <torusGeometry args={[0.78, 0.009, 20, 220]} />
          <meshStandardMaterial
            color="#d9bf8f"
            metalness={1}
            roughness={0.12}
            emissive="#d9bf8f"
            emissiveIntensity={0.08}
          />
        </mesh>
      </group>

      {/* Inner Orbit */}

      <group ref={inner} rotation={[0.8, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[0.48, 0.006, 18, 180]} />
          <meshStandardMaterial
            color="#777777"
            metalness={1}
            roughness={0.15}
          />
        </mesh>
      </group>
    </>
  );
}
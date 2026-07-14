import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Frame() {
  const frame = useRef();

  useFrame((state) => {
    if (!frame.current) return;

    frame.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
  });

  return (
    <group ref={frame}>

      {/* Front Ring */}

      <mesh position={[0, 0, 0.22]}>
        <torusGeometry args={[0.92, 0.028, 32, 220]} />
        <meshStandardMaterial
          color="#8e8e8e"
          metalness={1}
          roughness={0.12}
        />
      </mesh>

      {/* Rear Ring */}

      <mesh position={[0, 0, -0.22]}>
        <torusGeometry args={[0.92, 0.028, 32, 220]} />
        <meshStandardMaterial
          color="#3c3c3c"
          metalness={1}
          roughness={0.22}
        />
      </mesh>

      {/* Vertical Brace */}

      <mesh>
        <boxGeometry args={[0.05, 1.7, 0.05]} />
        <meshStandardMaterial
          color="#5a5a5a"
          metalness={1}
          roughness={0.18}
        />
      </mesh>

      {/* Horizontal Brace */}

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 1.7, 0.05]} />
        <meshStandardMaterial
          color="#444"
          metalness={1}
          roughness={0.18}
        />
      </mesh>

      {/* Small Center Hub */}

      <mesh>
        <cylinderGeometry args={[0.08, 0.08, 0.18, 32]} />
        <meshStandardMaterial
          color="#bcbcbc"
          metalness={1}
          roughness={0.08}
        />
      </mesh>

    </group>
  );
}
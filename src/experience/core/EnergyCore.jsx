import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Satellites from "./Satellites";
export default function EnergyCore() {
  const group = useRef();

  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    group.current.rotation.y = t * 0.15;

    ring1.current.rotation.x = t * 0.6;

    ring2.current.rotation.y = -t * 0.4;

    ring3.current.rotation.z = t * 0.8;
  });

  return (
    <group ref={group}>
      {/* Center Core */}
      <mesh>
        <sphereGeometry args={[0.45, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#8B5CF6"
          emissiveIntensity={3}
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.4, 0.05, 24, 200]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 24, 200]} />
        <meshStandardMaterial
          color="#22D3EE"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.2, 0.05, 24, 200]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.15}
        />
      </mesh>
      <Satellites />
    </group>
  );
}
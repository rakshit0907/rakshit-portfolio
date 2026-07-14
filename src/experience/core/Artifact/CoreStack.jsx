import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Disc({
  radius = 0.45,
  height = 0.04,
  color = "#6b6b6b",
  z = 0,
  metalness = 1,
  roughness = 0.18,
}) {
  return (
    <mesh position={[0, 0, z]}>
      <cylinderGeometry args={[radius, radius, height, 64]} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
      />
    </mesh>
  );
}

export default function CoreStack() {
  const rotorA = useRef();
  const rotorB = useRef();
  const reactor = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    rotorA.current.rotation.z += delta * 0.28;
    rotorB.current.rotation.z -= delta * 0.22;

    reactor.current.position.y = Math.sin(t * 1.2) * 0.015;

    const s = 1 + Math.sin(t * 2) * 0.04;
    reactor.current.scale.setScalar(s);
  });

  return (
    <group>

      {/* Rear Cap */}

      <Disc
        radius={0.52}
        height={0.03}
        z={-0.22}
        color="#2d2d2d"
      />

      {/* Spacer */}

      <Disc
        radius={0.40}
        height={0.015}
        z={-0.15}
        color="#111111"
      />

      {/* Rotor A */}

      <group ref={rotorA}>

        <Disc
          radius={0.48}
          height={0.035}
          color="#9a9a9a"
        />

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.012, 20, 120]} />
          <meshStandardMaterial
            color="#d8d8d8"
            metalness={1}
            roughness={0.05}
          />
        </mesh>

      </group>

      {/* Floating Separator */}

      <Disc
        radius={0.34}
        height={0.012}
        z={0.08}
        color="#1d1d1d"
      />

      {/* Rotor B */}

      <group ref={rotorB} position={[0, 0, 0.14]}>

        <Disc
          radius={0.30}
          height={0.03}
          color="#7c7c7c"
        />

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.18, 0.008, 20, 120]} />
          <meshStandardMaterial
            color="#bcbcbc"
            metalness={1}
            roughness={0.08}
          />
        </mesh>

      </group>

      {/* Reactor */}

      <group ref={reactor} position={[0, 0, 0.19]}>

        <mesh>
          <sphereGeometry args={[0.07, 48, 48]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffe7a5"
            emissiveIntensity={3}
            metalness={0}
            roughness={0}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.11, 0.004, 16, 100]} />
          <meshBasicMaterial
            color="#ffe4a3"
            transparent
            opacity={0.7}
            toneMapped={false}
          />
        </mesh>

      </group>

    </group>
  );
}
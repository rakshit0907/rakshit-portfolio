import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CentralCore() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y += 0.0018;
    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.sin(t * 0.35) * 0.08,
        0.05
      );

    group.current.position.y =
      Math.sin(t * 0.9) * 0.08;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.12}
      floatIntensity={0.18}
    >
      <group ref={group}>

        {/* Main Glass Frame */}

        <mesh>
          <icosahedronGeometry args={[1.15, 3]} />
          <MeshTransmissionMaterial
            thickness={0.5}
            roughness={0}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.08}
            backside
            samples={6}
            resolution={512}
            anisotropy={0.2}
            distortion={0.08}
            distortionScale={0.4}
            temporalDistortion={0.08}
            color="#6F93BF"
          />
        </mesh>

        {/* Inner Core */}

        <mesh scale={0.42}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={4}
            metalness={1}
            roughness={0.12}
          />
        </mesh>

      </group>
    </Float>
  );
}
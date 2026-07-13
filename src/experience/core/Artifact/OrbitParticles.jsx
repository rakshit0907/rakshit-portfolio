import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function OrbitParticles() {
  const group = useRef();

  const particles = useMemo(() => {
    return Array.from({ length: 64 }, (_, i) => {
      const angle = (i / 64) * Math.PI * 2;

      return {
        angle,
        radius: 2.3 + Math.sin(i * 0.8) * 0.25,
        height: Math.sin(i * 1.2) * 0.35,
        size: 0.012 + (i % 4) * 0.004,
        speed: 0.15 + (i % 6) * 0.03,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    group.current.children.forEach((mesh, i) => {
      const p = particles[i];

      const a = p.angle + t * p.speed;

      mesh.position.x = Math.cos(a) * p.radius;
      mesh.position.z = Math.sin(a) * p.radius;

      mesh.position.y =
        p.height +
        Math.sin(t * 2 + i) * 0.08;

      const s =
        p.size *
        (1 + Math.sin(t * 4 + i) * 0.25);

      mesh.scale.setScalar(s);
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[1, 8, 8]} />

          <meshBasicMaterial
            color="#A8D5FF"
            transparent
            opacity={0.85}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
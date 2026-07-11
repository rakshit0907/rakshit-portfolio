import { Float, Sphere } from "@react-three/drei";
import { useRef } from "react";

export default function Background() {
  const particles = useRef(null);

  if (!particles.current) {
    particles.current = Array.from({ length: 140 }, (_, i) => ({
      key: i,
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        -Math.random() * 18,
      ],
      scale: Math.random() * 0.08 + 0.02,
      speed: 0.5 + Math.random(),
    }));
  }

  return (
    <>
      {particles.current.map((particle) => (
        <Float
          key={particle.key}
          speed={particle.speed}
          rotationIntensity={0.3}
          floatIntensity={0.4}
        >
          <Sphere
            args={[1, 10, 10]}
            position={particle.position}
            scale={particle.scale}
          >
            <meshStandardMaterial
              color="#6F93BF"
              emissive="#6F93BF"
              emissiveIntensity={1.5}
              transparent
              opacity={0.12}
              toneMapped={false}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
}
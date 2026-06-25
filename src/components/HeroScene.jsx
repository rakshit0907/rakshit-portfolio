import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import useMousePosition from "../hooks/useMousePosition";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";
function Blob() {
    useEffect(() => {
  if (!meshRef.current) return;

  const mesh = meshRef.current;

  gsap.to(mesh.rotation, {
    y: Math.PI * 2,
    x: Math.PI,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(mesh.scale, {
    x: 0.6,
    y: 0.6,
    z: 0.6,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "+=200%",
      scrub: true,
    },
  });
}, []);
  const meshRef = useRef();
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();

    // Floating animation
    meshRef.current.position.y = Math.sin(t * 1.2) * 0.2;

    // Mouse-follow rotation
    const targetX = mouse.y * 0.5;
    const targetY = mouse.x * 0.5;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX,
      0.1
    );

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY,
      0.1
    );

    // Very subtle horizontal parallax
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      mouse.x * 0.2,
      0.05
    );
  });

  return (
    <mesh ref={meshRef}>
      {/* TODO: Replace with GLTF, Spline, particles, etc. */}
      <icosahedronGeometry args={[2.5, 20]} />

      <MeshDistortMaterial
        color="#8b5cf6"
        distort={0.35}
        speed={1.5}
        roughness={0.1}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 50,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, -5, 5]}
        intensity={2}
      />

      <Blob />
    </Canvas>
  );
}
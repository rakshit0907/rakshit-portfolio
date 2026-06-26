import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import useMousePosition from "../../hooks/useMousePosition";
import useScrollProgress from "../../hooks/useScrollProgress";
import Particles from "../../components/Particles";
import EnergyCore from "../core/EnergyCore";
function Blob() {
  
  const meshRef = useRef();
  const mouse = useMousePosition();
  const progress = useScrollProgress();
  useFrame((state) => {
  if (!meshRef.current) return;

  const mesh = meshRef.current;

  const t = state.clock.getElapsedTime();

  // Floating motion
  mesh.position.y =
    Math.sin(t * 1.2) * 0.15
    - progress * 2;

  // Mouse interaction
  const mouseX = mouse.x * 0.4;
  const mouseY = mouse.y * 0.4;

  // Scroll transformation
  const scrollRotY =
    progress * Math.PI * 2;

  const scrollRotX =
    progress * Math.PI * 0.6;

  mesh.rotation.x =
    THREE.MathUtils.lerp(
      mesh.rotation.x,
      mouseY + scrollRotX,
      0.08
    );

  mesh.rotation.y =
    THREE.MathUtils.lerp(
      mesh.rotation.y,
      mouseX + scrollRotY,
      0.08
    );

  // Scale down while scrolling
  const targetScale =
    1 - progress * 0.5;

  mesh.scale.lerp(
    new THREE.Vector3(
      targetScale,
      targetScale,
      targetScale
    ),
    0.08
  );

  // Horizontal parallax
  mesh.position.x =
    THREE.MathUtils.lerp(
      mesh.position.x,
      mouse.x * 0.3,
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
      <Particles />
      <EnergyCore />
    </Canvas>
  );
}
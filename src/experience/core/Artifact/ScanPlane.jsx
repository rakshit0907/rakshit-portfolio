import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ScanPlane() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

ref.current.position.y =
  Math.sin(t * 0.8) * 1.5;

ref.current.rotation.z =
  t * 0.15;

    ref.current.rotation.x =
      Math.PI / 2;
  });

  return (
    <mesh ref={ref}>
      <circleGeometry args={[1.55, 64]} />
      <meshBasicMaterial
        color="#8cc8ff"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}
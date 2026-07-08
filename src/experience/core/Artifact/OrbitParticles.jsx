import { Points, PointMaterial } from "@react-three/drei";

export default function OrbitParticles() {
  const pts = [];

  for (let i = 0; i < 800; i++) {
    pts.push(
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6
    );
  }

  return (
    <Points positions={new Float32Array(pts)}>
      <PointMaterial
        transparent
        size={0.03}
        color="#8cb8ff"
        opacity={0.6}
      />
    </Points>
  );
}
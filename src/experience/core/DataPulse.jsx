import { Sphere } from "@react-three/drei";

export default function DataPulse({
  position = [0, 0, 0],
  scale = 0.06,
}) {
  return (
    <Sphere args={[1, 20, 20]} position={position} scale={scale}>
      <meshStandardMaterial
        color="#7cb7ff"
        emissive="#6F93BF"
        emissiveIntensity={4}
        toneMapped={false}
      />
    </Sphere>
  );
}
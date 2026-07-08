export default function VignettePlane() {
  return (
    <mesh position={[0, 0, -15]}>
      <planeGeometry args={[80, 80]} />
      <meshBasicMaterial
        color="#020202"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}
export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[4, 5, 3]}
        intensity={2}
      />

      <pointLight
        position={[-5, 2, 4]}
        intensity={1}
        color="#8B5CF6"
      />

      <pointLight
        position={[5, -3, 2]}
        intensity={0.8}
        color="#38BDF8"
      />
    </>
  );
}
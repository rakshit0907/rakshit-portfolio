export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.18} />

      <directionalLight
        position={[5, 4, 6]}
        intensity={2}
        color="#ffffff"
      />

      <pointLight
        position={[0, 0, 2]}
        intensity={25}
        color="#8B5CF6"
      />

      <pointLight
      position={[3, 1, 2]}
      intensity={12}
      color="#22D3EE"
      />
      <pointLight
      position={[-3, -1, 2]}
      intensity={8}
      color="#ffffff"
      />
    </>
  );
}
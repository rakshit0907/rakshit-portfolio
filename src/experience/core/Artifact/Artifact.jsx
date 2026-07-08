import ArtifactGroup from "./ArtifactGroup";

export default function Artifact({ activeSection }) {
  return (
    <ArtifactGroup activeSection={activeSection}>
      <mesh>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#5E81AC"
          emissive="#5E81AC"
          emissiveIntensity={2}
        />
      </mesh>
    </ArtifactGroup>
  );
}
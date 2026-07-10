import ArtifactGroup from "./ArtifactGroup";
import HologramShell from "./HologramShell";

export default function Artifact({ activeSection }) {
  return (
    <ArtifactGroup activeSection={activeSection}>

      <mesh>
        <icosahedronGeometry args={[1, 4]} />
        <meshPhysicalMaterial
          color="#cce7ff"
          transmission={0.9}
          thickness={0.8}
          roughness={0.05}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.45}
          emissive="#6F93BF"
          emissiveIntensity={2}
        />
      </mesh>

      <HologramShell />

    </ArtifactGroup>
  );
}
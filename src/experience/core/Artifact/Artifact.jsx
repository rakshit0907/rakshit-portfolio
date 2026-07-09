import ArtifactGroup from "./ArtifactGroup";
import OuterRing from "./OuterRing";
import InnerRing from "./InnerRing";
import FloatingRing from "./FloatingRing";
import HologramShell from "./HologramShell";
import EnergyPulse from "./EnergyPulse";
import EnergyLines from "./EnergyLines";
import ScanPlane from "./ScanPlane";
import OrbitNodes from "./OrbitNodes";
import OrbitParticles from "./OrbitParticles";
import FloatingPlanes from "./FloatingPlanes";
import DataFragments from "./DataFragments";

export default function Artifact({ activeSection }) {
  return (
    <ArtifactGroup activeSection={activeSection}>
      <mesh>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial color="#5E81AC" emissive="#5E81AC" emissiveIntensity={2.5} metalness={0.35} roughness={0.25} />
      </mesh>

      <HologramShell />
      <EnergyPulse />
      <OuterRing />
      <InnerRing />
      <FloatingRing />
      <EnergyLines />
      <ScanPlane />
      <OrbitNodes />
      <OrbitParticles />
      <FloatingPlanes />
      <DataFragments />
    </ArtifactGroup>
  );
}
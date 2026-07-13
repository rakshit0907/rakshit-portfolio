import { MeshTransmissionMaterial } from "@react-three/drei";

import ArtifactGroup from "./ArtifactGroup";
import HologramShell from "./HologramShell";
import OrbitNodes from "./OrbitNodes";
import MechanicalRings from "./MechanicalRings";
export default function Artifact() {
  return (
    <ArtifactGroup>

      {/* Main Glass Crystal */}
      <mesh>
        <icosahedronGeometry args={[1, 5]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.5}
          roughness={0}
          chromaticAberration={0.04}
          anisotropy={0.1}
          distortion={0.12}
          distortionScale={0.35}
          temporalDistortion={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
          color="#d9eeff"
        />
      </mesh>

      {/* Inner Core */}
      <mesh scale={0.42}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#9ecbff"
          emissive="#78bfff"
          emissiveIntensity={2.2}
          toneMapped={false}
        />
      </mesh>

      {/* Bright Center */}
      <mesh scale={0.12}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="white"
          toneMapped={false}
        />
      </mesh>

      {/* Engineering Layers */}
      <MechanicalRings />
      <HologramShell />

      <OrbitNodes />


    </ArtifactGroup>
  );
}
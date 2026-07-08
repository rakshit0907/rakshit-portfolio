import { Float } from "@react-three/drei";
import DataPulse from "./DataPulse";
import FloatingPlanes from "./Architecture/FloatingPanels";
import FloatingFrames from "./Architecture/HolographicFrames";
import FloorGrid from "./Architecture/ArchitectureGrid";
import ConstructionColumns from "./Architecture/LightColumns";

import StructuralSpine from "./StructuralSpine";
import CoreConnections from "./CoreConnections";
import CoreJoints from "./CoreJoints";

export default function Core() {
  return (
    <Float
      speed={0.45}
      rotationIntensity={0.04}
      floatIntensity={0.15}
    >
      <group>
        <DataPulse position={[0, 0.95, 0]} />
        <DataPulse position={[1.15, 0.15, 0]} />
        <DataPulse position={[-1.1, -0.3, 0]} />
        <DataPulse position={[0.4, -1.05, 0]} />

        <FloorGrid />

        <FloatingPlanes />

        <ConstructionColumns />

        <FloatingFrames />

        <StructuralSpine />

        <CoreConnections />

        <CoreJoints />

      </group>
    </Float>
  );
}
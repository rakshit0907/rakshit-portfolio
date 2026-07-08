import { Float } from "@react-three/drei";

import FloatingPlanes from "./Architecture/FloatingPanels";
import FloatingFrames from "./Architecture/FloatingFrames";
import FloorGrid from "./Architecture/ArchitectureGrid";
import ConstructionColumns from "./Architecture/LightsColumns";

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
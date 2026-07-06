import { Float } from "@react-three/drei";

import CoreFrame from "./CoreFrames";
import CoreConnections from "./CoreConnections";
import CoreJoints from "./CoreJoints";
import CoreModules from "./CoreModules";

export default function Core() {
  return (
    <Float
      speed={0.6}
      rotationIntensity={0.1}
      floatIntensity={0.25}
    >
      <group>
       <Corridor />
       <StructuralSpine />
        <CoreFrames />
        <CoreConnections />
        <CoreJoints />
      </group>
    </Float>
  );
}
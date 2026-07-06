import { Float } from "@react-three/drei";

import CoreFrame from "./CoreFrames";
import CoreConnections from "./CoreConnections";
import CoreJoints from "./CoreJoints";
import CoreModules from "./CoreModules";

export default function Core() {
  return (
    <Float
      speed={0.6}
      rotationIntensity={0.15}
      floatIntensity={0.4}
    >
      <group>
        <CoreFrames />
        <CoreConnections />
        <CoreJoints />
      </group>
    </Float>
  );
}
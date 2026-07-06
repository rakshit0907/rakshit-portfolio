import CoreConnections from "./CoreConnections";
import CoreFrame from "./CoreFrame";
import CoreJoints from "./CoreJoints";

export default function Core() {
  return (
    <group>

      <CoreFrame />
      <CoreConnections />
      <CoreJoints />

    </group>
  );
}
import Frame from "./artifact/Frame";
import Wireframe from "./artifact/Wireframe";
import Rings from "./artifact/Rings";
import CoreStack from "./artifact/CoreStack";

export default function HeroObject({ position = [0, 0, 0] }) {
  return (
    <group position={position}>

      {/* Background wireframe */}
      <Wireframe />

      {/* Structural chassis */}
      <Frame />

      {/* Main mechanical assembly */}
      <CoreStack />

      {/* Orbit rings */}
      <Rings />

    </group>
  );
}
import { memo } from "react";

import Frame from "./artifact/Frame";
import Wireframe from "./artifact/Wireframe";
import Rings from "./artifact/Rings";
import CoreStack from "./artifact/CoreStack";

function HeroObject({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Wireframe />
      <Frame />
      <CoreStack />
      <Rings />
    </group>
  );
}

export default memo(HeroObject);
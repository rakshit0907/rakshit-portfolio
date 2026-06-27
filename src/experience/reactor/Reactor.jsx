import CoreSphere from "./CoreSphere";
import EnergyShell from "./EnergyShell";
import Rings from "./Rings";
import Shards from "./Shards";

export default function Reactor() {
    return (
        <group>
            <CoreSphere />
            <EnergyShell />
            <Rings />
            <Shards />
        </group>
    );
}
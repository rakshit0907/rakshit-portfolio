import { CatmullRomCurve3, Vector3 } from "three";
import { Tube } from "@react-three/drei";

export default function EnergyTrails() {
  return (
    <>
      {[...Array(8)].map((_, i) => {
        const curve = new CatmullRomCurve3([
          new Vector3(0, 0, 0),
          new Vector3(
            Math.cos(i) * 1.5,
            Math.sin(i * 0.6),
            Math.sin(i) * 1.5
          ),
          new Vector3(
            Math.cos(i) * 3,
            Math.sin(i),
            Math.sin(i) * 3
          ),
        ]);

        return (
          <Tube
            key={i}
            args={[curve, 64, 0.015, 8, false]}
          >
            <meshBasicMaterial
              color="#6F93BF"
              transparent
              opacity={0.35}
            />
          </Tube>
        );
      })}
    </>
  );
}
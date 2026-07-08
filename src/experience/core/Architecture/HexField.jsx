import { Float } from "@react-three/drei";

export default function HexField() {
  const cells = [];

  for (let x = -6; x <= 6; x++) {
    for (let z = -6; z <= 6; z++) {
      if ((x + z) % 2 !== 0) continue;

      cells.push(
        <Float
          key={`${x}-${z}`}
          speed={0.5}
          floatIntensity={0.08}
          rotationIntensity={0}
        >
          <mesh
            position={[
              x * 0.9,
              -1.85,
              z * 0.78,
            ]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <circleGeometry args={[0.22, 6]} />
            <meshBasicMaterial
              color="#6F93BF"
              transparent
              opacity={0.05}
            />
          </mesh>
        </Float>
      );
    }
  }

  return <group>{cells}</group>;
}
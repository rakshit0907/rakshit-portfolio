import { Sphere } from "@react-three/drei";

const p = 2.4;

const points = [
  [-p,-p,-p],
  [ p,-p,-p],
  [ p, p,-p],
  [-p, p,-p],

  [-p,-p, p],
  [ p,-p, p],
  [ p, p, p],
  [-p, p, p],
];

export default function CoreJoints() {
  return (
    <>
      {points.map((position, index) => (
        <Sphere
          key={index}
          args={[0.05, 16, 16]}
          position={position}
        >
          <meshBasicMaterial
            color="#d8d8d8"
          />
        </Sphere>
      ))}
    </>
  );
}
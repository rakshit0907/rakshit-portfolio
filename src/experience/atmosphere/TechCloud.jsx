import { Float } from "@react-three/drei";
import TechIcon from "./TechIcon";

const icons = [
  ["⚛", [-5, 3, -8]],
  ["JS", [4, 2, -7]],
  ["TS", [-4, -1, -9]],
  ["HTML", [6, -2, -8]],
  ["CSS", [-6, 1, -10]],
  ["Node", [5, 0, -11]],
  ["Git", [-2, 4, -9]],
  ["GSAP", [2, -3, -10]],
  ["R3F", [-5, -2, -12]],
  ["Three", [6, 3, -12]],
  ["AI", [0, 4, -11]],
  ["SQL", [3, 2, -13]],
  ["Mongo", [-3, -4, -12]],
  ["Express", [5, -1, -14]],
  ["React", [-6, 2, -14]],
  ["Tailwind", [2, 5, -13]],
  ["Docker", [-4, 0, -15]],
  ["Linux", [6, -4, -15]],
];

export default function TechCloud() {
  return (
    <>
      {icons.map(([label, position]) => (
        <Float
          key={label + position.join()}
          speed={1.5}
          rotationIntensity={0.4}
          floatIntensity={0.5}
        >
          <TechIcon
            position={position}
            label={label}
          />
        </Float>
      ))}
    </>
  );
}
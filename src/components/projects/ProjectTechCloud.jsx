import { Float } from "@react-three/drei";
import TechIcon from "../../experience/atmosphere/TechIcon";

const icons = [
  ["React", [-5.5, 2.8, -8]],
  ["Three.js", [5, 2.2, -9]],
  ["Node.js", [-4.5, -1.6, -10]],
  ["MongoDB", [5.8, -0.2, -11]],
  ["Express", [3.5, -3, -12]],
  ["GSAP", [-2.2, -2.8, -11]],
  ["Docker", [-6, 0.5, -13]],
  ["Git", [0, 4.2, -10]],
  ["Tailwind", [2.5, 4.8, -13]],
  ["Vite", [6.5, -3.5, -14]],
];

export default function ProjectTechCloud() {
  return (
    <>
      {icons.map(([label, position], i) => (
        <Float
          key={label}
          speed={0.55 + i * 0.03}
          floatIntensity={0.25}
          rotationIntensity={0.12}
        >
          <TechIcon
            label={label}
            position={position}
            size={0.18}
          />
        </Float>
      ))}
    </>
  );
}
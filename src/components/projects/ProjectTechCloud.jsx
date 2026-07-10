import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import TechIcon from "../../experience/atmosphere/TechIcon";

const icons = [
  ["React", [-5, 3, -8]],
  ["Three", [4, 2, -7]],
  ["Node", [-4, -1, -9]],
  ["Mongo", [5, 0, -11]],
  ["Tailwind", [2, 5, -13]],
  ["GSAP", [2, -3, -10]],
  ["Git", [-2, 4, -9]],
  ["Docker", [-4, 0, -15]],
  ["Vite", [6, 3, -12]],
  ["Express", [5, -1, -14]],
];

export default function ProjectTechCloud() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      {icons.map(([label, position]) => (
        <Float
          key={label}
          speed={1.4}
          floatIntensity={0.8}
          rotationIntensity={0.5}
        >
          <TechIcon
            label={label}
            position={position}
            size={0.24}
          />
        </Float>
      ))}
    </Canvas>
  );
}
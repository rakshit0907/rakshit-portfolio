import { Float } from "@react-three/drei";
import { Html } from "@react-three/drei";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
  SiVite,
} from "react-icons/si";

const icons = [
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
  SiVite,
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((Icon, i) => (
        <Float
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={0.4}
          floatIntensity={0.8}
        >
          <Html
            transform
            distanceFactor={9}
            position={[
              (Math.random() - 0.5) * 18,
              (Math.random() - 0.5) * 10,
              -Math.random() * 8,
            ]}
          >
            <div className="text-[#6F93BF]/70 text-2xl">
              <Icon />
            </div>
          </Html>
        </Float>
      ))}
    </>
  );
}
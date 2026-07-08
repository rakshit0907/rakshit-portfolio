import { Float, Text } from "@react-three/drei";

const icons = [
  "React",
  "Three",
  "GSAP",
  "Node",
  "MongoDB",
  "Docker",
  "Git",
  "TypeScript",
];

export default function FloatingTechIcons() {
  return (
    <>
      {icons.map((icon, i) => (
        <Float
          key={icon}
          speed={1}
          floatIntensity={0.25}
          rotationIntensity={0.15}
        >
          <Text
            position={[
              Math.cos(i * 0.8) * 6,
              Math.sin(i) * 2,
              Math.sin(i * 0.8) * 6,
            ]}
            fontSize={0.18}
            color="#6F93BF"
            anchorX="center"
            anchorY="middle"
          >
            {icon}
          </Text>
        </Float>
      ))}
    </>
  );
}
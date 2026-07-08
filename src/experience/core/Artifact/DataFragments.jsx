import { Billboard, Text } from "@react-three/drei";

const fragments = [
  "01",
  "AI",
  "R3F",
  "GSAP",
  "JS",
  "TS",
  "NODE",
  "GPU",
];

export default function DataFragments() {
  return (
    <>
      {fragments.map((text, i) => (
        <Billboard
          key={i}
          position={[
            Math.cos((i / fragments.length) * Math.PI * 2) * 2.2,
            (Math.random() - 0.5) * 2,
            Math.sin((i / fragments.length) * Math.PI * 2) * 2.2,
          ]}
        >
          <Text
            fontSize={0.08}
            color="#9CC8FF"
            anchorX="center"
            anchorY="middle"
          >
            {text}
          </Text>
        </Billboard>
      ))}
    </>
  );
}
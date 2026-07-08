import { Environment } from "@react-three/drei";

export default function Lights({
  activeSection = "hero",
}) {
  const configs = {
  hero: {
    ambient: 0.18,
    blue: 8,
    white: 4,
  },

  about: {
    ambient: 0.25,
    blue: 5,
    white: 5,
  },

  projects: {
    ambient: 0.12,
    blue: 12,
    white: 7,
  },

  contact: {
    ambient: 0.08,
    blue: 4,
    white: 9,
  },
};

const c = configs[activeSection];
  return (
    <>
      <ambientLight intensity={c.ambient} />

      <directionalLight
        position={[6, 6, 4]}
        intensity={c.blue}
        color="#9cc8ff"
      />

      <pointLight
        position={[-6, 4, 6]}
        intensity={c.white}
        color="#5E81AC"
      />

      <pointLight
        position={[4, -3, 5]}
        intensity={c.white}
        color="#6F93BF"
      />

      <Environment preset="city" />
    </>
  );
}
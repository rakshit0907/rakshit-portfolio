import { Environment, Lightformer } from "@react-three/drei";

export default function Lights({
  activeSection = "hero",
}) {
  const configs = {
    hero: { ambient: 0.18, blue: 8, white: 4 },
    about: { ambient: 0.25, blue: 5, white: 5 },
    projects: { ambient: 0.12, blue: 12, white: 7 },
    contact: { ambient: 0.08, blue: 4, white: 9 },
  };

  const c = configs[activeSection];
  return (
    <>
      <ambientLight intensity={c.ambient} />

      <directionalLight position={[6, 6, 4]} intensity={c.blue} color="#9cc8ff" />
      <pointLight position={[-6, 4, 6]} intensity={c.white} color="#5E81AC" />
      <pointLight position={[4, -3, 5]} intensity={c.white} color="#6F93BF" />
      <directionalLight position={[-4, 2, -6]} intensity={3} color="#ffffff" />

      <Environment resolution={64} background={false}>
        <Lightformer form="rect" intensity={4} color="#9cc8ff" position={[0, 5, 5]} scale={[10, 10, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#5E81AC" position={[-5, -3, 4]} scale={[8, 8, 1]} rotation={[0, 0, Math.PI / 4]} />
        <Lightformer form="ring" intensity={2} color="#ffffff" position={[0, 0, -6]} scale={6} />
      </Environment>
    </>
  );
}
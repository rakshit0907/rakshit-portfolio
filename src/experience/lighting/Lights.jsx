import { Environment, Lightformer } from "@react-three/drei";

export default function Lights({
  activeSection = "hero",
}) {
  const configs = {
    hero: { ambient: 0.22, key: 5, fill: 2 },
    about: { ambient: 0.25, key: 4, fill: 2.5 },
    projects: { ambient: 0.18, key: 6, fill: 3 },
    contact: { ambient: 0.15, key: 4, fill: 3 },
  };

  const c = configs[activeSection];
  return (
    <>
      <ambientLight intensity={c.ambient} />
      <directionalLight position={[5, 6, 5]} intensity={c.key} color="#fff2e0" />
      <directionalLight position={[-5, 2, -6]} intensity={2} color="#cfd6dd" />
      <pointLight position={[0, -3, 4]} intensity={c.fill} color="#e8e4dd" />

      <Environment resolution={64} background={false}>
        <Lightformer form="rect" intensity={3} color="#fff2e0" position={[0, 5, 5]} scale={[10, 10, 1]} />
        <Lightformer form="rect" intensity={1.5} color="#cfd6dd" position={[-5, -3, 4]} scale={[8, 8, 1]} rotation={[0, 0, Math.PI / 4]} />
        <Lightformer form="ring" intensity={1.2} color="#ffffff" position={[0, 0, -6]} scale={6} />
      </Environment>
    </>
  );
}
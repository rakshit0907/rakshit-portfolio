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
      <ambientLight intensity={0.65} />

<directionalLight
    position={[5,6,5]}
    intensity={2.5}
/>

<pointLight
    position={[2,1,3]}
    intensity={20}
    distance={10}
    color="#ffe7b3"
/>

<pointLight
    position={[-3,-1,-2]}
    intensity={7}
    color="#6fa8ff"
/>
    </>
  );
}
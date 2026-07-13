import HeroObject from "../core/HeroObject";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <ambientLight intensity={1} />

      <HeroObject />
    </>
  );
}
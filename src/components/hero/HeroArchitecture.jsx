import {
  BlueprintGrid,
  BlueprintFrames,
  BlueprintLabels,
  BlueprintNodes,
} from "./blueprint";

export default function HeroArchitecture() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">

      <BlueprintGrid />

      <BlueprintFrames />

      <BlueprintNodes />

      <BlueprintLabels />

    </div>
  );
}
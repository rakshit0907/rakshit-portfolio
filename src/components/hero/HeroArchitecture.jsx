import {
  BlueprintGrid,
  BlueprintFrames,
  BlueprintLabels,
  BlueprintNodes,
} from "./blueprint";

export default function HeroArchitecture() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">

      {/* Whole Workspace */}
      <div className="absolute right-0 top-0 h-full w-[62%]">

        <BlueprintGrid />

        <BlueprintFrames />

        <BlueprintNodes />

        <BlueprintLabels />

      </div>

      {/* Vertical Divider */}

      <div
        className="
          absolute
          left-[41%]
          top-0
          h-full
          w-px
          bg-white/[0.05]
        "
      />

      {/* Top Guide */}

      <div
        className="
          absolute
          left-12
          right-12
          top-12
          h-px
          bg-white/[0.04]
        "
      />

      {/* Bottom Guide */}

      <div
        className="
          absolute
          left-12
          right-12
          bottom-12
          h-px
          bg-white/[0.04]
        "
      />

    </div>
  );
}
import SegmentRing from "./SegmentRing";

export default function Rings() {
  return (
    <>
      <SegmentRing
        radius={1.4}
        color="#8B5CF6"
        speed={0.35}
      />

      <SegmentRing
        radius={1.9}
        color="#22D3EE"
        speed={-0.22}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <SegmentRing
        radius={2.4}
        color="#ffffff"
        speed={0.15}
        rotation={[0, 0, Math.PI / 2]}
      />
    </>
  );
}
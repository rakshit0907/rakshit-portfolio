import { Billboard, Text } from "@react-three/drei";

export default function TechIcon({
  position,
  label,
  size = 0.18,
}) {
  return (
    <Billboard position={position}>
      <Text
        fontSize={size}
        color="#9AA8BC"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.22}
      >
        {label}
      </Text>
    </Billboard>
  );
}
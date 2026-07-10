import { Billboard, Text } from "@react-three/drei";

export default function TechIcon({
  position,
  label,
  size = 0.22,
}) {
  return (
    <Billboard position={position}>
      <Text
        fontSize={size}
        color="#8fb8ff"
        fillOpacity={0.35}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </Billboard>
  );
}
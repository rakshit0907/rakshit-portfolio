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
        color="#6F93BF"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </Billboard>
  );
}
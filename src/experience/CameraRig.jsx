import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import useMousePosition from "../../hooks/useMousePosition";

export default function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();

  useFrame(() => {
    const target = new Vector3(
      mouse.x * 0.4,
      mouse.y * 0.3,
      8
    );

    camera.position.lerp(target, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
}
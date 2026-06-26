import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import useMousePosition from "../../hooks/useMousePosition";

export default function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    const target = new Vector3(
      mouse.x * 0.35,
      mouse.y * 0.25,
      8 + Math.sin(t * 0.5) * 0.3
    );

    camera.position.lerp(target, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
}
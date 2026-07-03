import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    state.camera.position.x =
      Math.sin(t * 0.12) * 0.18;

    state.camera.position.y =
      Math.cos(t * 0.1) * 0.12;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
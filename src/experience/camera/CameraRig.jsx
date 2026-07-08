import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const cameraTargets = {
  hero: {
    position: new THREE.Vector3(0, 0, 6),
    target: new THREE.Vector3(0, 0, 0),
  },

  about: {
    position: new THREE.Vector3(-0.8, 0.5, 5.5),
    target: new THREE.Vector3(-0.2, 0.1, 0),
  },

  projects: {
    position: new THREE.Vector3(1.2, -0.2, 6.2),
    target: new THREE.Vector3(0.4, 0, 0),
  },

  contact: {
    position: new THREE.Vector3(0, 0.8, 5.2),
    target: new THREE.Vector3(0, 0.25, 0),
  },
};

const temp = new THREE.Object3D();

export default function CameraRig({
  children,
  activeSection = "hero",
}) {
  const group = useRef();

  useFrame((state) => {
    const cfg = cameraTargets[activeSection];

    state.camera.position.lerp(cfg.position, 0.05);

    temp.position.copy(state.camera.position);
    temp.lookAt(cfg.target);

    state.camera.quaternion.slerp(temp.quaternion, 0.05);

    if (group.current) {
      group.current.rotation.y += 0.0008;
    }
  });

  return <group ref={group}>{children}</group>;
}
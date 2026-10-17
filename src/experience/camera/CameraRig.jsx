import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ---------------------------------------------------------------
// EDIT THESE NUMBERS to change how the 3D scene sits on each page.
//   pos  = where the camera is   [x, y, z]  (bigger z = farther away)
//   look = the point it looks at [x, y, z]
// "hero" is the Home page and matches the original static camera,
// so Home looks exactly as before.
// ---------------------------------------------------------------
const views = {
  // Home: level view, object on the right (the original camera).
  hero:     { pos: [0, 1.6, 9],      look: [0, 0, 0] },
  // About: from above, object pushed toward the right edge.
  about:    { pos: [-1.6, 3.6, 8.6], look: [-1.2, 0, 0] },
  // Projects: from below and further away, object small in the top right.
  projects: { pos: [-1.8, -1.4, 10.8], look: [0.4, 0.4, 0] },
  // Contact: very close, so the object looks huge and spills off the right edge.
  contact:  { pos: [2.2, 0.2, 7.2],  look: [-0.4, 0, 0] },
};

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Renders nothing; it just glides the camera between the views above.
// damp() is frame-rate independent, so it feels the same at 60 or 144 fps.
export default function CameraRig({ section = "hero" }) {
  const look = useRef(new THREE.Vector3(0, 0, 0));
  const speed = reduceMotion ? 100 : 2.2;

  useFrame(({ camera }, delta) => {
    const v = views[section] ?? views.hero;
    const d = THREE.MathUtils.damp;

    camera.position.x = d(camera.position.x, v.pos[0], speed, delta);
    camera.position.y = d(camera.position.y, v.pos[1], speed, delta);
    camera.position.z = d(camera.position.z, v.pos[2], speed, delta);

    look.current.x = d(look.current.x, v.look[0], speed, delta);
    look.current.y = d(look.current.y, v.look[1], speed, delta);
    look.current.z = d(look.current.z, v.look[2], speed, delta);

    camera.lookAt(look.current);
  });

  return null;
}

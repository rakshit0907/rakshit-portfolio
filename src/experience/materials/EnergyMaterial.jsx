import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const EnergyMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorA: new THREE.Color("#6F93BF"),
    uColorB: new THREE.Color("#8b5cf6"),
  },

  /* vertex */
  `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform float uTime;

  void main(){

      vUv = uv;
      vNormal = normal;
      vPosition = position;

      vec3 p = position;

      p += normal * sin(uTime * 1.8 + position.y * 8.0) * 0.035;

      gl_Position =
          projectionMatrix *
          modelViewMatrix *
          vec4(p,1.0);
  }
  `,

  /* fragment */
  `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main(){

      float fresnel =
          pow(
              1.0 - abs(dot(normalize(vNormal), vec3(0.0,0.0,1.0))),
              2.5
          );

      float pulse =
          0.5 +
          0.5 *
          sin(uTime * 2.5 + vPosition.y * 10.0);

      vec3 color =
          mix(uColorA,uColorB,pulse);

      color += fresnel * 0.8;

      gl_FragColor =
          vec4(color,0.95);
  }
  `
);

extend({ EnergyMaterial });

export default function AnimatedEnergyMaterial() {

    const ref = useRef();

    useFrame(({clock})=>{
        if(ref.current){
            ref.current.uTime = clock.elapsedTime;
        }
    });

    return <energyMaterial ref={ref} />;
}
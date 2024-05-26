import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BoxGeometry,
  SphereGeometry,
  PlaneGeometry,
  MeshNormalMaterial,
  MeshBasicMaterial,
  DirectionalLight,
} from "three";

function Experience() {
  const sphereRef = useRef();

  // Rotate the sphere on every frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh position={[1, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={sphereRef} position={[-2, 2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <mesh rotation={[-Math.PI * 0.3, 0, 0]} scale={[10, 10, 10]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
      <directionalLight position={[1, 2, 1]} intensity={1.5} />
      <ambientLight intensity={2} />
    </>
  );
}

export default Experience;

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  SoftShadows,
  OrbitControls,
  Text3D,
  MeshReflectorMaterial,
} from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2} />
      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial color={"yellowgreen"} />
      </mesh>
      <SoftShadows />
      <group position={[-1, 1, 0]}>
        <mesh castShadow>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </group>
      <Text3D
        castShadow
        font="/Blue.json"
        size={0.6}
        curveSegments={12}
        bevelSize={4}
        height={0.2}
      >
        Creative Full Stack Developer
        <meshStandardMaterial />
      </Text3D>
    </>
  );
}

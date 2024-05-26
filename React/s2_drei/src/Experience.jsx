import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  PivotControls,
  TransformControls,
  Html,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";

export default function Experience() {
  const box = useRef();
  useFrame(() => {
    box.current.rotation.y += 0.02;
  });
  return (
    <>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.4} />
      <group>
        <PivotControls>
          <mesh scale={1} position={[2, 1, 2]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color={"purple"} />
            <Html>Gola</Html>
          </mesh>
        </PivotControls>
        <Html>Hello</Html>
        <TransformControls mode="scale">
          <mesh scale={1} position={[0, 1, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color={"white"} />
            <Html position={[1, 1, 0]}>Jhola</Html>
          </mesh>
        </TransformControls>
        <TransformControls object={box} mode="rotate" />
        <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          {/* <meshBasicMaterial color={"yellowgreen"} /> */}
          <MeshReflectorMaterial color={"greenyellow"} mirror={0.6} />
        </mesh>
        <mesh ref={box} position={[-2, 1, 0]}>
          <boxGeometry />
          <meshBasicMaterial color={"brown"} />
          <Html wrapperClass="dola" position={[0, 1, 0]}>
            Dola
          </Html>
        </mesh>
        <Float speed={20} floatIntensity={2}>
          <Text
            color={"red"}
            textAlign="center"
            maxWidth={3}
            position={[0, 4, 0]}
          >
            I Love R3F
          </Text>
        </Float>
      </group>
    </>
  );
}

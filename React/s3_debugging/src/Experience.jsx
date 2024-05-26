import React from "react";
import { Float, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";
import { useControls } from "leva";

function Experience() {
  const { x, y, color } = useControls("Baakisab", {
    x: {
      value: -2,
      min: -10,
      max: 10,
    },
    y: {
      value: 0,
      min: -10,
      max: 10,
    },
    color: {
      value: "red",
    },
  });

  const { visible, size } = useControls("plane", {
    visible: true,
    size: {
      value: 2,
      min: -10,
      max: 10,
    },
  });

  return (
    <group>
      <OrbitControls />

      <mesh
        rotation={[-Math.PI * 0.5, 0, 0]}
        visible={visible}
        scale={size}
        position={[0, -1, 0]}
      >
        <planeGeometry args={[10, 10]} />
        {/* <meshBasicMaterial color={"yellowgreen"} /> */}
        <meshBasicMaterial color={"greenyellow"} />
      </mesh>

      <mesh position={[2, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position-x={x} position-y={y}>
        <sphereGeometry />
        <meshBasicMaterial color={"blue"} />
      </mesh>
    </group>
  );
}

export default Experience;

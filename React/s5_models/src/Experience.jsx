import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Clone, OrbitControls, Sky, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

function Experience() {
  const model = useLoader(GLTFLoader, "/Avatar.glb");
  const queen = useLoader(GLTFLoader, "/Queen.glb");
  const ladki = useLoader(GLTFLoader, "/Ladki.glb");
  const queenRef = useRef();
  const ladkiRef = useRef();

  const queenAnimation = useAnimations(queen.animations, ladkiRef);
  const { actions } = useAnimations(ladki.animations, ladkiRef);

  useFrame(() => {
    if (queenRef.current) {
      queenRef.current.scale.set(0.01, 0.01, 0.01); // Adjust as necessary for the queen model
    }
    if (ladkiRef.current) {
      ladkiRef.current.scale.set(0.01, 0.01, 0.01);
    }
  });

  useEffect(() => {
    if (actions) {
      const animationAction2 = queenAnimation.actions[Object.keys(actions)[0]];
      console.log(animationAction2);
      const animationAction = actions[Object.keys(actions)[0]]; // Play the first animation found
      if (animationAction) {
        animationAction2.play();
        setTimeout(() => {
          animationAction2.fadeOut(1);
          animationAction.fadeIn(2).play();
        }, [3000]);
      }
    }
  }, [actions]);

  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls />
      <Sky sunPosition={-2} />
      <directionalLight position={[1, 2, 3]} intensity={3} />
      <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color={"greenyellow"} />
      </mesh>
      <Suspense
        fallback={
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color={"red"} wireframe />
          </mesh>
        }
      >
        <primitive castShadow object={model.scene} />
      </Suspense>
      <primitive ref={queenRef} position-x={1} object={queen.scene} />
      <primitive
        ref={ladkiRef}
        position-x={-1}
        position-z={3}
        object={ladki.scene}
      />
      {/* <Clone object={model.scene} scale={1.2} position-x={-2} />
      <Clone object={model.scene} scale={1.2} position-x={2} /> */}
    </>
  );
}

export default Experience;

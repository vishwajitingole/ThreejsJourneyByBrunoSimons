import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

function Experience() {
  const model = useLoader(GLTFLoader, "../public/Avatar.glb");
  console.log(model);
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />

      <primitive object={model.scene} />
    </>
  );
}

export default Experience;

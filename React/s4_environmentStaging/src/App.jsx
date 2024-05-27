import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <div style={{ height: "100vh", background: "skyblue" }}>
      <Canvas shadows>
        <PerspectiveCamera position={[1, 2, 6]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas shadows>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

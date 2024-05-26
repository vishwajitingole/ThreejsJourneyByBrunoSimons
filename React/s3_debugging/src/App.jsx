import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
function App() {
  return (
    <div style={{ height: "100vh", display: "flex", background: "skyblue" }}>
      <Canvas camera={{ fov: 90, near: 0.6 }}>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

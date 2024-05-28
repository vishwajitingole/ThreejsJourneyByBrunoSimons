import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [-3, 2, 5] }} shadows>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

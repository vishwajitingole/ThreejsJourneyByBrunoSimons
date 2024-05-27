import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas shadows>
        <OrbitControls makeDefault />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

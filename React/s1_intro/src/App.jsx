import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
  return (
    <div style={{ backgroundColor: "antiquewhite", height: "100vh" }}>
      <h1>Hello React</h1>
      <Canvas shadows>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      {/* <color attach="background" args={["#f5f0f0"]} /> */}
      <Experience />


    </Canvas>
  );
}

export default App;

import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import Animated from "./components/Animated";
import Card from "./components/Card";
import Mod from "./components/Mod";
import Mod1 from "./components/Mod1";
import Mod2 from "./components/Mod2";
import Mod3 from "./components/Mod3";
import Mod4 from "./components/Mod4";
import Mod5 from "./components/Mod5";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#121416] h-screen w-full">
      <Navbar />
      <div className="w-full bg-[#121416] absolute top-[15%] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center items-center overflow-y-scroll p-5">
        <Card title="Title" Model={Mod2} />
        <Card title="Title" Model={Animated} />
        <Card title="Title" Model={Box} />
        <Card title="Title" Model={Mod1} />
        <Card title="Title" Model={Mod3} />
        <Card title="Title" Model={Mod4} />
        <Card title="Title" Model={Mod} />
        <Card title="Title" Model={Mod5} />
      </div>

      {/* <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Animated />
          </Suspense>
        </Canvas> */}
      {/* {/* <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas> */}
    </div>
  );
}

export default App;

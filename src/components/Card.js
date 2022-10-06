import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export default function Card({ Model, title }) {
  return (
    <div className="card rounded-2xl h-[25rem] border border-[#202324] overflow-hidden ">
      <div className="model h-[80%] w-full bg-transparent p-1 flex justify-center items-center">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[-38, -50, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="title flex justify-between p-5 h-[20%] w-full text-white font-semibold text-xl bg-[#202324]">
        <span className="text-[#4C90FA] font-medium">{title} #243</span>
        <span>12 ETH</span>
      </div>
    </div>
  );
}

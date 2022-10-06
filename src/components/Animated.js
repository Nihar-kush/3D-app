import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Animated() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color={"#8352fd"}
        attach="material"
        distort={0.4}
        speed={1.5}
      />
    </Sphere>
  );
}

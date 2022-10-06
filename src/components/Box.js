import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Box() {
  // const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 45]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* <meshLambertMaterial attach="material" color={"#d11b0e"} /> */}
      {/* <meshStandardMaterial map={colorMap} /> */}
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

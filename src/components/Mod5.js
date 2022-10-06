/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Théo Richard (https://sketchfab.com/theorichard)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/magic-ring-422db414fdea4fb4bd17a3bd8971c98b
title: Magic Ring
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/mod5.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1}>
            <mesh
              geometry={nodes.Ring_Ring_0.geometry}
              material={materials.Ring}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mod5.gltf");
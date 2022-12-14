/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Apeinator (https://sketchfab.com/Apeinator)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/coolpaintr-vr-anger-from-inside-out-psvr-8ae58157221b4cd1806e804343f7ebb1
title: CoolPaintr VR - Anger from Inside Out - PSVR
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/mod3.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.46, 0.25, 1]} scale={0.35}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes["Material-material"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_1"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_2"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_3"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_4"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_5"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_6"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_7"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_8"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_9"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_10"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_11"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_12"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_13"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_14"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_15"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_16"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_17"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_18"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_19"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["Material-material_20"].geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mod3.gltf");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 scene.gltf -t
Author: DailyArt (https://sketchfab.com/D.art)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/simple-dining-table-a6deba91a7f9435082369e33f8db0dd6
Title: Simple dining table
*/

import * as THREE from "three";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useBox } from "@react-three/cannon";
import { useDragPhysicsObject } from "../../planner/Canvas/shared/hooks/useDragPhysicsObject";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectFurnitureById } from "../../planner/Canvas/Furniture/slice/selectors";
import { ThreeEvent } from "@react-three/fiber";
import { furnitureActions } from "../../planner/Canvas/Furniture/slice";
import { selectMode } from "../../planner/Canvas/shared/sharedSlice/selectors";

type GLTFResult = GLTF & {
  nodes: {
    Object_12: THREE.Mesh
  }
  materials: {
    zhuoyi: THREE.MeshStandardMaterial
  }
}

export function TableAndChairs({ id }: { id: string }) {
  const mode=useAppSelector(selectMode)
  const furniture = useAppSelector(selectFurnitureById(id));
  const position = furniture ? furniture.position : [0, 0, 0] as [x: number, y: number, z: number];
  const rotation = furniture ? furniture.rotation : [0, 0, 0] as [x: number, y: number, z: number];
  const isSelected = furniture ? furniture.isSelected :false;


  const { nodes, materials } = useGLTF("tableAndChairs/scene.gltf") as GLTFResult;

  const dispatch = useAppDispatch();
  const onClick = (e: ThreeEvent<PointerEvent>) => {
    if(mode==='furniture'){
      e.stopPropagation();
      const id = e.eventObject.name;
      if (!id) return;
      dispatch(furnitureActions.setSelectedFurnitureId(id));
    }

  };

  const onWheel = (e: ThreeEvent<WheelEvent>) => {
    if(mode==='furniture'){
      if (e.deltaY > 0) {
        dispatch(furnitureActions.rotateFurniture({ id: e.eventObject.name, rotation: [0,Math.PI / 8, 0] }));

      } else {
        dispatch(furnitureActions.rotateFurniture({ id: e.eventObject.name, rotation: [0,-Math.PI / 8, 0] }));
      }
    }
  };

  const [ref, api] = useBox(() => ({
    mass: 0,
    type: "Static",
    rotation,
    position

  }));

  useEffect(() => {
    if (!furniture) return;
    const [x, y, z] = rotation;
    api.rotation.set(x, y, z);
  }, [furniture]);

  const bind = useDragPhysicsObject({
    api,
    z: 1,
    onFinishDrag: ({ id, position }) => {
      console.log("onFinishDrag");
      dispatch(furnitureActions.setFurniturePosition({ id, position }));
    },
    config:{enabled:mode==='furniture',filterTaps:true}
  });





  return (
    <group name={id} scale={2} ref={ref as any}  onClick={onClick} onWheel={onWheel} dispose={null} {...bind() as any}>
      <mesh  geometry={nodes.Object_12.geometry} material={materials.zhuoyi}/>
      {isSelected?<mesh position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry/>
        <meshStandardMaterial color={"blue"}/>
      </mesh>:null}
    </group>
  );
}

useGLTF.preload("/scene.gltf");

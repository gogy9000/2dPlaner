import React, { memo } from "react";
import { Grid } from "@react-three/drei";
import { Plane } from "../meshes/Plane";
import { ThreeEvent } from "@react-three/fiber";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addWall } from "../Constructions/slice";
import { selectMode } from "../shared/sharedSlice/selectors";
import { addFurniture } from "../Furniture/slice";

export const Floor: React.FC = memo(() => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();
  const onDoubleClick = (e: ThreeEvent<MouseEvent>) => {
    const [x,y,z] = Object.values(e.point) as [x: number, y: number, z: number];
    if (mode === "construction") {
      dispatch(addWall({ position:[x,y,z] }));
      return;
    }
    if (mode === "furniture") {
      dispatch(addFurniture({ position:[x,y,1] }));
    }
  };

  return (
    <>
      <Grid args={[100, 100]} position={[0, 0, -0.49]} rotation={[Math.PI / 2, 0, 0]}/>
      <Plane
        meshProps={{
          onDoubleClick
        }}
        cannonProps={
          {
            position: [0, 0, -0.5],
            args: [100, 100],
            rotation: [0, 0, Math.PI / 2]
          }
        }

      />
    </>
  );
});
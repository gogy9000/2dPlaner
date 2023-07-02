import React, { memo } from "react";
import { Grid } from "@react-three/drei";
import { Plane } from "../meshes/Plane";
import { ThreeEvent } from "@react-three/fiber";
import { useAppDispatch } from "../../store/hooks";
import { addWall } from "../../store/slices/construction";
import { Vector3 } from "three";


interface IFloorProps {

}

export const Floor: React.FC<IFloorProps> = memo(({}) => {
  const dispatch=useAppDispatch()

  const onClickHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    console.log(e.point);
    const position  =Object.values(e.point)

    // dispatch(addWall({position,rotation:[0,0,0]}))

  };
  return (
    <>
      <Grid args={[100, 100]} position={[0, 0, -0.49]} rotation={[Math.PI / 2, 0, 0]}/>
      <Plane
        meshProps={{
          onClick: onClickHandler
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
import React, { memo, useEffect, useRef, useState } from "react";
import { Grid } from "@react-three/drei";
import { Plane } from "../meshes/Plane";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { useAppDispatch } from "../../store/hooks";
import { constructionsActions, startBuild } from "../../store/slices/construction";
import { WallType } from "../../store/slices/construction/initialState/type";
import { Mesh } from "three";
import { useSelector } from "react-redux";
import { selectConstruction } from "../../store/slices/construction/selectors";


export const Floor: React.FC = memo(() => {
  const construction=useSelector(selectConstruction)
  const [mode, setMode] = useState(false);

  const dispatch = useAppDispatch();
  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const [x, y, z] = Object.values(e.point) as WallType["position"];
    dispatch(startBuild({ position: [x, y, z] }));

  };

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    // e.stopPropagation();
    // const [x, y, z] = Object.values(e.point);
    // dispatch(startBuild({ position: [x, y, z] }));
    // setMode(true);
  };

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    // if (!mode) return;
    // const [x, y, ] = Object.values(e.point);
    // const [xP,yP,]=construction?.position||[0,0,0]
    // const deltaX=Math.abs(xP)-Math.abs(x)
    // const deltaY=Math.abs(yP)-Math.abs(y)
    // console.log(deltaX,deltaY);

    // dispatch(constructionsActions.setWallArgs({ args: [x*0.5, y*0.5, z*0.5] }));
  };
  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    setMode(false);
    // e.stopPropagation();
    // const [x, y, z] = Object.values(e.point)
    // dispatch(constructionsActions.setWallArgs({ args: [x, y, z] }));
  };


  return (
    <>
      <Grid args={[100, 100]} position={[0, 0, -0.49]} rotation={[Math.PI / 2, 0, 0]}/>
      <Plane
        meshProps={{
          onPointerDown,
          onPointerUp,
          onPointerMove,
          onClick
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
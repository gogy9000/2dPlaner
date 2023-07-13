import React, { memo } from "react";
import { Block } from "../../meshes/Block";
import { useSelector } from "react-redux";
import { selectWall } from "../slice/selectors";
import { ThreeEvent } from "@react-three/fiber";
import { constructionsActions } from "../slice";
import { useAppDispatch } from "../../../store/hooks";
import  * as THREE from 'three'
import { onFinishDragArgsType } from "../../shared/hooks/useDragPhysicsObject";


type IWallProps = {
  id: string
}

export const Wall: React.FC<IWallProps> = memo(({ id }) => {
  const wall = useSelector(selectWall(id));
  const { position, rotation,args,isSelected } = wall;
  const dispatch = useAppDispatch();

  const onWheel = (e: ThreeEvent<WheelEvent>) => {
    if (e.deltaY > 0) {
      dispatch(constructionsActions.rotateWall({ id: e.eventObject.name, rotation: [0, 0, Math.PI / 10] }));

    } else {
      dispatch(constructionsActions.rotateWall({ id: e.eventObject.name, rotation: [0, 0, -Math.PI / 10] }));

    }
  };


  const onFinishDrag = ({ id, position }: onFinishDragArgsType) => {
    dispatch(constructionsActions.setWallPosition({
      id,
      position
    }));
  };

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const id = event.eventObject.name;
    if (!id) return;
    dispatch(constructionsActions.setSelectedConstructionsId(id));
  };


  const color=new THREE.Color(isSelected?"blue":"gray")
  return (
    <Block
      onFinishDrag={onFinishDrag}
      meshProps={{ name: id, onWheel,onClick }}
      geometryProps={{
        args, position, rotation
      }}
      materialProps={{color}}

    />
  );
});
import React, { memo } from "react";
import { Block, onFinishDragArgsType } from "../../meshes/Block";
import { useSelector } from "react-redux";
import { selectWall } from "../../../store/slices/construction/selectors";
import { ThreeEvent } from "@react-three/fiber";
import { rotateWall, setWallPosition } from "../../../store/slices/construction";
import { useAppDispatch } from "../../../store/hooks";


type IWallProps = {
  id: string
}

export const Wall: React.FC<IWallProps> = memo(({ id }) => {
  const wall = useSelector(selectWall(id));
  const dispatch = useAppDispatch();

  const onWheel = (e: ThreeEvent<WheelEvent>) => {
    if (e.deltaY > 0) {
      dispatch(rotateWall({ id: e.eventObject.name, rotation: [0, 0, Math.PI / 10] }));

    } else {
      dispatch(rotateWall({ id: e.eventObject.name, rotation: [0, 0, -Math.PI / 10] }));

    }
  };

  const { position, rotation } = wall;
  const onFinishDrag = ({ id, position }: onFinishDragArgsType) => {
    dispatch(setWallPosition({
      id,
      position
    }));
  };

  return (
    <Block
      onFinishDrag={onFinishDrag}
      meshProps={{ name: id, onWheel }}
      geometryProps={{
        args: [4, 1, 4], position, rotation
      }}

    />
  );
});
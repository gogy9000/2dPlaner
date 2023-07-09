import React, { memo, useEffect, } from "react";

import { useDrag, } from "@use-gesture/react";
import { MeshStandardMaterial } from "three";
import { BoxProps, useBox, } from "@react-three/cannon";
import { MeshProps, useThree } from "@react-three/fiber";


export type onFinishDragArgsType = {
  id: string, position: [x: number, y: number, z: number]
}

export interface IBlockProps {
  geometryProps?: Partial<BoxProps>;
  materialProps?: Partial<MeshStandardMaterial>;
  meshProps?: Partial<MeshProps>;
  onFinishDrag?: (args: onFinishDragArgsType) => void;
}

export const Block: React.FC<IBlockProps> = memo(({ onFinishDrag, meshProps, geometryProps, materialProps }) => {
  const { size, viewport, camera } = useThree();
  const aspect = size.width / viewport.width;

  const [ref, api] = useBox(() => ({
    ...geometryProps
  }));

  useEffect(() => {
    if (!geometryProps) return;
    if (!geometryProps.rotation) return;
    const [x, y, z] = geometryProps.rotation;
    api.rotation.set(x, y, z);
  }, [geometryProps?.rotation]);

  const bind = useDrag(
    ({ xy: [x, y], event, down }) => {

      const cameraPosition = Object.values(camera.position);
      const xPosition = ((x - size.width / 2) / aspect) + cameraPosition[0];
      const yPosition = (-(y - size.height / 2) / aspect) + cameraPosition[1];
      const zPosition = geometryProps && geometryProps.position ? geometryProps.position[2] : 0;
      const xRoundedPosition = Math.round(xPosition);
      const yRoundedPosition = Math.round(yPosition);
      const zRoundedPosition = zPosition;
      if (down) {
        api.position.set(
          xPosition,
          yPosition,
          zPosition
        );
        return;
      }
      api.position.set(
        xRoundedPosition,
        yRoundedPosition,
        zRoundedPosition
      );
      const e = event as any;
      onFinishDrag && onFinishDrag({
        id: e.eventObject.name,
        position: [
          xRoundedPosition,
          yRoundedPosition,
          zRoundedPosition
        ]
      });
    },{filterTaps:true}
  );


  return (

    <mesh
      ref={ref}
      {...meshProps}
      {...bind() as any}
    >
      <boxGeometry {...geometryProps}/>
      <meshStandardMaterial  attach={"material"} color={"gray"} {...materialProps}/>
    </mesh>
  );
});
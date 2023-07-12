import React, { memo, useEffect, } from "react";

import { useDrag, } from "@use-gesture/react";
import { MeshStandardMaterial } from "three";
import { BoxProps, useBox } from "@react-three/cannon";
import { MeshProps, useThree } from "@react-three/fiber";
import { onFinishDragArgsType, useDragPhysicsObject } from "../../shared/hooks/useDragPhysicsObject";



export interface IBlockProps {
  geometryProps?: Partial<BoxProps>;
  materialProps?: Partial<MeshStandardMaterial>;
  meshProps?: Partial<MeshProps>;
  onFinishDrag?: (args: onFinishDragArgsType) => void;
}

export const Block: React.FC<IBlockProps> = memo(({ onFinishDrag, meshProps, geometryProps, materialProps }) => {

  const [ref, api] = useBox(() => ({
    mass:1,
    type:"Kinematic",
    ...geometryProps
  }));

  useEffect(() => {
    if (!geometryProps) return;
    if (!geometryProps.rotation) return;
    const [x, y, z] = geometryProps.rotation;
    api.rotation.set(x, y, z);
  }, [geometryProps?.rotation]);

  const z=geometryProps&&geometryProps.position?geometryProps.position[2]:0.5

  const bind= useDragPhysicsObject({
    api,
    onFinishDrag,
    z
  }
  )

  return (

    <mesh
      ref={ref}
      {...meshProps}
      {...bind() as any}
    >
      <boxGeometry  {...geometryProps}/>
      <meshStandardMaterial  attach={"material"} color={"gray"} {...materialProps}/>
    </mesh>
  );
});
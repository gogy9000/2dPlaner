import React, { memo, useRef } from "react";

import { useDrag, useWheel } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/three";
import { Mesh, MeshBasicMaterial } from "three";
import { BoxProps, useBox, usePlane } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

export interface IBlockProps {
  geometryProps?: Partial<BoxProps>;
  materialProps?: Partial<MeshBasicMaterial>;
}

export const Block: React.FC<IBlockProps> = memo(({ geometryProps, materialProps }) => {
  const { size, viewport, camera } = useThree();

  const aspect = size.width / viewport.width;

  const [ref, api] = useBox(() => ({
    ...geometryProps
  }));
  const bind = useDrag(
    ({ xy: [x, y], event }) => {

      const z = geometryProps && geometryProps.position ? geometryProps.position[2] : 0;
      const cameraPosition = Object.values(camera.position);
      api.position.set(
        ((x - size.width / 2) / aspect) + cameraPosition[0]
        ,
        (-(y - size.height / 2) / aspect) + cameraPosition[1]
        ,
        z
      );
    }, { pointer: { capture: true } }
  );


  return (

    <mesh
      // onClick={(e)=>{e.stopPropagation()}}
      {...bind() as any}
      ref={ref}
    >
      <boxGeometry {...geometryProps}/>
      <meshBasicMaterial attach={"material"} color={"gray"} {...materialProps}/>
    </mesh>
  );
});
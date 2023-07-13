import React, { memo } from "react";
import { PlaneProps, usePlane } from "@react-three/cannon";
import { MeshStandardMaterial } from "three";
import { MeshProps, PlaneGeometryProps } from "@react-three/fiber";


export type PlanePropsType =  {
  cannonProps?: PlaneProps,
  meshProps?:MeshProps
  geometryProps?:PlaneGeometryProps
  materialProps?: Partial<MeshStandardMaterial>
}

export const Plane: React.FC<PlanePropsType> = memo(({meshProps,geometryProps,cannonProps,materialProps}) => {
  const [ref] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, -0.5],
    ...cannonProps
  }));
  return (
    <mesh  ref={ref as any} {...meshProps}>
      <planeGeometry args={[100, 100]} {...geometryProps}/>
      <meshStandardMaterial attach={"material"} color={"rgba(5,5,5,1)"} {...materialProps}/>
    </mesh>
  );
});
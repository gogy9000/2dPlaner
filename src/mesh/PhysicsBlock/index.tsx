import React, { memo, useRef, useState } from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useSpring } from "@react-spring/three";
import { Mesh } from "three";
import { useDrag } from "@use-gesture/react";


interface IPhysicsBlockProps {

}

export const PhysicsBlock: React.FC<IPhysicsBlockProps> = memo((props) => {
  // const meshRef = useRef<THREE.Mesh>(null!);

  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    args: [100, 100, 0],
    ...props
  }));

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      api.position.set(x, -y, 0);
      // api.start({ position: [x, -y, 0] });
    },
  );
  return (
    <mesh

      ref={ref as any}
    >
      <boxGeometry/>
      <meshLambertMaterial attach={"material"} color={"hotpink"}/>
    </mesh>
  );
});
import React, { memo } from "react";
import { usePlane } from "@react-three/cannon";




export const Plane: React.FC = memo((props) => {
  const [ref]=usePlane(()=>({
    rotation:[-Math.PI/2,0,0],
    ...props
  }))
  return (
    <mesh ref={ref as any}>
      <planeGeometry  args={[100,100]}/>
      <meshLambertMaterial attach={"material"} color={"hotpink"}/>
    </mesh>
  );
});
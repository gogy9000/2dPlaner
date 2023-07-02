import { useRef, useState } from "react";
import { ThreeElements, useThree } from "@react-three/fiber";

import { useBox, useSpring } from "@react-three/cannon";
import { useDrag } from "@use-gesture/react";


export const Box = (props: any) => {
  // This reference will give us direct access to the mesh

  // Set up state for the hovered and active state

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  // const [position, setPosition] = useState(initialPosition);
  const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [ref,api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props
  }));

  const bind = useDrag(
    ({ offset: [,],xy:[x,y],first,last }) => {
      if(first){
        api.mass.set(0)
      } else if(last){
        api.mass.set(1)
      }
      api.position.set(
        (x - size.width / 2) / aspect,
        -(y - size.height / 2) / aspect,
        0
      );
      // api.start({ position: [x, -y, 0] });
    },)


  return (
    <mesh

      ref={ref as any}
      {...bind() as any}
    >
      <boxGeometry/>
      <meshLambertMaterial attach={"material"} color={"hotpink"}/>
    </mesh>
  );
};
import { useRef, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";

export const Box = (props: any) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props
  }));
  return (
    <mesh

      ref={ref as any}
    >
      <boxGeometry/>
      <meshLambertMaterial attach={"material"} color={"hotpink"}/>
    </mesh>
  );
};
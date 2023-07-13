import React, { memo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Floor } from "./Floor";
import { Constructions } from "./Constructions";
import { Stats } from '@react-three/drei'
import { Furniture } from "./Furniture";
import { ModeControl } from "./shared/features/modeControl";
interface IPlannerProps {

}

export const Planner: React.FC<IPlannerProps> = memo(({}) => {

  return (
    <Canvas
      camera={{ position: [0, 0, 20] }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight color="white"  position={[0, 0, 5]} />
      <CameraControls mouseButtons={{ left: 0, wheel: 0, middle: 0, right: 4 }}/>
      <Physics gravity={[0, 0, -40]}>
        <color attach={"background"} args={["gray"]}/>
        <ModeControl/>
        <Constructions/>
        <Furniture/>
        <Floor/>
      </Physics>
      <Stats />

    </Canvas>
  );
});


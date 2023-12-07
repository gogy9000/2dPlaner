import React, { memo } from "react";
import { CameraControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { ModeControl } from "./shared/features/modeControl";
import { Constructions } from "./Constructions";
import { Furniture } from "./Furniture";
import { Floor } from "./Floor";
import { Canvas } from "@react-three/fiber";
import { SaveControl } from "./shared/features/SaveConfig/control";




export const CanvasBlock: React.FC = memo(() => {

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
        <SaveControl/>
        <Constructions/>
        <Furniture/>
        <Floor/>
      </Physics>
    </Canvas>
  );
});
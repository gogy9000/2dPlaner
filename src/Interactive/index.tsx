import React, { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



interface IInteractiveProps {

}

export const Interactive: React.FC<IInteractiveProps> = memo(({}) => {

  return (
   <Canvas camera={{position:[0,0,10]}}>
     <OrbitControls/>
     <Box position={[-4,0,0]} number={'1'}/>

     <Box rotation={[Math.PI/4,Math.PI/4,0]} number={'2'}/>
     <Box position={[4,0,0]} number={'1'}/>
   </Canvas>
  );
});

function Box(props:any){
  return(
    <mesh

      {...props}
    >
      <boxGeometry args={[2,2,2]}/>
      <meshBasicMaterial color={'gray'}/>
    </mesh>
  )
}
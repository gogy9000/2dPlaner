import React, { memo } from "react";
import { Canvas } from "@react-three/fiber";


interface IOrtoProps {

}

export const Orto: React.FC<IOrtoProps> = memo(({}) => {
  const count=10
  const mappedInstances = () => {
    const items=[]
    const start=-count/2
    const finish=count/2
    for (let i= start;i<finish;i++){
      for (let j= start;j<finish;j++){
        items.push(
          <mesh
            scale={1}
            position={[i*35,j*35,0]}
            key={`${i}${j}`}
          >
            <planeGeometry args={[30,30]}/>
            <meshBasicMaterial color={'red'}/>
          </mesh>
        )
      }
    }
    return items
  }
  return (
    <Canvas orthographic camera={{ zoom:1}}>
      {mappedInstances()}
    </Canvas>
  );
});
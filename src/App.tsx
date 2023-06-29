import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box } from "./mesh/Box";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Plane } from "./mesh/plane";
import Car from "../src/models/car/Car";

function App() {
  return (
    <div style={{height:'100vh'}}>
    <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
      {/*<Physics>*/}
      <OrbitControls/>
      <color attach={"background"} args={["lightblue"]}/>
      <hemisphereLight intensity={0.99}/>
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow={true}
      />
      <Suspense fallback={null}>
        <Car position={[10,10,-5]}/>
      </Suspense>
        {/*<Box position={[0, 10, 0]} />*/}
      {/*<Plane/>*/}
        {/*</Physics>*/}
    </Canvas>
    </div>

    // <Canvas  camera={{ position: [0, 2, 5], zoom:1 }}>
    //   <OrbitControls/>
    //   <Physics>
    //     {/*<hemisphereLight intensity={0.35}/>*/}
    //     {/*<ambientLight intensity={0.1}/>*/}
    //     <color attach={'background'} args={['lightblue']}/>
    //     <spotLight
    //       position={[10, 10, 20]}
    //       angle={0.3}
    //       penumbra={1}
    //       intensity={2}
    //       castShadow={true}
    //     />
    //     {/*<pointLight position={[10, 10, 10]}/>*/}
    //     {/*<directionalLight color="red" position={[0, 0, 5]}/>*/}
    //     <Box />
    //     <Box position={[0, 10, 0]} />
    //     <Plane/>
    //   </Physics>
    // </Canvas>

    // <Canvas camera={{position:[0,0,5]}}>
    //
    // </Canvas>
  );
}

export default App;

import React, { Suspense, useState } from "react";
import "./App.css";
import { Canvas, useThree, Vector3 } from "@react-three/fiber";
import { Box } from "./mesh/Box";
import { OrbitControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/cannon";
import { Plane } from "./planner/Canvas/meshes/Plane";
import Car from "../src/models/car/Car";
import { Orto } from "./Orto";
import { Interactive } from "./Interactive";
import { useDrag } from "react-use-gesture";
import { Block } from "./planner/Canvas/meshes/Block";
import { PhysicsBlock } from "./mesh/PhysicsBlock";
import { Planner } from "./planner";

function App() {


  return (
    <div style={{ height: "100vh" }}>
      <Planner/>
    </div>
  );
}

export default App;

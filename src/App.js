// react imports
import React from "react";
// R3F imports
import { Canvas } from "@react-three/fiber";
// Components Import
import Experience from "./Components/Experience";
//css imports
import "./App.css";
export default function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

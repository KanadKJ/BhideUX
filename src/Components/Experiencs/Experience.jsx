import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useControls } from "leva";

export default function Experience() {
  const { bgColor } = useSelector((state) => state.changeColor);
  const [clr, setClr] = useState("#000");
  //   useEffect(() => {
  //     setClr(bgColor);
  //   }, [bgColor]);

  const created = ({ gl }) => {
    // gl.setClearColor(clr, 1);
  };
//   const { x, y, z } = useControls({
//     x: { value: 1, min: 0, max: 10, step: 0.5 },

//     y: { value: 1, min: 0, max: 10, step: 0.5 },

//     z: { value: 1, min: 0, max: 10, step: 0.5 },
//   });
  return (
    <Canvas onCreated={created}>
      <pointLight intensity={5} position={[1]} color={"#fff"} />
      <Environment
        preset="studio"
        environmentIntensity={0.1}
        backgroundIntensity={0.1}
      />
      <Model />
    </Canvas>
  );
}

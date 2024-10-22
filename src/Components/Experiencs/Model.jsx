import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import glb from "../../Assets/Bhideux.glb";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF(glb);
  const meshRef = useRef();
  const { viewport } = useThree();
  //   const materialProps = {};
  const materialProps = useControls({
    thickness: { value: 0.7, min: 0, max: 3, step: 0.05 },

    roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },

    transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    ior: { value: 2.3, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 0.78, min: 0, max: 1 },

    backside: { value: true },
  });
  useEffect(() => {
    if (meshRef.current) {
      // Apply the rotation after the model is fully loaded
      meshRef.current.rotation.set(Math.PI / 2, 0, 0);
    }
  }, [nodes]); // Make sure to apply rotation once nodes are available
  useFrame((delta) => {
    meshRef.current.rotation.y += 0.009;
  });
  return (
    <group>
      <mesh ref={meshRef} {...nodes.Torus} scale={viewport.width / 8}>
        <MeshTransmissionMaterial
          thickness={materialProps.thickness}
          roughness={materialProps.roughness}
          transmission={materialProps.transmission}
          ior={materialProps.ior}
          chromaticAberration={materialProps.chromaticAberration}
          backside={true}
        />
      </mesh>
    </group>
  );
}

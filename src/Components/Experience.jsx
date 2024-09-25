import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../Assets/1.jpeg";
const Cylinders = () => {
  const cylinderRefs = useRef([]);
  const numberOfCylinders = 8;
  const radius = 15;
  const angleOffset = 0.05; // Angle offset for trail effect
  const colorMap = useLoader(TextureLoader, texture);
  useFrame((state, delta) => {
    cylinderRefs.current.forEach((cylRef, index) => {
      if (cylRef) {
        const angle = index * angleOffset; // Offset based on index
        cylRef.rotation.y = state.clock.elapsedTime * Math.sin(0.5) + angle;
        // cylRef.rotation.z = state.clock.elapsedTime * Math.sin(0.5) + angle;
        cylRef.rotation.x = state.clock.elapsedTime * Math.sin(0.5) + angle;
      }
    });
  });

  return (
    <group>
      {Array.from({ length: numberOfCylinders }, (_, i) => {
        const angle = (i / numberOfCylinders) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <mesh
            key={i}
            ref={(el) => (cylinderRefs.current[i] = el)}
            position={[x, y, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[5, 5, 1, 60, 1]} />
            <meshStandardMaterial
              color={"#101010"}
              metalness={0.8}
              roughness={0.2}
              //   map={colorMap}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default function Experience() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.z -= delta * 0.5;
  });

  return (
    <>
      <Environment preset="studio" backgroundIntensity={1} />
      <OrbitControls enableZoom={false} />
      <directionalLight intensity={2} />
      <ambientLight intensity={1} />
      <group ref={ref}>
        <Cylinders />
      </group>
    </>
  );
}

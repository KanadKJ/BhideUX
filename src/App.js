// react imports
import React, { Suspense } from "react";
// R3F imports
import { Canvas } from "@react-three/fiber";
// Components Import
import Experience from "./Components/Experience";
//css imports
import "./App.css";
import Navbar from "./Components/Navbar";
import { Perf } from "r3f-perf";
import { Html } from "@react-three/drei";
export default function App() {
  return (
    <div className="px-[10%]">
      <Navbar />
      <div className="flex justify-between gap-1 ">
        <div className="flex flex-col w-[50%] p-2 h-[80vh] justify-center items-center gap-[3vh]">
          <p className="text-[5vw] text-[#fff] font-bold leading-[4rem]">
            Crafting Digital Masterpieces
          </p>
          <p className="text-[#fefeff75]">
            Harnessing Cutting-Edge Visualization Technology to Transform Vision
            into Tailored Digital Reality
          </p>
          <div className="w-full h-[2.75vh] flex gap-[10%]">
            <button className="text-[0.8vw] px-[0.75vw] py-[20px] gap-2  h-[2.75vh] w-[10vw] bg-[#fefeff15] flex justify-between items-center rounded-[25px] text-[#fff]">
              <p className="w-full flex justify-center items-center">
                SEE MORE
              </p>
              <div className="h-[2vw] w-[3vw] flex justify-center items-center rounded-full bg-black">
                <i
                  className="fa-solid fa-location-arrow "
                  style={{
                    color: "white",
                  }}
                ></i>
              </div>
            </button>
            <button className="text-[0.8vw] px-[0.75vw] py-[20px] gap-2  h-[2.75vh] w-[10vw] bg-[#fefeff]  flex justify-between items-center rounded-[25px] text-[#000]">
              <p className="w-full flex justify-center items-center">
                GET IN TOUCH
              </p>
              <div className="h-[2vw] w-[3vw] flex justify-center items-center rounded-full bg-black">
                <i
                  className="fa-solid fa-location-arrow "
                  style={{
                    color: "white",
                  }}
                ></i>
              </div>
            </button>
          </div>
        </div>
        <div className="flex w-[50%] h-[80vh] justify-center ">
          <div className="background-element-small"></div>
          <div className="background-element-grid-small"></div>
          <Canvas
            camera={{
              position: [3, 2, 35],
            }}
            className="z-10"
          >
            <Suspense
              fallback={
                <Html>
                  <h1>Loading...</h1>
                </Html>
              }
            >
              {/* <Perf /> */}
              <Experience />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

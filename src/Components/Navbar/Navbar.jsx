import React from "react";
import logo from "../../Assets/Bhide.png";
import sub from "../../Assets/subtitle.png";
import { easeOut, motion } from "framer-motion";

export default function Navbar() {
    function name(params) {
        
    }
  const expand = {
    start: {
      height: 40,
      flexGrow: 0,
    },
    process: {
      height: 1,
      flexGrow: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="bg-transparent h-[100vh] w-full absolute top-10 text-white flex justify-center px-[64px] items-center bg-black">
      <div className="absolute top-0 w-full text-white flex justify-between px-[64px] items-center bg-transparent">
        <img className="flex-none" src={logo} width={90} />
        <motion.div
          initial="start"
          animate="process"
          variants={expand}
          className="grow bg-white h-[1px] mr-[2%] ml-[10%]"
        ></motion.div>
        <img className="flex-none" src={sub} width={90} />
      </div>
    </div>
  );
}

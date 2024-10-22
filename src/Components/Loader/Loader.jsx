import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import bhide from "../../Assets/Bhide.png";
import subtitle from "../../Assets/subtitle.png";
export default function Loader({ setIsloading }) {
  const container = {
    start: {
      height: "100vh",
    },
    process: {
      height: "20vh",
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 1,
      },
    },
    end: {
      opacity: 0,
    },
  };
  const first = {
    start: {
      width: 400,
    },
    process: {
      width: 90,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 1,
      },
    },
    end: {
      opacity: 0,
    },
  };
  const second = {
    start: {
      width: 300,
    },
    process: {
      width: 90,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 1,
      },
    },
    end: {
      opacity: 0,
    },
  };
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsloading(false);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   });
  return (
    <motion.div className="h-[100vh] w-full absolute top-0 text-white flex justify-center px-[64px] items-center bg-black">
      <motion.div
        variants={container}
        initial="start"
        animate="process"
        exit="end"
        onAnimationComplete={() => setIsloading(false)}
        className="absolute top-0 w-full text-white flex justify-between px-[64px] items-center"
      >
        <motion.img variants={first} src={bhide} />
        <motion.img variants={second} src={subtitle} />
      </motion.div>
    </motion.div>
  );
}

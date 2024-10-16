import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import v from "../../Assets/Vector.svg";
const textMotion = {
  rest: {
    color: "grey",
    width: 48,
    transition: {
      duration: 0.1,
      delay: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    color: "blue",
    width: 350,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
      // delayChildren: 0.1,
      staggerChildren: 0.03,
    },
  },
};
const dots = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "tween",
      ease: "easeInOut",
      delayChildren: 0.5,
      // staggerChildren: 0.03,
    },
  },
};

export default function LandingPage() {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [bg, setBg] = useState("#000");
  const [textColor, setTextColor] = useState("#fff");

  const handleProgress = (e) => {
    console.log(e.target.value);

    setProgress(e.target.value);

    handleColorChange();
  };
  const handleColorChange = () => {
    console.log("color change");

    switch (progress) {
      case "0":
        setBg("#fff");
        setTextColor("#000");

        break;
      case "1":
        setBg("#000");
        setTextColor("#fff");
        break;
      case "2":
        setBg("#583a3a");
        setTextColor("#e8bfbf");
        break;
      case "3":
        setBg("#1e1818");
        setTextColor("#6e6262");
        break;
      case "4":
        setBg("#263722");
        setTextColor("#99d88a");
        break;
      case "5":
        setBg("#142f27");
        setTextColor("#60d8b5");
        break;
      case "6":
        setBg("#232f3e");
        setTextColor("#789fd0");
        break;
      case "7":
        setBg("#20172c");
        setTextColor("#a986d8");
        break;
      case "8":
        setBg("#201321");
        setTextColor("#b96dbe");
        break;
      case "9":
        setBg("#2b1d23");
        setTextColor("#78636c");
        break;

      default:
        setBg("#000");
        setTextColor("#fff");
        break;
    }
  };
  return (
    // main
    <motion.div
      style={{
        backgroundColor: bg,
      }}
      className="h-[100vh] w-full flex justify-start items-center px-8"
    >
      {/* Options */}
      <div>
        <div className="text-white fixed ">
          <div>Intro</div>
          <div>Work</div>
          <div>Values</div>
          <div>Background</div>
          <div>Contact</div>
        </div>
        {/* color changer */}
        <motion.div
          className="-rotate-[90deg] fixed bottom-[300px] -left-[175px]"
          style={{
            width: "450px",
            height: "50px",
          }}
        >
          {/* proress wrapper */}
          <motion.div
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            animate="rest"
            variants={textMotion}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="p-wrapper flex flex-col justify-start items-center"
          >
            {/* dots */}
            <motion.div className="dots">
              <>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
                <motion.div variants={dots} className="dot"></motion.div>
              </>
            </motion.div>
            <input
              className="dotsProgress"
              type="range"
              min={0}
              max={17}
              step={1}
              onChange={(e) => {
                handleProgress(e);
              }}
              value={hovered ? progress : 0}
            />
            {/* Image Overlay that moves with range */}
            {/* <motion.div
            className="image-overlay"
            style={{
              position: "absolute",
              top: "0px", // Adjust as needed
            }}
            initial={{ left: 0 }}
            animate={{ left: imagePosition }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={v}
              style={{
                height: "25px",
                width: "25px",
              }}
              alt="overlay"
              width="40px"
            />
          </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
      
      <div>

      </div>
    </motion.div>
  );
}

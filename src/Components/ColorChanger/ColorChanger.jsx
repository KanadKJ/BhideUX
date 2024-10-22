import React, { useState } from "react";
import { motion } from "framer-motion";
import "../LandingPage/LandingPage.css";
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
    width: 300,
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
export default function ColorChanger({
  setHovered,
  handleProgress,
  hovered,
  progress,
}) {
  return (
    <motion.div
      className="-rotate-[90deg] fixed bottom-[245px] -left-[105px]"
      style={{
        width: "386px",
        height: "50px",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          easings: "ease",
        },
      }}
    >
      {/* proress wrapper */}
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        animate="rest"
        variants={textMotion}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="p-wrapper flex flex-col justify-start items-center"
      >
        {/* dots */}
        <motion.div className="dots">
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
      </motion.div>
    </motion.div>
  );
}

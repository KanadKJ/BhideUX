import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import "./LandingPage.css";
import v from "../../Assets/Vector.svg";
import ColorChanger from "../ColorChanger/ColorChanger";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../Redux/ColorReducer";
import bhide from "../../Assets/Bhide.png";
import subtitle from "../../Assets/subtitle.png";
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
  const { bgColor, textColor } = useSelector((state) => state.changeColor);

  const [progress, setProgress] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [bg, setBg] = useState("");
  const [tc, setTc] = useState("");
  const [isloading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (textColor) {
      setTc(textColor);
    }
  }, [textColor, bgColor]);
  const handleProgress = (e) => {
    setProgress(e.target.value);
    handleColorChange(e.target.value);
  };
  const handleColorChange = (v) => {
    // console.log("color change");

    switch (v) {
      case "0":
        dispatch(changeColor({ bg: "#fff", textColorAll: "#000" }));
        break;
      case "1":
        dispatch(changeColor({ bg: "#000", textColorAll: "#fff" }));
        break;
      case "2":
        dispatch(changeColor({ bg: "#583a3a", textColorAll: "#e8bfbf" }));
        break;
      case "3":
        dispatch(changeColor({ bg: "#1e1818", textColorAll: "#6e6262" }));
        break;
      case "4":
        dispatch(changeColor({ bg: "#263722", textColorAll: "#99d88a" }));
        break;
      case "5":
        dispatch(changeColor({ bg: "#142f27", textColorAll: "#60d8b5" }));
        break;
      case "6":
        dispatch(changeColor({ bg: "#232f3e", textColorAll: "#789fd0" }));
        break;
      case "7":
        dispatch(changeColor({ bg: "#20172c", textColorAll: "#a986d8" }));
        break;
      case "8":
        dispatch(changeColor({ bg: "#201321", textColorAll: "#b96dbe" }));
        break;
      case "9":
        dispatch(changeColor({ bg: "#2b1d23", textColorAll: "#78636c" }));
        break;

      default:
        dispatch(changeColor({ bg: "#000", textColorAll: "#fff" }));
        break;
    }
  };
  return (
    // main
    <motion.div className="h-[100vh] w-[100%] flex flex-col justify-center items-center">
      {/* navbar */}

      {/* Options */}
      <div className="grid grid-cols-4 w-[100%] gap-4 px-[64px]">
        <div className="w-[100%] ">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                easings: "ease",
              },
            }}
            style={{
              color: tc,
            }}
            className="fixed hidden sm:block pt-[20px] "
          >
            <div className="text-[20px]">Intro</div>
            <div className="text-[20px]">Work</div>
            <div className="text-[20px]">Values</div>
            <div className="text-[20px]">Background</div>
            <div className="text-[20px]">Contact</div>
          </motion.div>
          <div>
            <ColorChanger
              setHovered={setHovered}
              handleProgress={handleProgress}
              hovered={hovered}
              progress={progress}
            />
          </div>
          {/* color changer */}
        </div>
        {/* Main text */}
        <motion.div
          style={{
            color: tc,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 3,
              easings: "ease",
            },
          }}
          className="col-span-3 sm:col-span-4 md:col-span-3 text-[24px] font-[700] md:text-[32px] lg:text-[64px]"
        >
          Hello there, I’m a UX designer
          <br /> who cares about making <br />
          beautiful things that <br />
          helps people.
        </motion.div>
      </div>
    </motion.div>
  );
}

// const LoaderComponent = ({ setIsloading }) => {
//   const container = {
//     start: {
//       height: "100vh",
//     },
//     process: {
//       height: "20vh",
//       transition: {
//         duration: 1,
//         ease: easeInOut,
//         delay: 1,
//       },
//     },
//     end: {
//       opacity: 0,
//     },
//   };
//   const first = {
//     start: {
//       width: 400,
//     },
//     process: {
//       width: 90,
//       transition: {
//         duration: 1,
//         ease: easeInOut,
//         delay: 1,
//       },
//     },
//     end: {
//       opacity: 0,
//     },
//   };
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsloading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   });
//   return (
//     <motion.div
//       variants={container}
//       initial="start"
//       animate="process"
//       exit="end"
//       className="bg-transparent w-full absolute top-0 text-white flex justify-between px-[24px] items-center"
//     >
//       <motion.img variants={first} src={bhide} />
//       <motion.img variants={first} src={subtitle} />
//     </motion.div>
//   );
// };

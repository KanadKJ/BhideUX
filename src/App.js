import React, { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Experience from "./Components/Experiencs/Experience";
import { Provider } from "react-redux";
import { store } from "./Redux/CombineReducer";
import { useSelector } from "react-redux";
import Section2 from "./Components/Section2/Section2";
import Lenis from "lenis";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
export default function App() {
  const { bgColor } = useSelector((state) => state.changeColor);
  const [clr, setClr] = useState("#000");
  const [isloading, setIsloading] = useState(true);
  // Update the clr state when bgColor changes
  useEffect(() => {
    if (bgColor) {
      setClr(bgColor);
    }
  }, [bgColor]);
  useEffect(() => {
    const lensis = new Lenis();
    function raf(time) {
      lensis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        style={{
          backgroundColor: clr,
        }}
      >
        {isloading ? (
          <motion.div key="loader" className="w-full">
            <Loader setIsloading={setIsloading} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <LandingPage setIsloading={setIsloading} />
            <Section2 />
            <Section3 />
            <Section4 />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

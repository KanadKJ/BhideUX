import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// color calculator
const hexToRgb = (hex) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

const rgbToHex = (r, g, b) => {
  const toHex = (component) => component.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const getMiddleColor = (darkColor, lightColor) => {
  const darkRgb = hexToRgb(darkColor);
  const lightRgb = hexToRgb(lightColor);

  const middleRgb = {
    r: Math.round((darkRgb.r + lightRgb.r) / 2),
    g: Math.round((darkRgb.g + lightRgb.g) / 2),
    b: Math.round((darkRgb.b + lightRgb.b) / 2),
  };

  return rgbToHex(middleRgb.r, middleRgb.g, middleRgb.b);
};

const details = [
  {
    title: "StayStylist",
    desc: "I worked on the application for merchants to enhance the shopping experience by giving hyper personalizing options according to their body type and demographics.",
  },
  {
    title: "SecureStep",
    desc: "A project of an insurance tech product helping users in their insurance journey with educational tools.",
  },
  {
    title: "AnotherProject",
    desc: "This project involved building an innovative tech solution for real-time data analysis.",
  },
];

export default function Section2() {
  const { bgColor, textColor } = useSelector((state) => state.changeColor);
  const [tc, setTc] = useState("");
  const [bc, setBc] = useState("");

  useEffect(() => {
    if (textColor && bgColor) {
      setTc(textColor);
      const middleColor = getMiddleColor(bgColor, textColor);
      setBc(middleColor);
    }
  }, [textColor, bgColor]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-14 px-4 md:px-0">
      {details.map((e, index) => (
        <div
          key={index}
          style={{
            backgroundColor: bc,
          }}
          className="col-start-2 col-end-6 h-auto md:h-[435px] p-6 md:px-[76px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12"
        >
          <div className="flex justify-center md:justify-start">
            <div className="h-[150px] w-[150px] md:h-[274px] md:w-[274px] bg-gray-600"></div>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1
              style={{
                color: tc,
              }}
              className="text-[24px] md:text-[40px] font-bold"
            >
              {e.title}
            </h1>
            <p
              style={{
                color: tc,
              }}
              className="text-[16px] md:text-[20px] font-normal mt-2 md:mt-4"
            >
              {e.desc}
            </p>
            <a
              href="#"
              style={{
                color: tc,
              }}
              className="mt-4 underline"
            >
              See more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

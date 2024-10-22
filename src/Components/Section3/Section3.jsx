import React from "react";
import { useSelector } from "react-redux";

export default function Section3() {
  const { bgColor, textColor } = useSelector((state) => state.changeColor);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 pt-10 md:pt-20 gap-8  md:pr-[7.5rem] md:pl-[4.5rem]">
      {/* First Section */}
      <div className="col-start-1 md:col-start-2 md:col-end-5 h-auto md:h-[435px] gap-8 grid grid-cols-1 md:grid-cols-2">
        <div
          className="text-[36px] md:text-[64px] font-bold px-4 md:px-0"
          style={{
            color: textColor,
          }}
        >
          Useful Considered Beautiful Well made
        </div>
      </div>

      {/* Second Section */}
      <div className="col-start-1 md:col-start-2 md:col-end-5 h-auto md:h-[435px] gap-8 grid grid-cols-1 md:grid-cols-2">
        <div
          className=" text-[16px] md:text-[20px] md:col-start-2 px-4 md:px-0"
          style={{
            color: textColor,
          }}
        >
          These design values are dear to me and guide my projects. I'm
          passionate about improving my surroundings. Solving real-world
          problems beautifully is key to my identity. Teamwork empowers
          achievements beyond solo efforts. I embrace big ideas, working swiftly
          and thoughtfully, approaching tasks holistically and sustainably. I
          focus on aligning with company goals and refining details, committed
          to improvement and excellence. My work strives for a larger purpose,
          aiming to leave the world better than I found it.
        </div>
      </div>

      {/* Third Section */}
      <div className="col-start-1 md:col-start-2 md:col-end-5 h-auto md:h-[435px] gap-8 grid grid-cols-1 md:grid-cols-2">
        <div
          className="text-[16px] md:text-[20px] px-4 md:px-0"
          style={{
            color: textColor,
          }}
        >
          I studied only till 12th, got my start in advertising field designing
          and manufacturing signage solutions for the users. Leveraging my
          designing and problem solving skills, I got into UX and got a
          executive post graduate certification from IIT Roorkee and user
          experience and interaction design for AR/VR/MR/XR at University of
          Michigan through Coursera. Though I’m a fresher, I’ve worked at
          startup and at design agency, developing a wide range of
          multi-disciplinary skills in diverse contexts. My insatiable
          curiosity, high craft, and adaptability, enable me to generate impact
          in our ever-changing environment.
        </div>
      </div>
    </div>
  );
}

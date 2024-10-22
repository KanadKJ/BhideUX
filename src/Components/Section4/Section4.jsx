import React from "react";
import iit from "../../Assets/IIT.png";
import MIG from "../../Assets/MIG.png";
import { useSelector } from "react-redux";

const data = [
  {
    src: iit,
    title: "Executive Post Graduate Certification",
    course: "in UI UX Design",
    inst: "at Indian Institute of Technology, Roorkee",
  },
  {
    src: MIG,
    title: "User Experience & Interaction Design",
    course: "for AR/VR/MR/XR",
    inst: "at University of Michigan | Coursera",
  },
  {
    src: iit,
    title: "UX Designer",
    course: "Internship",
    dur: "Dec 2023 - present",
    inst: "at StayStylist",
  },
  {
    src: iit,
    title: "UX Designer",
    course: "Internship",
    dur: "June 2024 - Sept 2024",
    inst: "at Coconnexion",
  },
];

export default function Section4() {
  const { bgColor, textColor } = useSelector((state) => state.changeColor);
  return (
    <div className="h-full w-[100%] grid grid-cols-1 md:grid-cols-4 pt-10 md:pt-20 gap-32  md:pr-[7rem] md:pl-[2rem]">
      {data.map((e) => (
        <div className="col-start-2 col-end-6 h-auto  md:px-[30px] md:grid md:grid-cols-5">
          <div className="col-start-1 col-end-6">
            <img
              src={e?.src}
              alt="iit"
              className="h-[100px] w-[100px] rounded-full"
            />
          </div>
          <div
            style={{
              color: textColor,
            }}
            className="text-[48px] font-[700] col-start-1 col-end-4"
          >
            {e?.title}
          </div>
          <div className="flex justify-between col-start-1 col-end-6">
            <div
              style={{
                color: textColor,
              }}
              className="text-[20px] font-[400] flex gap-5"
            >
              <div>{e?.course}</div>
              <div>{e?.dur}</div>
            </div>
            <div
              style={{
                color: textColor,
              }}
              className="text-[20px] font-[400]"
            >
              {e.inst}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

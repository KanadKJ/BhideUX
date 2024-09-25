import React from "react";

export default function Navbar() {
  return (
    <div class="flex h-[10vh] items-center">
      <div class="flex flex-1 h-[2.5vw] justify-start">
        <div className="bg-white rounded-[25px] w-[5vw] flex justify-center items-center">
          <p className="text[0.8vw]">MENU</p>
        </div>
      </div>
      <div class="shrink-0 h-16 w-32 ..."></div>
      <div class="flex flex-1 h-[2.5vw] justify-end">
        <div className="bg-white rounded-[25px] w-[8vw] flex justify-center items-center">
          <p className="text[0.8vw]">GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
}

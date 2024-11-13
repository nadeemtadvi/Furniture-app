import React from "react";
import staticImage from "../assets/Images/couch 1.svg"


const IntroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center px-3  !h- h-[calc(90vh_-_72px)]">
      <div className="flex-none h-full flex items-center">
        <div className=" text-[2.6rem] text-white h-[318px] font-bold">
          <h4>Modern Interior</h4>
          <h4>Design Studio</h4>
          <div className="mt-12">
            <button className="rounded-full border border-yellow-500 bg-yellow-500 text-[1rem] text-black p-[4px_22px_5px]">
              Shop Now
            </button>
            <button className="ml-4 border border-white rounded-full text-white text-[1rem] p-[4px_22px_5px]">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="grow flex justify-end items-start  text-white  text-[3rem]">
        <img src={staticImage} alt="" className="" />
      </div>
    </div>
  );
};

export default IntroSection;

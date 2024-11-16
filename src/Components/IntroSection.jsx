import React from "react";
import staticImage from "../assets/Images/couch 1.svg"


const IntroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:flex items-center px-2 sm:px-3  py-10 sm:py-0  sm:h-[calc(90vh_-_72px)]">
      <div className="flex-none h-full flex items-center">
        <div className=" text-[2.2rem] sm:text-[3rem] text-white sm:h-[318px] font-bold">
          <h4>Modern Interior</h4>
          <h4>Design Studio</h4>
          <div className="mt-4 sm:mt-12 font-semibold">
            <button className="rounded-full border border-yellow-400 bg-yellow-400 text-[0.81rem] sm:text-[0.94rem] text-black p-[4px_22px_5px]">
              Shop Now
            </button>
            <button className="ml-4 border border-white rounded-full text-white text-[0.81rem] sm:text-[0.94rem] p-[4px_22px_5px]">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="grow flex justify-end items-start  text-white  text-[3rem]">
        <div className="hidden md:block">

        <img src={staticImage} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

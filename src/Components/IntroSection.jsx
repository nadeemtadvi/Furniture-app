import React from "react";
import { IntroConst } from "../Constant/constant";

const IntroSection = () => {
  return (
    <div className="">
      <div className=" max-w-screen-xl mx-auto md: items-center   md:px-3  sm:py-0  ">
       
        <div className="relative z-[] flex justify-center items-center md:rounded-[8px] sm:h-[calc(100vh_-_72px)]">
        <div className="text-center">
        <div className=" top-0 left-[-400px] md: flex-none bottom-0 m-auto h-min  items-center ">
            <div className="relative">
              <div className="absolute top-0 left-0 z-[-1] blur-[px]  h-full w-full rounded-[8px] "></div>
              <div className="z-20  text-[2.5rem] sm:text-[3rem] text-white bg- p-4 sm:p-10 rounded-[8px] font-bold bg-">
                <h4>{IntroConst.MODERN}</h4>
                <h4>{IntroConst.STUDIO}</h4>
                <div className="mt-4 sm:mt-12 font-semibold">
                  <button className="rounded-full border border-yellow-400 bg-yellow-400 text-[1.24rem] text-black p-[4px_22px_5px]">
                    {IntroConst.SHOPNOW}
                  </button>
                  <button className="ml-4 border border-white rounded-full text-white text-[1.24rem] p-[4px_22px_5px]">
                    {IntroConst.EXPLORE}
                  </button>
                </div>
              </div>
            </div>
          </div>  
        </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

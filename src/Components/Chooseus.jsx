import React from "react";
import { ChooseConst, MultiItems } from "../Constant/constant";

const Chooseus = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="lg:grid grid-cols-2 items-center">
        <div className="lg:mb-0 mb-4 sm:mb-10">
          <h4 className="capitalize text-[1.54rem] sm:text-[1.85rem] leading-tight font-semibold mb-4">
            {ChooseConst.HEADING}
          </h4>
          <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 sm:mb-10 font-normal text-[#878787]">
            {ChooseConst.TITLE}
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 ">
            {MultiItems.map((item, index) => (
              <div key={index} className="">
                <div className="relative">
                  <div>{item.ICON}</div>
                  <div className="absolute z-[-1] top-[4px] left-[9px] w-[24px] h-[24px] rounded-full bg-gray-200"></div>
                </div>
                <p className="text-[0.88rem] sm:text-[0.97rem] mb-2 capitalize font-semibold">
                  {item.TITLE}
                </p>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                  {item.SUBTEXT}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="self-center justify-self-center">
          <img
            src={ChooseConst.IMAGE}
            className="sm:w-[240px] lg:w-[350px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Chooseus;

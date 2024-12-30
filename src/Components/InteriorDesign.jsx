import React from "react";
import { GoDot } from "react-icons/go";
import { InteriorConst, MultiInterior } from "../Constant/constant";

const InteriorDesign = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:pt-[4rem] sm:pb-[9rem] px-2 sm:px-3">
      <div className="lg:grid grid-cols-2 items-center gap-10">
        <div className="relative justify-center hidden  lg:grid grid-cols-[65%_auto] mb-28 lg:mb-0">
          <div>
            <img
              src={InteriorConst.IMAGE1}
              className="w-full rounded-l-[8px]"
              alt=""
            />
          </div>
          <div>
            <div className="pl-8">
              <img
                src={InteriorConst.IMAGE2}
                className="w-full rounded-[8px]"
                alt=""
              />
            </div>
            <div className="img-container absolute right-0 bottom-[-65px]">
              <img
                src={InteriorConst.IMAGE3}
                className="imgstatic  rounded-[8px] "
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[2rem] leading-tight font-semibold mb-4 sm:mb-6">
            {InteriorConst.TITLE} <br /> {InteriorConst.BREAKTITLE}
          </h4>
          <p className="text-[1.24rem] mb-4 sm:mb-8 font-normal text-[#878787]">
            {InteriorConst.SUBTITLE}
          </p>
          <div>
            <ul className="sm:grid grid-cols-2 gap-4 mb-4 sm:mb-6 list-none">
              {MultiInterior.map((item, index) => (
                <li key={index} className="grid grid-cols-[35px_auto]">
                  <GoDot className="mt-1 text-[0.9rem] " />
                  <p className="grow text-[1.24rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                    {item.TEXT}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <button className="text-white font-semibold bg-neutral-700 text-[1.24rem] rounded-full p-[4px_24px_5px]">
            {InteriorConst.EXPLORE}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;

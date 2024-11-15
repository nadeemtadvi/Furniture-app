import React from "react";
import imgStatic from "../assets/Images/product-1.svg";
import imgStatic2 from "../assets/Images/product-2.svg";
import imgStatic3 from "../assets/Images/product-3.svg";

const Explore = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6  sm:py-16 px-2 sm:px-3">
      <div className="lg:grid grid-cols-[20%_auto] items-center gap-12">
        <div className="lg:mb-0 mb-10 sm:mb-16">
          <h4 className="text-[1.54rem] sm:text-[1.85rem] leading-tight font-semibold mb-4">
            Crafted with excellent material.
          </h4>
          <p className="text-[0.81rem] sm:text-[0.94rem] mb-5 sm:mb-10 font-normal text-[#878787]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro.
          </p>
          <button className="font-semibold text-white bg-neutral-700 text-[0.81rem] sm:text-[0.94rem] rounded-full p-[4px_24px_5px]">
            Explore
          </button>
        </div>
        <div className=" grid grid-cols-3  items-center ">
          <div className="border-r border-neutral-200">
            <img src={imgStatic} className="sm:w-[240px] sm:h-[240px] mb-3 sm:mb-6 mx-auto " alt="" />
            <div className="text-[0.81rem] sm:text-[0.94rem]  text-center ">
              <h4 className="font-semibold">Nordiac Chair</h4>
              <h4 className="font-bold text-[1rem]">$100</h4>
            </div>
          </div>

          <div className="border-r border-neutral-200">
            <img src={imgStatic2} className="sm:w-[240px] sm:h-[240px] mx-auto mb-3 sm:mb-6" alt="" />
            <div className="text-[0.81rem] sm:text-[0.94rem] text-center">
            <h4 className="font-semibold">Nordiac Chair</h4>
            <h4 className="font-bold text-[1rem]">$100</h4>
            </div>
          </div>
          <div className=" ">
            <img src={imgStatic3} className="sm:w-[240px] sm:h-[240px] mx-auto mb-3 sm:mb-6" alt="" />
            <div className="  text-center">
            <h4 className="font-semibold text-[0.81rem] sm:text-[0.94rem]">Nordiac Chair</h4>
            <h4 className="font-bold text-[1rem]">$100</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

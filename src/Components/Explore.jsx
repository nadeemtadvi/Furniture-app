import React from "react";
import imgStatic from "../assets/Images/product-1.svg";
import imgStatic2 from "../assets/Images/product-2.svg";
import imgStatic3 from "../assets/Images/product-3.svg";

const Explore = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <div className="grid grid-cols-[20%_auto] items-center gap-12">
        <div className="">
          <h4 className="text-[1.6rem] leading-tight font-semibold mb-4">
            Crafted with excellent material.
          </h4>
          <p className="text-[0.8rem] mb-10 font-light text-[#878787]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro.
          </p>
          <button className="text-white bg-neutral-700 text-[1rem] rounded-full p-[4px_24px_5px]">
            Explore
          </button>
        </div>
        <div className=" grid grid-cols-3  items-center ">
          <div className="border-r border-neutral-200">
            <img src={imgStatic} className="w-[240px] h-[240px] mb-6 mx-auto " alt="" />
            <div className="text-[1rem] font-medium text-center ">
              <h4>Nordiac Chair</h4>
              <h4>$100</h4>
            </div>
          </div>

          <div className="border-r border-neutral-200">
            <img src={imgStatic2} className="w-[240px] h-[240px] mx-auto mb-6" alt="" />
            <div className="text-[1rem] font-medium text-center">
              <h4>Nordiac Chair</h4>
              <h4>$100</h4>
            </div>
          </div>
          <div className=" ">
            <img src={imgStatic3} className="w-[240px] h-[240px] mx-auto mb-6" alt="" />
            <div className="text-[1rem] font-medium text-center">
              <h4>Nordiac Chair</h4>
              <h4>$100</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

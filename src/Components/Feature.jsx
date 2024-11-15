import React from "react";
import imageStatic from "../assets/Images/product-1.svg";
import imageStatic2 from "../assets/Images/product-2.svg";
import imageStatic3 from "../assets/Images/product-3.svg";

const Feature = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="sm:grid grid-cols-3 gap-6">
        <div className="flex gap-6">
          <div className="flex-none">
            <img src={imageStatic} className="w-[120px] h-[120px]" alt="" />
          </div>
          <div className="grow self-center">
            <h4 className="text-[0.81rem] sm:text-[0.94rem] mb-2 capitalize font-semibold">
              Nordiac Chair
            </h4>
            <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 font-normal text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
            <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 font-medium text-[#5e5e5e]">
              Read more{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-none">
            <img src={imageStatic2} className="w-[120px] h-[120px]" alt="" />
          </div>
          <div className="grow self-center">
            <h4 className="text-[0.81rem] sm:text-[0.94rem] mb-2 capitalize font-semibold">
              Nordiac Chair
            </h4>
            <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 font-normal text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
            <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 font-medium text-[#5e5e5e]">
              Read more{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-none">
            <img src={imageStatic3} className="w-[120px] h-[120px]" alt="" />
          </div>
          <div className="grow self-center">
            <h4 className="text-[0.81rem] sm:text-[0.94rem] mb-2 capitalize font-semibold">
              Nordiac Chair
            </h4>
            <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 font-normal text-[#878787]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
            <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 font-medium text-[#5e5e5e]">
              Read more{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

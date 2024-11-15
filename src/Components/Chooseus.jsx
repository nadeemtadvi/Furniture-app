import React from "react";
import imgStatic from "../assets/Images/why-choose-us-img 1.svg";
import { FiTruck } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { PiArrowsCounterClockwise } from "react-icons/pi";

const Chooseus = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="lg:grid grid-cols-2 items-center">
        <div className="lg:mb-0 mb-4 sm:mb-10">
          <h4 className="capitalize text-[1.54rem] sm:text-[1.85rem] leading-tight font-semibold mb-4">
            Why choose us
          </h4>
          <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 sm:mb-10 font-normal text-[#878787]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ipsa tempore non sunt. Unde distinctio consequatur quidem minus
            ullam qui laudantium alias placeat nihil.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 ">
            <div className="">
              <div className="relative">
                <div>
                  <FiTruck className="text-[1.5rem] mb-2" />
                </div>
                <div className="absolute z-[-1] top-[4px] left-[9px] w-[24px] h-[24px] rounded-full bg-gray-200"></div>
              </div>
              <p className="text-[0.88rem] sm:text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div className="relative">
                <div>
                  <FiShoppingBag className="text-[1.5rem] mb-2" />
                </div>
                <div className="absolute z-[-1] top-[4px] left-[9px] w-[24px] h-[24px] rounded-full bg-gray-200"></div>
              </div>
              <p className="text-[0.88rem] sm:text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div className="relative">
                <div>
                  <HiOutlineSupport className="text-[1.5rem] mb-2" />
                </div>
                <div className="absolute z-[-1] top-[4px] left-[9px] w-[24px] h-[24px] rounded-full bg-gray-200"></div>
              </div>
              <p className="text-[0.88rem] sm:text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div className="relative">
                <div>
                  <PiArrowsCounterClockwise className="text-[1.5rem] mb-2" />
                </div>
                <div className="absolute z-[-1] top-[4px] left-[9px] w-[24px] h-[24px] rounded-full bg-gray-200"></div>
              </div>
              <p className="text-[0.88rem] sm:text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
          </div>
        </div>
        <div className="self-center justify-self-center">
          <img src={imgStatic} className="sm:w-[240px] lg:w-[350px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chooseus;

import React from "react";
import imageStatic from "../assets/Images/img-grid-1 1.svg";
import imageStatic2 from "../assets/Images/img-grid-2 1.svg";
import imageStatic3 from "../assets/Images/img-grid-3 1.svg";
import { GoDot } from "react-icons/go";
const InteriorDesign = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:pt-[4rem] sm:pb-[9rem] px-2 sm:px-3">
      <div className="lg:grid grid-cols-2 items-center gap-10">
        <div className="relative justify-center hidden  lg:grid grid-cols-[65%_auto] mb-28 lg:mb-0">
          <div>
            <img src={imageStatic} className="w-full rounded-l-[8px]" alt="" />
          </div>
          <div>
            <div className="pl-8">
              <img src={imageStatic2} className="w-full rounded-[8px]" alt="" />
            </div>
            <div className="img-container absolute right-0 bottom-[-65px]">
              <img
                src={imageStatic3}
                className="imgstatic  rounded-[8px] "
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[1.54rem] sm:text-[1.85rem] leading-tight font-semibold mb-4 sm:mb-6">
            We help you make <br /> Modern Interior Design
          </h4>
          <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 sm:mb-8 font-normal text-[#878787]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro.
          </p>
          <div>
            <ul className="sm:grid grid-cols-2 gap-4 mb-4 sm:mb-6 list-none">
              <li className="grid grid-cols-[35px_auto]">
                <GoDot className="mt-1 text-[0.9rem] " />
                <p className="grow text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="grid grid-cols-[35px_auto]">
                <GoDot className="mt-1 text-[0.9rem]" />
                <p className="grow text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="grid grid-cols-[35px_auto]">
                <GoDot className="mt-1 text-[0.9rem]" />
                <p className="grow text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="grid grid-cols-[35px_auto]">
                <GoDot className="mt-1 text-[0.9rem]" />
                <p className="grow text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-4 font-normal text-[#878787]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul>
          </div>
          <button className="text-white font-semibold bg-neutral-700 text-[0.81rem] sm:text-[0.94rem] rounded-full p-[4px_24px_5px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;

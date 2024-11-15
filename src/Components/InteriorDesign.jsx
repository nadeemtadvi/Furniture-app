import React from "react";
import imageStatic from "../assets/Images/img-grid-1 1.svg";
import imageStatic2 from "../assets/Images/img-grid-2 1.svg";
import imageStatic3 from "../assets/Images/img-grid-3 1.svg";

const InteriorDesign = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-[4rem] pb-[9rem] px-3">
      <div className="grid grid-cols-2 items-center gap-10">
        <div className="relative grid grid-cols-[65%_auto]">
          <div>
            <img
              src={imageStatic}
              className="w-full rounded-l-[8px]"
              alt=""
            />
          </div>
          <div>
            <div className="pl-8">
              <img src={imageStatic2} className=" rounded-[8px]" alt="" />
            </div>
            <div className="absolute right-0 bottom-[-65px]">
              <img src={imageStatic3} className="rounded-[8px] " alt="" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[1.85rem] leading-tight font-semibold mb-6">
            We help you make <br /> Modern Interior Design
          </h4>
          <p className="text-[0.94rem] mb-8 font-normal text-[#878787]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-none">Dot</div>
              <p className="grow text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-none">Dot</div>
              <p className="grow text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-none">Dot</div>
              <p className="grow text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-none">Dot</div>
              <p className="grow text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <button className="text-white font-semibold bg-neutral-700 text-[0.94rem] rounded-full p-[4px_24px_5px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;

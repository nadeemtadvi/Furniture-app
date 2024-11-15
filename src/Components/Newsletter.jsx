import React from "react";
import imgStatic from "../assets/Images/pngwing 2.svg";

const Newsletter = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <div className="flex ">
        <div className="grow self-center">
          <div className="flex gap-4  mb-6">
            <div className="flex-none">Icon</div>
            <div className="grow">
              <h4 className="text-[0.97rem] font-semibold text-black">
                Subscribe to Newsletter
              </h4>
            </div>
          </div>
          <form action="">
            <div className="flex items-center gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="text-[0.86rem] font-normal text-black placeholder:text-black focus:ring-1 focus:ring-teal-700 outline-none rounded-[10px] py-2.5 px-3 border border-[#d4d4d4]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[0.86rem] font-normal text-black placeholder:text-black focus:ring-1 focus:ring-teal-700 outline-none rounded-[10px] py-2.5 px-3 border border-[#d4d4d4]"
              />
              <div>Icon</div>
            </div>
          </form>
        </div>
        <div className="flex-none">
          <img src={imgStatic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

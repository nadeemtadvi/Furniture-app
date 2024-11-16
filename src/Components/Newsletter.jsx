import React from "react";
import imgStatic from "../assets/Images/pngwing 2.svg";
import { IoMailOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="sm:flex ">
        <div className="grow self-center">
          <div className="flex items-center gap-3  mb-4 sm:mb-6">
            <div className="flex-none text-gray-400 text-[1.6rem]"><IoMailOutline /></div>
            <div className="grow">
              <h4 className="text-[0.88rem] sm:text-[0.97rem] font-semibold text-black">
                Subscribe to Newsletter
              </h4>
            </div>
          </div>
          <form action=" " className="mb-4 sm:mb-0 ">
            <div className="sm:flex items-center gap-6">
              <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="text-[0.86rem] w-[-webkit-fill-available] sm:w-auto mb-4 sm:mb-0 font-normal text-black placeholder:text-black focus:ring-1 focus:ring-teal-700 outline-none rounded-[10px] py-2.5 px-2 sm:px-3 border border-[#d4d4d4]"
              />
              </div>
              <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[0.86rem] w-[-webkit-fill-available] sm:w-auto mb-4 sm:mb-0 font-normal text-black placeholder:text-black focus:ring-1 focus:ring-teal-700 outline-none rounded-[10px] py-2.5 px-2 sm:px-3 border border-[#d4d4d4]"
              /></div>
              <div>
                <span className=" rounded-[10px] flex items-center justify-center text-[1.4rem] h-[42px] px-2 sm:px-3 bg-[#0f766e] text-white"><FaTelegramPlane/></span></div>
            </div>
          </form>
        </div>
        <div className="">
          <img src={imgStatic} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Newsletter;

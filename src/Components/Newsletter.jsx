import React from "react";
import imgNews from "../assets/Images/pngwing.png";
import { IoMailOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { NewsletterConst } from "../Constant/constant";
const Newsletter = () => {
  return (
    <div className="bg-[#0f766e12]">
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="sm:flex ">
        <div className="grow self-center">
          <div className="flex items-center gap-3  mb-4 sm:mb-8">
            <div className="flex-none text-gray-600 text-[1.9rem]"><IoMailOutline /></div>
            <div className="grow">
              <h4 className="text-[1.54rem] sm:text-[1.85rem] font-semibold text-black">
                {NewsletterConst.TITLE}
              </h4>
            </div>
          </div>
          <form action=" " className="mb-4 sm:mb-0 ">
            <div className="sm:flex items-center gap-6">
              <div>
              <input
                type="text"
                placeholder={NewsletterConst.INPUTNAME}
                className="text-[0.86rem] w-[-webkit-fill-available] sm:w-auto mb-4 sm:mb-0 font-normal text-black placeholder:text-black focus:ring-1 focus:ring-teal-700 outline-none rounded-[10px] py-2.5 px-2 sm:px-3 border border-[#d4d4d4]"
              />
              </div>
              <div>
              <input
                type="email"
                placeholder={NewsletterConst.INPUTEMAIL}
                className="text-[0.86rem] w-[-webkit-fill-available] sm:w-auto mb-4 sm:mb-0 font-normal text-black placeholder:text-black focus:ring-1 focus:ring-teal-700 outline-none rounded-[10px] py-2.5 px-2 sm:px-3 border border-[#d4d4d4]"
              /></div>
              <div>
                <span className=" rounded-[10px] flex items-center justify-center text-[1.4rem] h-[42px] px-2 sm:px-3 bg-[#0f766e] text-white"><FaTelegramPlane/></span></div>
            </div>
          </form>
        </div>
        <div className="">
          <img src={imgNews} className="w-[280px] h-[280px] mx-auto lg:mr-24" alt="" />
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Newsletter;

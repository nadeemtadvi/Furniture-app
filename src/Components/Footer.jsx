import React from "react";
import imgLogo from "../assets/Images/Shanti.png";
import { FooterConst } from "../Constant/constant";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="">
        <img src={imgLogo} className="w-[140px] rounded-[8px] mb-4" alt="" />
      </div>
      <div className="sm:grid grid-cols-[37%_auto] gap-10 mb-4">
        <div className="text-[0.81rem] sm:text-[0.94rem] mb-4 sm:mb-0  font-normal text-[#878787]">
          {FooterConst.TEXT}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <ul className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-0  font-normal text-[#878787]">
            {FooterConst.ABOUT.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
          <ul className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-0  font-normal text-[#878787]">
            {FooterConst.CONTACT.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
          <ul className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-0  font-normal text-[#878787]">
            {FooterConst.JOB.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
          <ul className="text-[0.81rem] sm:text-[0.94rem] font-normal text-[#878787]">
            {FooterConst.CHAIR.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {FooterConst.SOCIALICON.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 w-[36px] h-[36px] rounded-full flex items-center justify-center text-gray-800"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

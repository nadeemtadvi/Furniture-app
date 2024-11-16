import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import imgLogo from "../assets/Images/Shanti.png";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="">
        <img src={imgLogo} className="w-[140px] rounded-[8px] mb-4" alt="" />
      </div>
      <div className="sm:grid grid-cols-[37%_auto] gap-10 mb-4">
        <div className="text-[0.81rem] sm:text-[0.94rem] mb-4 sm:mb-0  font-normal text-[#878787]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          placeat beatae! Error ab totam adipisci nam porro. Nemo quisquam quos
          cupiditate vero quae perspiciatis repudiandae.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <ul className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-0  font-normal text-[#878787]">
            <li className="mb-1">About us</li>
            <li className="mb-1">Services</li>
            <li className="mb-1">Blog</li>
            <li className="mb-1">Contact us</li>
          </ul>
          <ul className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-0  font-normal text-[#878787]">
            <li className="mb-1">Support</li>
            <li className="mb-1">Knowledge base</li>
            <li className="mb-1">Live chat</li>
          </ul>
          <ul className="text-[0.81rem] sm:text-[0.94rem] mb-2 sm:mb-0  font-normal text-[#878787]">
            <li className="mb-1">Jobs</li>
            <li className="mb-1">Our team</li>
            <li className="mb-1">Leadership</li>
            <li className="mb-1">Privacy Policy</li>
          </ul>
          <ul className="text-[0.81rem] sm:text-[0.94rem] font-normal text-[#878787]">
            <li className="mb-1">Nordiac Chair</li>
            <li className="mb-1">Kruzo Aero</li>
            <li className="mb-1">Ergonomic</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="bg-gray-200 w-[36px] h-[36px] rounded-full flex items-center justify-center text-gray-800"><FaFacebookF/></div>
      <div className="bg-gray-200 w-[36px] h-[36px] rounded-full flex items-center justify-center text-gray-800"><IoLogoInstagram/></div>
      <div className="bg-gray-200 w-[36px] h-[36px] rounded-full flex items-center justify-center text-gray-800"><FaTwitter/></div>
      <div className="bg-gray-200 w-[36px] h-[36px] rounded-full flex items-center justify-center text-gray-800"><FaLinkedinIn/></div>
      </div>
    </div>
  );
};

export default Footer;

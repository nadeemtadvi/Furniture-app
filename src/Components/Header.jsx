import React from "react";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto  py-6 text-[1.2rem] text-white h-[72px] flex px-2 sm:px-3 font-medium">
      <div className="flex items-center justify-between w-full mx-auto">
        <div>LOGO</div>
        <div className="flex items-center gap-16 text-[0.81rem] sm:text-[0.94rem]">
          <div className="hidden lg:block">
          <ul className="flex items-center gap-16">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          </div>
          <div className="flex items-center gap-10 text-[1.2rem]">
            <div><FiUser/></div>
            <div><FiShoppingCart/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

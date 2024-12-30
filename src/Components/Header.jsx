import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import imgLogo from "../assets/Images/Shanti.png";
import { HiMenu } from "react-icons/hi";
import { HeaderConst } from "../Constant/constant";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="max-w-screen-xl mx-auto  py-6 text-[1.2rem] text-white h-[72px] flex px-2 sm:px-3 font-medium">
      <div className="flex items-center justify-between w-full mx-auto">
        <div>
          <img src={imgLogo} className="w-[92px] sm:w-[140px] rounded-[8px] " alt="" />
        </div>
        <div className="flex items-center gap-16 text-[1.24rem]">
          <div className="hidden lg:block">
            <ul className="flex items-center gap-16">
              {HeaderConst.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-10 text-[1.2rem]">
            <div>
              <FiUser />
            </div>
            <div>
              <FiShoppingCart />
            </div>
            <div>
              <div className="lg:hidden block">
                <div className="relative">
                  <button onClick={handleToggle} className="text-xl">
                    <HiMenu className="dark:text-white" />
                  </button>
                  {toggle ? (
                    <div className="">
                      <div
                        onClick={handleToggle}
                        className="fixed z-10 bg-transparent top-0 right-0 left-0 bottom-0 m-auto "
                      ></div>
                      <div className="absolute z-20 top-[45px] rounded-[8px] overflow-hidden bg-white dark:bg-darksectionColor dark:text-white left-[-130px]">
                        <ul className="shadow-md min-w-[150px]  !pb-0 text-[0.94rem]">
                          {HeaderConst.map((item, index) => (
                            <li
                              className="p-2.5  border-b border-gray-300 text-black "
                              key={index}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

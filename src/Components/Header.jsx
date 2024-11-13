import React from "react";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto  py-6 text-[1.2rem] text-white h-[72px] flex px-3">
      <div className="flex items-center justify-between w-full mx-auto">
        <div>LOGO</div>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-16">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <div className="flex items-center gap-16">
            <div>IC</div>
            <div>IC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

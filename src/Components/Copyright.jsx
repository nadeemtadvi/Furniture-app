import React from "react";
import { CopyrightConst } from "../Constant/constant";

const Copyright = () => {
  return (
    <div className="max-w-screen-xl border-t border-gray-300 mx-auto py-3 sm:py-8 px-2 sm:px-3">
      <div className="sm:flex justify-between items-center text-[0.81rem] sm:text-[0.94rem] font-normal text-[#878787]">
        <h4 className="mb-2 sm:mb-0 ">{CopyrightConst.COPYRIGHT}</h4>
        <div className="flex items-center gap-6">
          <h4>{CopyrightConst.TERMS}</h4>
          <h4>{CopyrightConst.PRIVACY}</h4>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

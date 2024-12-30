import React from "react";
import { MultiRecentBlog, RecentBlogConst } from "../Constant/constant";

const RecentBlog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h4 className="text-[2rem] leading-tight font-semibold ">
          {RecentBlogConst.TITLE}
        </h4>
        <h5 className="capitalize text-[1.24rem] font-medium text-black  border-b-2 border-black">
          {RecentBlogConst.VIEW}
        </h5>
      </div>
      <div className="sm:grid grid-cols-3 gap-10">
        {MultiRecentBlog.map((item, index) => (
          <div key={index} className="mb-4 sm:mb-0">
            <img
              src={item.IMAGE}
              className="rounded-[8px] w-full mb-4 sm:mb-6"
              alt=""
            />
            <h4 className="text-[1.24rem] font-semibold text-black ">
              {item.TITLE}
            </h4>
            <p className="text-[0.89rem] font-normal text-black ">
              <span className="italic">by</span>
              <span className="font-semibold"> {item.WRITER}</span>
              <span className="italic"> on</span>
              <span className="font-semibold"> {item.DATE}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;

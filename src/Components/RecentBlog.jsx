import React from "react";
import imgStatic from "../assets/Images/post-1 1.svg";
import imgStatic2 from "../assets/Images/post-2 1.svg";
import imgStatic3 from "../assets/Images/post-3 1.svg";

const RecentBlog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-[1.85rem] leading-tight font-semibold ">
          Recent Blog
        </h4>
        <h5 className="capitalize text-[0.94rem] font-medium text-black  border-b-2 border-black">
          view all posts
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <img src={imgStatic} className="rounded-[8px] w-full mb-6" alt="" />
          <h4 className="text-[0.94rem] font-semibold text-black ">
            First Time Home Owne Ideas
          </h4>
          <p className="text-[0.68rem] font-normal text-black ">
            <span className="italic">by</span>
            <span className="font-semibold"> Nana Ama</span>
            <span className="italic"> on</span>
            <span className="font-semibold"> Nov 18th 2024</span>
          </p>
        </div>
        <div className="">
          <img src={imgStatic2} className="rounded-[8px] w-full mb-6" alt="" />
          <h4 className="text-[0.94rem] font-semibold text-black ">
            First Time Home Owne Ideas
          </h4>
          <p className="text-[0.68rem] font-normal text-black ">
            <span className="italic">by</span>
            <span className="font-semibold"> Nana Ama</span>
            <span className="italic"> on</span>
            <span className="font-semibold"> Nov 18th 2024</span>
          </p>
        </div>
        <div className="">
          <img src={imgStatic3} className="rounded-[8px] w-full mb-6" alt="" />
          <h4 className="text-[0.94rem] font-semibold text-black ">
            First Time Home Owne Ideas
          </h4>
          <p className="text-[0.68rem] font-normal text-black ">
            <span className="italic">by</span>
            <span className="font-semibold"> Nana Ama</span>
            <span className="italic"> on</span>
            <span className="font-semibold"> Nov 18th 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;

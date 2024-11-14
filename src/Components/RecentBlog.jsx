import React from "react";
import imgStatic from "../assets/Images/post-1 1.svg";
import imgStatic2 from "../assets/Images/post-2 1.svg";
import imgStatic3 from "../assets/Images/post-3 1.svg";

const RecentBlog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-[1.6rem] leading-tight font-semibold ">
          Recent Blog
        </h4>
        <h5 className="capitalize text-[0.85rem] font-light text-black underline">
          view all posts
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <img src={imgStatic} className="rounded-[8px] w-full mb-6" alt="" />
          <h4  className="text-[0.85rem] font-light text-black ">First Time Home Owne Ideas</h4>
          <p className="text-[0.68rem] font-light text-black ">by Nana Ama on Nov 18th 2024</p>
        </div>
        <div className="">
          <img src={imgStatic2} className="rounded-[8px] w-full mb-6" alt="" />
          <h4  className="text-[0.85rem] font-light text-black ">First Time Home Owne Ideas</h4>
          <p className="text-[0.68rem] font-light text-black ">by Nana Ama on Nov 18th 2024</p>
        </div>
        <div className="">
          <img src={imgStatic3} className="rounded-[8px] w-full mb-6" alt="" />
          <h4  className="text-[0.85rem] font-light text-black ">First Time Home Owne Ideas</h4>
          <p className="text-[0.68rem] font-light text-black ">by Nana Ama on Nov 18th 2024</p>
        </div>
      </div>

    </div>
  );
};

export default RecentBlog;

import React from "react";

import Slider from "react-slick";
import { ExploreConst, MultiChair } from "../Constant/constant";

const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: false,
          speed: 500,
          autoplaySpeed: 500,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-xl mx-auto py-6  sm:py-16 px-2 sm:px-3">
      <div className="lg:grid grid-cols-[25%_auto] items-center gap-12">
        <div className=" lg:mb-0 mb-10 sm:mb-16">
          <h4 className="text-[2rem] leading-tight font-semibold mb-4">
            {ExploreConst.CRAFT}
          </h4>
          <p className="text-[1.24rem] mb-5 sm:mb-10 font-normal text-[#878787]">
            {ExploreConst.SUBTEXT}
          </p>
          <button className="font-semibold text-white bg-neutral-700 text-[1.24rem] rounded-full p-[4px_24px_5px]">
            {ExploreConst.EXPLORE}
          </button>
        </div>
        <div className="lg:overflow-hidden">
          <div className="">
            <Slider {...settings}>
              {MultiChair.map((item, index) => (
                <div key={index} className="border-r border-neutral-200">
                  <img
                    src={item.IMAGE}
                    className=" mb-3 sm:mb-6 mx-auto "
                    alt=""
                  />
                  <div className="text-[1.24rem]  text-center ">
                    <h4 className="font-semibold">{item.CHAIR}</h4>
                    <h4 className="font-bold text-[1rem]">{item.PRICE}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

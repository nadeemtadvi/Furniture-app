import React from "react";
import Slider from "react-slick";
import { MultiNordiac } from "../Constant/constant";

const Feature = () => {
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
        breakpoint: 1274,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="">
        <Slider {...settings}>
          {MultiNordiac.map((item, index) => (
            <div key={index}>
              <div className="flex gap-2 sm:gap-6">
                <div className="flex-none relative">
                  <img src={item.IMG} className="w-[120px] h-[120px]" alt="" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 m-auto bg-gray-200 rounded-[8px] w-[90px] h-[90px] z-[-1]"></div>
                </div>
                <div className="grow self-center">
                  <h4 className="text-[1.24rem] mb-2 capitalize font-semibold">
                    {item.CHAIR}
                  </h4>
                  <p className="text-[1.24rem] mb-2 font-normal text-[#878787]">
                    {item.TEXT}
                  </p>
                  <p className="text-[1.24rem] mb-4 font-medium text-[#5e5e5e]">
                    {item.READ}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feature;

import React from "react";
import imageStatic from "../assets/Images/product-1.svg";
import imageStatic2 from "../assets/Images/product-2.svg";
import imageStatic3 from "../assets/Images/product-3.svg";
import Slider from "react-slick";

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: false,
          speed: 500,
          autoplaySpeed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    
    ]
  };
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <div className="">
        <Slider {...settings}>
          <div>
            <div className="flex gap-2 sm:gap-6">
              <div className="flex-none relative">
                <img src={imageStatic} className="w-[120px] h-[120px]" alt="" />
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto bg-gray-200 rounded-[8px] w-[90px] h-[90px] z-[-1]"></div>
              </div>
              <div className="grow self-center">
                <h4 className="text-[0.81rem] sm:text-[0.94rem] mb-2 capitalize font-semibold">
                  Nordiac Chair
                </h4>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 font-normal text-[#878787]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 font-medium text-[#5e5e5e]">
                  Read more{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 sm:gap-6">
              <div className="flex-none relative">
                <img
                  src={imageStatic2}
                  className="w-[120px] h-[120px]"
                  alt=""
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto bg-gray-200 rounded-[8px] w-[90px] h-[90px] z-[-1]"></div>
              </div>
              <div className="grow self-center">
                <h4 className="text-[0.81rem] sm:text-[0.94rem] mb-2 capitalize font-semibold">
                  Nordiac Chair
                </h4>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 font-normal text-[#878787]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 font-medium text-[#5e5e5e]">
                  Read more{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 sm:gap-6">
              <div className="flex-none relative">
                <img
                  src={imageStatic3}
                  className="w-[120px] h-[120px]"
                  alt=""
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto bg-gray-200 rounded-[8px] w-[90px] h-[90px] z-[-1]"></div>
              </div>
              <div className="grow self-center">
                <h4 className="text-[0.81rem] sm:text-[0.94rem] mb-2 capitalize font-semibold">
                  Nordiac Chair
                </h4>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-2 font-normal text-[#878787]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
                <p className="text-[0.81rem] sm:text-[0.94rem] mb-4 font-medium text-[#5e5e5e]">
                  Read more{" "}
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Feature;

import React from "react";
import Slider from "react-slick";
import { MultiTestimonial, TestimonialConst } from "../Constant/constant";

const Testimonial = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-screen-xl mx-auto py-6 sm:py-16 px-2 sm:px-3">
      <h4 className="text-[2rem] leading-tight font-semibold mb-4 sm:mb-10 text-center">
        {TestimonialConst.TITLE}
      </h4>
      <div className="">
        <Slider {...settings}>
          {MultiTestimonial.map((item, index) => (
            <div key={index} className="">
              <div className="sm:w-[600px] mx-auto py-3 sm:py-6 mb-6 rounded-[10px] bg-gray-100">
                <p className=" text-[1.24rem] px-3 sm:px-6 mb-4 sm:mb-8 font-normal text-black text-justify">
                  {item.TEXT}
                </p>
                <div className="flex items-center justify-center ">
                  <div className="text-center">
                    <img
                      src={item.IMAGE}
                      className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                      alt=""
                    />
                    <h4 className="text-[1.24rem] font-medium text-black">
                      {item.NAME}
                    </h4>
                    <p className="text-[1rem] mb-2 font-medium text-[#878787]">
                      {item.PROFILE}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import imgprofile from "../assets/Images/pexels-amir-abbaspoor-748889438-29391856.jpg";
import Slider from "react-slick";

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
      <h4 className="text-[1.54rem] sm:text-[1.85rem] leading-tight font-semibold mb-4 sm:mb-10 text-center">
        Testimonials
      </h4>
      <div className="">
        <Slider {...settings}>
          <div className="">
            <div className="sm:w-[600px] mx-auto py-3 sm:py-6 mb-6 rounded-[10px] bg-gray-100">
              <p className=" text-[0.81rem] sm:text-[0.94rem] px-3 sm:px-6 mb-4 sm:mb-8 font-normal text-black text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quis possimus labore aliquid ratione rerum
                necessitatibus unde. Doloribus, atque porro. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Voluptates, natus. Lorem
                ipsum dolor sit amet.
              </p>
              <div className="flex items-center justify-center ">
                <div className="text-center">
                  <img
                    src={imgprofile}
                    className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                    alt=""
                  />
                  <h4 className="text-[0.81rem] sm:text-[0.94rem] font-medium text-black">
                    Michelle Anna
                  </h4>
                  <p className="text-[0.75rem] mb-2 font-medium text-[#878787]">
                    Ceo and Co-Founder, XYZ..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="sm:w-[600px] mx-auto py-3 sm:py-6 mb-6 rounded-[10px] bg-gray-100">
              <p className=" text-[0.81rem] sm:text-[0.94rem] px-3 sm:px-6 mb-4 sm:mb-8 font-normal text-black text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quis possimus labore aliquid ratione rerum
                necessitatibus unde. Doloribus, atque porro. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Voluptates, natus. Lorem
                ipsum dolor sit amet.
              </p>
              <div className="flex items-center justify-center ">
                <div className="text-center">
                  <img
                    src={imgprofile}
                    className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                    alt=""
                  />
                  <h4 className="text-[0.81rem] sm:text-[0.94rem] font-medium text-black">
                    Michelle Anna
                  </h4>
                  <p className="text-[0.75rem] mb-2 font-medium text-[#878787]">
                    Ceo and Co-Founder, XYZ..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="sm:w-[600px] mx-auto py-3 sm:py-6 mb-6 rounded-[10px] bg-gray-100">
              <p className=" text-[0.81rem] sm:text-[0.94rem] px-3 sm:px-6 mb-4 sm:mb-8 font-normal text-black text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quis possimus labore aliquid ratione rerum
                necessitatibus unde. Doloribus, atque porro. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Voluptates, natus. Lorem
                ipsum dolor sit amet.
              </p>
              <div className="flex items-center justify-center ">
                <div className="text-center">
                  <img
                    src={imgprofile}
                    className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                    alt=""
                  />
                  <h4 className="text-[0.81rem] sm:text-[0.94rem] font-medium text-black">
                    Michelle Anna
                  </h4>
                  <p className="text-[0.75rem] mb-2 font-medium text-[#878787]">
                    Ceo and Co-Founder, XYZ..
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

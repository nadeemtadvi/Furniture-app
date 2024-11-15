import React from "react";
import imgprofile from "../assets/Images/pexels-amir-abbaspoor-748889438-29391856.jpg";

const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <h4 className="text-[1.85rem] leading-tight font-semibold mb-10 text-center">
        Testimonials
      </h4>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <p className="text-[0.94rem] mb-8 font-normal text-black text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptates, natus. Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <img
                src={imgprofile}
                className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                alt=""
              />
              <h4 className="text-[0.94rem] font-medium text-black">
                Michelle Anna
              </h4>
              <p className="text-[0.75rem] mb-2 font-medium text-[#878787]">
                Ceo and Co-Founder, XYZ..
              </p>
            </div>
          </div>
        </div>
        <div>
        
          <p className="text-[0.94rem] mb-8 font-normal text-black text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptates, natus. Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <img
                src={imgprofile}
                className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                alt=""
              />
              <h4 className="text-[0.94rem] font-medium text-black">
                Michelle Anna
              </h4>
              <p className="text-[0.75rem] mb-2 font-medium text-[#878787]">
                Ceo and Co-Founder, XYZ..
              </p>
            </div>
          </div>
        </div>
        <div>
         
          <p className="text-[0.94rem] mb-8 font-normal text-black text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quis possimus labore aliquid ratione rerum necessitatibus unde.
            Doloribus, atque porro. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptates, natus. Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <img
                src={imgprofile}
                className="w-[70px] h-[70px] rounded-full mx-auto object-cover mb-2  "
                alt=""
              />
              <h4 className="text-[0.94rem] font-medium text-black">
                Michelle Anna
              </h4>
              <p className="text-[0.75rem] mb-2 font-medium text-[#878787]">
                Ceo and Co-Founder, XYZ..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

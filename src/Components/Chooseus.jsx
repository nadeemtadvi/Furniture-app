import React from "react";
import imgStatic from "../assets/Images/why-choose-us-img 1.svg";

const Chooseus = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h4 className="capitalize text-[1.85rem] leading-tight font-semibold mb-4">
            Why choose us
          </h4>
          <p className="text-[0.94rem] mb-10 font-normal text-[#878787]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ipsa tempore non sunt. Unde distinctio consequatur quidem minus
            ullam qui laudantium alias placeat nihil.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="">
              <div>ICON</div>
              <p className="text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div>ICON</div>
              <p className="text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div>ICON</div>
              <p className="text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div>ICON</div>
              <p className="text-[0.97rem] mb-2 capitalize font-semibold">
                Fast & free Shipping
              </p>
              <p className="text-[0.94rem] mb-4 font-normal text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
          </div>
        </div>
        <div className="self-center justify-self-center">
            <img src={imgStatic} className="w-[350px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chooseus;

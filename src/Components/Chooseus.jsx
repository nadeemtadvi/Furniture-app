import React from "react";
import imgStatic from "../assets/Images/why-choose-us-img 1.svg";

const Chooseus = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-3">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h4 className="capitalize text-[1.6rem] leading-tight font-semibold mb-4">
            Why choose us
          </h4>
          <p className="text-[0.8rem] mb-10 font-light text-[#878787]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ipsa tempore non sunt. Unde distinctio consequatur quidem minus
            ullam qui laudantium alias placeat nihil.
          </p>
          <div className="grid grid-cols-2">
            <div className="">
              <div>ICON</div>
              <p className="text-[1rem] mb-3 capitalize font-medium">
                Fast & free Shipping
              </p>
              <p className="text-[0.8rem] mb-4 font-light text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div>ICON</div>
              <p className="text-[1rem] mb-3 capitalize font-medium">
                Fast & free Shipping
              </p>
              <p className="text-[0.8rem] mb-4 font-light text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div>ICON</div>
              <p className="text-[1rem] mb-3 capitalize font-medium">
                Fast & free Shipping
              </p>
              <p className="text-[0.8rem] mb-4 font-light text-[#878787]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                deleniti accusamus sit ducimus, laudantium similique.
              </p>
            </div>
            <div className="">
              <div>ICON</div>
              <p className="text-[1rem] mb-3 capitalize font-medium">
                Fast & free Shipping
              </p>
              <p className="text-[0.8rem] mb-4 font-light text-[#878787]">
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

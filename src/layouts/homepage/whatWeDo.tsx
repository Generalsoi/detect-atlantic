import React, { FC } from "react";
import UpArrow from "../../assets/images/uparrow.png";

export const WhatWeDo: FC = () => {
  return (
    <div className="text-white md:flex items-start justify-center px-4 py-10 md:gap-16 font-ibmPlexMono">
      <h4 className=" md:hidden text-2xl uppercase mb-6">our services</h4>
      <span className="md:w-[20%]">
        <h1 className="text-5xl md:text-7xl">What we do</h1>
      </span>

      <div className="md:w-[50%]">
        <h4 className="hidden md:block text-xl uppercase">our services</h4>
        <p className="text-lg my-8">
          We know that infrastructure maintenance is complicated - that’s why
          we’ve kept our services as flexible as possible to help address your
          specific needs.
        </p>
        <button className="flex items-center gap-4 bg-[#FF6108] border-none rounded-lg px-6 py-4 hover:translate-y-3 transition-all duration-300">
          Solutions{" "}
          <img src={UpArrow} alt="up-arrow" className="animate-bounce" />{" "}
        </button>
      </div>
    </div>
  );
};

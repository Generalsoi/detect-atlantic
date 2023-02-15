import React, { FC } from "react";
import MediaThree from "../../assets/images/media3.png";
import UpArrow from "../../assets/images/uparrow.png";

export const Platformsection: FC = () => {
  return (
    <div className="md:px-20 text-left flex flex-col items-center justify-center ">
      <div>
        <h3 className="uppercase text-xl">Platform</h3>
        <span>
          <p className="md:text-6xl font-bold text-3xl">See your data come</p>
          <p className="md:text-6xl font-bold text-3xl">to life with our</p>
          <p className="md:text-6xl font-bold text-3xl">platform</p>
        </span>
      </div>
      <img src={MediaThree} alt="" className="mt-10" />

      <div className="flex items-center gap-4 mt-10 md:px-16 py-8">
        <p>
          Store and manage inspections in a customer profile’s searchable
          database
        </p>
        <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-16"></span>
        <p>
          Filter detected issues by severity or type on a map-based
          visualization
        </p>
        <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-16"></span>
        <p>Automatically generate a PDF report for offline use</p>
      </div>

      <button className="uppercase bg-[#FF6108] px-8 py-3 border-none rounded-lg flex items-center gap-3">
        try now <img src={UpArrow} alt="uparrow" className="animate-bounce" />
      </button>
    </div>
  );
};

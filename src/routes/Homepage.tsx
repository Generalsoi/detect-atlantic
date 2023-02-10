import React from "react";
import { Navbar } from "./../components/Navbar";
import MediaOne from "../assets/images/media1.png";
import UpArrow from "../assets/images/uparrow.png";
import DownArrow from "../assets/images/downarrow.png";

export const Homepage = () => {
  return (
    <div className="font-ibmPlexMono">
      <Navbar />
      <div className="text-left md:flex flex-col items-center justify-center text-white px-4 py-10">
        <span>
          <h1 className="text-5xl md:text-8xl">We see it</h1>
          <h1 className="text-5xl md:text-8xl">before it</h1>
          <h1 className="text-5xl md:text-8xl">happens</h1>
        </span>
      </div>

      <div className="mt-8 pr-4 w-[100%]">
        <img src={MediaOne} alt="" className="" />
      </div>

      <div className="text-white mt-10 py-10 px-4 md:px-48 text-center">
        <p className="px-6 md:px-40">
          Detect can provide you with insightful actions to improve your assets’
          integrity at a lower cost. We are flexible in our support by offering
          your selection of data collection, annotation, and analysis.
        </p>

        <span className="flex flex-col md:flex-row items-center gap-8 justify-center mt-20">
          <button className="mt-4 md:mt-0 w-56 md:w-fit px-3 md:px-16 py-6 md:py-5 border border-white rounded-lg uppercase flex items-center justify-center gap-5 hover:translate-y-3 transition-all duration-300">
            learn more <img src={DownArrow} alt="down-arrow" />
          </button>
          <button className="mt-4 md:mt-0 w-56 md:w-fit px-3 md:px-16 py-6 md:py-5 border-none bg-[#FF6108] rounded-lg uppercase flex items-center justify-center gap-5 hover:-translate-y-3 transition-all duration-300">
            try our platform <img src={UpArrow} alt="up-arrow" />
          </button>
        </span>
      </div>
    </div>
  );
};

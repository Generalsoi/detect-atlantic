import React, { FC } from "react";
import MediaThree from "../../assets/images/media3.png";
import UpArrow from "../../assets/images/uparrow.png";
import { motion } from "framer-motion";
import HomePagePlatformVid from "../../assets/videos/detecthomepageplatformvid.mp4";

export const Platformsection: FC = () => {
  return (
    <div className="md:px-20 text-left flex flex-col items-center justify-center text-white mt-16 md:mt-60 ">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h3 className="uppercase text-xl ">Platform</h3>
        <span className="">
          <p className="md:text-6xl font-bold text-3xl">See your data come</p>
          <p className="md:text-6xl font-bold text-3xl">to life with our</p>
          <p className="md:text-6xl font-bold text-3xl">platform</p>
        </span>
      </motion.div>
      <motion.div
        className=" w-full md:w-[80%] md:h-screen overflow-hidden mt-8"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <video autoPlay muted playsInline loop>
          <source src={HomePagePlatformVid} type="video/mp4" />
        </video>
      </motion.div>

      <div className="hidden md:flex  w-[100%] relative items-center justify-center gap-4 mt-10 px-16 py-8">
        <p className="ml-[10%] md:ml-0 w-[100%]">
          Store and manage inspections in a customer profile’s searchable
          database
        </p>
        <span
          className="border border-t-0 border-r-0 border-b-0 h-16"
          style={{ borderLeftWidth: "0.1px", borderColor: "#AAAAAA" }}
        ></span>
        <p className="w-[100%]">
          Filter detected issues by severity or type on a map-based
          visualization
        </p>
        <span
          className="border border-t-0 border-r-0 border-b-0 h-16"
          style={{ borderLeftWidth: "0.1px", borderColor: "#AAAAAA" }}
        ></span>
        <p className="w-[100%]">
          Automatically generate a PDF report for offline use
        </p>
      </div>

      <button className="uppercase bg-[#FF6108] px-8 py-3 border-none rounded-lg flex items-center gap-3 mt-8">
        try now <img src={UpArrow} alt="uparrow" className="animate-bounce" />
      </button>
    </div>
  );
};

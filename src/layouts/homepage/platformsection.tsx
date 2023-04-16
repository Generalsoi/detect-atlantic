import React, { FC } from "react";
import MediaThree from "../../assets/images/media3.png";
import UpArrow from "../../assets/images/uparrow.png";
import { motion } from "framer-motion";
import HomePagePlatformVid from "../../assets/videos/homepageplatformvid.mp4";
import { Link } from "react-router-dom";

export const Platformsection: FC = () => {
  return (
    <div className="md:px-10 lg:px-20 text-left flex flex-col items-center justify-center text-white mt-16 md:mt-60 ">
      <div className="px-4 md:flex items-start justify-center md:gap-16 lg:gap-32 font-ibmPlexMono">
        <h4 className=" md:hidden text-2xl uppercase mb-6">
          See your data come to life
        </h4>
        <motion.span
          className="md:w-[30%] lg:w-[50%] md:text-left lg:text-center"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold">Platform</h1>
        </motion.span>

        <motion.div
          className="md:w-[50%]"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <h4 className="hidden md:block text-xl md:text-3xl uppercase">
            See your data come to life
          </h4>
          <p className="md:text-sm lg:text-lg my-8">
            Create clean datasets to quickly find <br /> what you need; run
            complex models to <br /> determine long-term trends and fix <br />{" "}
            defects before they become a critical <br /> risk to the network.
          </p>
        </motion.div>
      </div>
      <motion.div
        className=" w-full md:w-[80%]  overflow-hidden mt-8"
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

      <div className="flex flex-col md:flex-row items-center md:gap-10">
        <Link to="/platform">
          <button className="uppercase bg-transparent hover:bg-[#FF6108] px-8 py-3 border-2 hover:border-none rounded-lg flex items-center gap-3 mt-8">
            learn more{" "}
            <img src={UpArrow} alt="uparrow" className="animate-bounce" />
          </button>
        </Link>
        <Link
          to="https://detect-inspections.com/guest?token=KFSsOnW-jQCDfiEshXdndiaa0kYaNSoK"
          target={"_blank"}
        >
          <button className="uppercase bg-[#FF6108] px-8 py-3 border-none rounded-lg flex items-center gap-3 mt-8">
            try now{" "}
            <img src={UpArrow} alt="uparrow" className="animate-bounce" />
          </button>
        </Link>
      </div>
    </div>
  );
};

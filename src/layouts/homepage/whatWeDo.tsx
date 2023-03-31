import React, { FC } from "react";
import UpArrow from "../../assets/images/uparrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const WhatWeDo: FC = () => {
  return (
    <div
      className="text-white md:mt-40 md:flex items-start justify-center px-4 md:pl-20  md:gap-16 font-ibmPlexMono"
      id="whatwedo"
    >
      <h4 className=" md:hidden text-2xl uppercase mb-6">our services</h4>
      <motion.span
        className="md:w-[50%] md:text-center"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">What we do</h1>
      </motion.span>

      <motion.div
        className="md:w-[50%]"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h4 className="hidden md:block text-xl md:text-3xl uppercase">
          our services
        </h4>
        <p className="text-lg my-8">
          We offer a combination of expert drone
          <br /> pilots & flight missions; certified <br /> inspection analysis
          and a data & <br /> artificial intelligence platform <br />
          as a service.
        </p>
        <Link to="/solutions/powerlineinspectionservices">
          <button className="flex items-center gap-4 bg-[#FF6108] border-none rounded-lg px-6 py-4 hover:translate-y-3 transition-all duration-300">
            Learn More{" "}
            <img src={UpArrow} alt="up-arrow" className="animate-bounce" />{" "}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

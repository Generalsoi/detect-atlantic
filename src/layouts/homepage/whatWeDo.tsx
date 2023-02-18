import React, { FC } from "react";
import UpArrow from "../../assets/images/uparrow.png";
import { motion } from "framer-motion";

export const WhatWeDo: FC = () => {
  return (
    <div className="text-white md:flex items-start justify-center px-4  md:gap-16 font-ibmPlexMono">
      <h4 className=" md:hidden text-2xl uppercase mb-6">our services</h4>
      <motion.span
        className="md:w-[20%]"
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
      </motion.div>
    </div>
  );
};

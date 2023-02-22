import React, { FC } from "react";
import { Navbar } from "../../components/Navbar";
import Media4 from "../../assets/images/media4.png";
import UpArrow from "../../assets/images/uparrow.png";
import { Footer } from "./../../components/Footer";
import { motion } from "framer-motion";
import { ColletAnnotateScroll } from "../homepage/colletAnnotate";

export const OnDemand: FC = () => {
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-16 md:mt-20 py-10 h-screen">
        <img
          src={Media4}
          alt="mediafour"
          className="h-60 md:h-[32rem] w-full md:w-fit"
        />

        <div className="mt-20 md:px-20 px-4 flex items-center justify-center text-center">
          <div className="w-full md:w-[50%] border border-x-0 border-y-1 border-neutral-400 md:px-10 py-8 flex items-center justify-center">
            <p className="w-full">
              We know that infrastructure maintenance is complicated - that’s
              why we’ve kept our services as flexible as possible to help
              address your specific needs.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="my-10 md:my-28 text-center px-4 md:px-20 py-10"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Do you have an idea on how leveraging
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold">
          data with Detect could help your
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold">business?</h2>
      </motion.div>

      <motion.div
        className="flex items-center justify-center pb-20"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-sm border-none rounded-lg px-6 py-4">
          Let's chat{" "}
          <img src={UpArrow} alt="up arrow" className="animate-bounce" />
        </button>
      </motion.div>

      <ColletAnnotateScroll />

      <motion.div
        className="flex flex-col items-center justify-center mt-16 md:mt-20 py-10 h-screen"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <img
          src={Media4}
          alt="mediafour"
          className="h-60 md:h-[32rem] w-full md:w-fit"
        />

        <div className="mt-20 md:px-20 px-4 flex items-center justify-center text-center">
          <p className="text-lg md:text-2xl">Curious to learn more?</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center pb-20"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-sm border-none rounded-lg px-6 py-4">
          Learn More
          <img src={UpArrow} alt="up arrow" className="animate-bounce" />
        </button>
      </motion.div>

      <Footer />
    </div>
  );
};

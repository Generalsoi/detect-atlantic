import React, { FC } from "react";
import FlightPlanning from "../../assets/images/flightplanning.jpg";
import { motion } from "framer-motion";

export const Flightplanning: FC = () => {
  return (
    <motion.div
      className="px-4 md:px-20 lg:flex justify-center md:gap-10 lg:gap-20"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <img
        src={FlightPlanning}
        alt="flightplanning"
        className="w-full lg:w-[45%] h-[15rem] md:h-[30rem]"
      />
      <div className="w-full lg:w-[40%]">
        <h3 className="font-bold text-2xl md:text-4xl mt-8 lg:mt-0">
          Comprehensive Powerline Inspection
        </h3>
        <p className="mt-8 md:mt-16 text-justify">
          Elevate your powerline inspections to new heights with our
          cutting-edge drone technology, providing unparalleled safety and
          efficiency in assessing your critical infrastructure. Experience
          streamlined maintenance and uninterrupted operations through
          high-resolution imagery and advanced data analysis, ensuring the
          utmost reliability for your powerline networks.
        </p>
      </div>
    </motion.div>
  );
};

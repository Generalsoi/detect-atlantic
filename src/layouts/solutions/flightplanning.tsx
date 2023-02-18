import React, { FC } from "react";
import FlightPlanning from "../../assets/images/flightplanning.png";
import { motion } from "framer-motion";

export const Flightplanning: FC = () => {
  return (
    <motion.div
      className="px-4 md:px-20 md:flex justify-center gap-20"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <img
        src={FlightPlanning}
        alt="flightplanning"
        className="w-full md:w-[45%] h-[15rem] md:h-[30rem]"
      />
      <div className="w-full md:w-[40%]">
        <h3 className="font-bold text-2xl md:text-4xl mt-8 md:mt-0">
          Flight Planning Engine
        </h3>
        <p className="mt-8 md:mt-16">
          Use our proprietary Flight Planning Engine to automate your flight
          planning. Topography, GPS coordinates of structures, access, and
          restrictions, and nearby roads are all used to plan flights.
        </p>
      </div>
    </motion.div>
  );
};

import React, { FC } from "react";
import { motion } from "framer-motion";

export const AboutUs: FC = () => {
  return (
    <div className="px-4 md:px-20 py-10 md:py-16 mt-10">
      <motion.div
        className="bg-[#1A1A1A] py-10 px-4 md:p-20 lg:p-40"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 font-bold">About</h2>
        <hr className="mt-1 mb-10 md:mb-16" />
        <p className="mb-8 text-lg text-justify">
          Inspecting and monitoring large distances of critical infrastructure
          is not only challenging but expensive and poses safety hazards. The
          same goes for collecting and managing usable data to fix issues when
          they are needed most. As the demand for electricity grows and
          infrastructure ages, the current methods pose a great threat to
          increase the cost of maintenance and longer downtime in major events
          like storms. We founded Detect with a singular focus to reduce these
          costs over time while providing better quality information to achieve
          actionable intelligence in real time.{" "}
        </p>
      </motion.div>
    </div>
  );
};

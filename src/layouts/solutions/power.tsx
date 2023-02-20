import React, { FC } from "react";
import Media4 from "../../assets/images/media4.png";
import { motion } from "framer-motion";
import { Navbar } from "./../../components/Navbar";
import { Footer } from "./../../components/Footer";
import { Stormsupport } from "./stormsupport";
import { Flightplanning } from "./flightplanning";
import { ColletAnnotateScroll } from "./../homepage/colletAnnotate";

export const Power: FC = () => {
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
          <div
            className="w-full md:w-[50%] border border-x-0 border-neutral-400 md:px-10 py-8 flex items-center justify-center"
            style={{ borderTopWidth: "0.1px", borderBottomWidth: "0.1px" }}
          >
            <p className="w-full">
              We know that infrastructure maintenance is complicated - that’s
              why we’ve kept our services as flexible as possible to help
              address your specific needs.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="px-4 md:px-20 mt-20 py-20"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h2 className="md:w-[50%] text-5xl md:text-8xl font-bold">
          Full Service Inspection
        </h2>
      </motion.div>

      <ColletAnnotateScroll />

      <Flightplanning />
      <Stormsupport />

      <Footer />
    </div>
  );
};

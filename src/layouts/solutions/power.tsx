import React, { FC } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./../../components/Navbar";
import { Footer } from "./../../components/Footer";
import { Stormsupport } from "./stormsupport";
import { Flightplanning } from "./flightplanning";
import { ColletAnnotateScroll } from "./../homepage/colletAnnotate";
import { Link } from "react-router-dom";
import UpArrow from "../../assets/images/uparrow.png";

export const Power: FC = () => {
  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Navbar />

      <div className="mt-20 md:mt-20 md:px-20 lg:px-[15%] py-10 md:py-20 flex flex-col">
        <div className="mb-10 md:mb-20 text-left px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            End to End
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Drone powerline
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Inspections
          </motion.h1>
        </div>

        <motion.div
          className="mb-10 md:mb-20 text-sm md:text-lg px-4"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <p className="text-justify md:text-xl">
            Our team of seasoned pilots and skilled technicians specializes in
            capturing exceptional imagery and videos essential for accurately
            evaluating the health of your critical infrastructure, all while
            strictly adhering to safety regulations and guidelines. We achieve
            this objective through our unique combination of expertise, amassed
            from years of experience in repairing various powerline types, and
            matched pilot proficiency in navigating the most challenging
            terrains.{" "}
          </p>
        </motion.div>
      </div>

      <ColletAnnotateScroll />

      <Flightplanning />
      <Stormsupport />

      <div className="w-full flex items-center justify-center mt-10">
        <Link to="/solutions/solarandwindinspectionservices">
          <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 border-none rounded-lg mt-10">
            Energy
            <img src={UpArrow} alt="up arrow" className="animate-bounce" />
          </button>
        </Link>
      </div>

      <Footer />
    </motion.div>
  );
};

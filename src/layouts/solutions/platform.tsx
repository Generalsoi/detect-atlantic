import React, { FC } from "react";
import { Navbar } from "./../../components/Navbar";
import PlatformImgTwo from "../../assets/images/platformimgtwo.png";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";

export const Platform: FC = () => {
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />

      <div className="mt-20 md:mt-20 md:px-20 py-10 md:py-20 flex flex-col items-center justify-center text-center">
        <div className="mb-10 md:mb-20 px-4">
          <motion.h1
            className="text-4xl md:text-8xl font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            We are only
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-8xl font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            getting started
          </motion.h1>
        </div>

        <motion.div
          className="mb-10 md:mb-20 text-sm md:text-lg"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <p>
            We’re actively working on building the world’s best platform to{" "}
          </p>
          <p>
            schedule, manage and analyze all your infrastructure maintenance
          </p>
          <p> needs.</p>
        </motion.div>
      </div>

      <div className="mt-10">
        <motion.h2
          className="px-4 md:px-32 text-3xl md:text-7xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          Data Command Center
        </motion.h2>
        <motion.img
          className="px-0 md:px-32 mt-20"
          src={PlatformImgTwo}
          alt="platform image two "
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        />

        <motion.div
          className="px-4 md:px-32 mt-20"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <p>Our functional web-based platforms can:</p>
          <ul className="mt-10 list-disc px-4 md:px-10">
            <li>
              Store and manage inspections in a customer profile’s searchable
              database
            </li>
            <li>
              Show annotations from our certified Powerline Technicians for
              every structure
            </li>
            <li>Filter detected issues by severity or type</li>
            <li>Automatically generate a PDF report for offline use</li>
          </ul>
          <div>
            <p className="mt-10 w-full md:w-[80%]">
              Any GPS-tagged imagery and notes can be used Using SCOPE, Detect
              can build a timeline for each asset - its life story.
            </p>
            <p className="mt-10 w-full md:w-[80%]">
              Using rich data and this story, Detect will be able to determine
              long-term trends and extrapolate that to other
              structures/equipment, and fix defects before they become a
              critical risk to the network.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

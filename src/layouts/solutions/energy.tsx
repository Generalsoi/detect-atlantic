import React, { FC } from "react";
import { Navbar } from "../../components/Navbar";
import EnergyImgOne from "../../assets/images/energyimg1.png";
import EnergyImgTwo from "../../assets/images/energyimg2.png";
import { motion } from "framer-motion";
import UpArrow from "../../assets/images/uparrow.png";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import EnergyVid from "../../assets/videos/energyvid.mp4";

export const Energy: FC = () => {
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />

      <motion.div
        className="md:px-10 lg:px-20 w-full lg:h-screen flex items-center  relative overflow-hidden mt-20 md:mt-28 lg:mt-20"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <video autoPlay muted playsInline loop>
          <source src={EnergyVid} type="video/mp4" />
        </video>
      </motion.div>

      <div className="md:px-20 hidden lg:flex items-center justify-center gap-20  md:py-40">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <img src={EnergyImgOne} alt="energy-image-one" />
          <span>
            <h2 className="mt-16 text-3xl font-bold">Wind Energy</h2>
            <h2 className="mb-10 text-3xl font-bold">Asset Monitoring</h2>
          </span>
          <span>
            <p className=" text-sm">Inspect your wind energy assets quickly,</p>
            <p className=" text-sm">safely and fix your issues, before they </p>
            <p className=" text-sm">
              fail. Using repeatable drone flight paths,
            </p>
            <p className=" text-sm">
              reduce inspection downtime with safer, faster
            </p>
            <p className=" text-sm">
              and more cost effective drone inspections.
            </p>
            <p className=" text-sm">All data is stored and visualized on our</p>
            <p className=" text-sm">proprietary platform where data can be</p>
            <p className=" text-sm">leveraged to determine trends.</p>
          </span>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <span>
            <h2 className="text-3xl font-bold">Solar Energy</h2>
            <h2 className="mb-10 text-3xl font-bold">Asset Monitoring</h2>
          </span>
          <span>
            <p className=" text-sm">
              Automate your solar module monitoring with
            </p>
            <p className=" text-sm">
              RGB and infrared scans using programmed drone
            </p>
            <p className=" text-sm">
              flight paths and geo-tagged imager. Find defects{" "}
            </p>
            <p className=" text-sm">
              and underperforming solar modules instantly and
            </p>
            <p className=" text-sm">
              quickly remediate them for maximum system{" "}
            </p>
            <p className="mb-10 text-sm">performance.</p>
          </span>
          <img src={EnergyImgTwo} alt="energy-image-two" />
        </motion.div>
      </div>

      <div className="block md:px-20 lg:hidden mt-16 md:mt-20 py-20">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <img src={EnergyImgOne} alt="energy-image-one" />
          <div className="px-4">
            <h2 className="text-3xl font-bold mt-10">Solar Energy</h2>
            <h2 className="mb-10 text-3xl font-bold">Monitoring</h2>
          </div>
          <div className="px-4">
            <p className=" text-sm">
              Automate your solar module monitoring with RGB and infrared scans
              using programmed drone flight paths and geo-tagged imager. Find
              defects and underperforming solar modules instantly and quickly
              remediate them for maximum system performance.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-28"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <img src={EnergyImgTwo} alt="energy-image-two" />
          <div className="px-4">
            <h2 className="mt-16 text-3xl font-bold">Wind Energy</h2>
            <h2 className="mb-10 text-3xl font-bold">Monitoring</h2>
          </div>
          <div className="px-4">
            <p className=" text-sm">Inspect your wind energy assets quickly,</p>
            <p className=" text-sm">
              safely and fix your issues, before they fail. Using repeatable
              drone flight paths, reduce inspection downtime with safer, faster
              and more cost effective drone inspections. All data is stored and
              visualized on our proprietary platform where data can be leveraged
              to determine trends.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center py-20 ">
        <Link to="/contact">
          <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 border-none rounded-lg">
            Book now{" "}
            <img src={UpArrow} alt="up arrow" className="animate-bounce" />
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};
